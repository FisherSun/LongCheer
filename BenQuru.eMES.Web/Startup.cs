using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.StaticFiles;
using Newtonsoft.Json.Linq;
using Owin;
using System;
using System.Web;
using System.Web.Http;
using System.Web.Http.Batch;
using System.Web.OData.Extensions;
using Geely.CEP.Web.Common;
using Geely.CEP.Web.Models;
using Geely.CEP.DynamicOData;
using Geely.CEP.DynamicOData.Sql;
using Microsoft.Owin.Security.OAuth;

[assembly: OwinStartup(typeof(Geely.CEP.Web.Startup))]
namespace Geely.CEP.Web
{
    public partial class Startup
    {

        public static string PublicClientId { get; private set; }


        static Startup()
        {
            PublicClientId = "self";
        }

        public void Configuration(IAppBuilder app)
        {
            //configureFormAuth(app);
            ConfigureAuth(app);
            ConfigOData(app);
        }
        void ConfigOData(IAppBuilder builder)
        {
            var config = new HttpConfiguration();
            config
               .Routes
               .MapDynamicODataServiceRoute
                   (
                       "odata"
                       , "odata"
                       , config
                   );

            var sqlSource = new SQLDataSource("db", Config.ConnectionString, (method, target) =>
            {
                return true;
            });
            DynamicOData.DynamicOData.AddDataSource(sqlSource);
            DynamicOData.DynamicOData.BeforeExcute = (ri) =>
            {
                if (ri.Method == MethodType.Func || ri.Method == MethodType.Create
                || ri.Method == MethodType.Delete || ri.Method == MethodType.Merge
                || ri.Method == MethodType.Replace)
                {
                    ri.Parameters["UserId"] = new JValue(AuthenticatedUserHelper.CurrentUser.UserId);
                    ri.Parameters["Module"] = new JValue(Utility.DynamicODataModule);
                }
            };
            config.AddODataQueryFilter();
            //config.MessageHandlers.Add(new MethodOverrideHandler());
            config.Filters.Add(new ApiActionFilter());
            builder.UseWebApi(config);
        }

        void configureFormAuth(IAppBuilder app)
        {
            // Enable the application to use a cookie to store information for the signed in user
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie
            });
            // Use a cookie to temporarily store information about a user logging in with a third party login provider
            app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);
        }

        void ConfigureAuth(IAppBuilder app)
        {
            var OAuthOptions = new OAuthAuthorizationServerOptions
            {
                //获取Token的路径
                TokenEndpointPath = new PathString("/Token"),
                Provider = new ApplicationOAuthProvider(),
                //Token 过期时间，默认2个小时，与阿里保持一致
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(double.Parse(Config.AccessTokenExpireTimeSpan)),
                //在生产模式下设 AllowInsecureHttp = false
                AllowInsecureHttp = true
            };

            //app.UseCookieAuthentication(new CookieAuthenticationOptions());
            //app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalBearer);
            app.UseOAuthBearerTokens(OAuthOptions);

        }

        public void ConfigureDefaultPage(IAppBuilder app)
        {
            var root = AppDomain.CurrentDomain.BaseDirectory;
            var physicalFileSystem = new PhysicalFileSystem(root);
            var options = new FileServerOptions
            {
                EnableDefaultFiles = true,
                FileSystem = physicalFileSystem
            };
            options.StaticFileOptions.FileSystem = physicalFileSystem;
            options.StaticFileOptions.ServeUnknownFileTypes = true;
            options.DefaultFilesOptions.DefaultFileNames = new[] { "index.html" };
            app.UseFileServer(options);
        }
    }
}