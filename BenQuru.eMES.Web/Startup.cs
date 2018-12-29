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
using Microsoft.Owin.Security.OAuth;
using System.Net.Http;
using Microsoft.Owin.Hosting;
using System.Net.Http.Formatting;
using System.Web.Http.Dispatcher;
using BenQuru.eMES.Web.config;

[assembly: OwinStartup(typeof(BenQuru.eMES.Web.Startup))]
namespace BenQuru.eMES.Web
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
            ConfigureAuth(app);
            ConfigOData(app);
            ConfigureDefaultPage(app);

            //HttpConfiguration config = new HttpConfiguration();
            //config.Routes.MapHttpRoute(
            //    name: "CustomApi",
            //    routeTemplate: "api/{controller}/{action}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);
            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);
            
            ////config.Services.Replace(typeof(IHttpControllerSelector), new WebApiControllerSelector(config));
            ////将默认xml返回数据格式改为json
            //config.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
            //config.Formatters.JsonFormatter.MediaTypeMappings.Add(new QueryStringMapping("datatype", "json", "application/json"));
            //app.UseWebApi(config);
        }
        void ConfigOData(IAppBuilder builder)
        {
            //var config = new HttpConfiguration();
            //config
            //   .Routes
            //   .MapDynamicODataServiceRoute
            //       (
            //           "odata"
            //           , "odata"
            //           , config
            //       );

            //var sqlSource = new SQLDataSource("db", Config.ConnectionString, (method, target) =>
            //{
            //    return true;
            //});
            //DynamicOData.DynamicOData.AddDataSource(sqlSource);
            //DynamicOData.DynamicOData.BeforeExcute = (ri) =>
            //{
            //    if (ri.Method == MethodType.Func || ri.Method == MethodType.Create
            //    || ri.Method == MethodType.Delete || ri.Method == MethodType.Merge
            //    || ri.Method == MethodType.Replace)
            //    {
            //        ri.Parameters["UserId"] = new JValue(AuthenticatedUserHelper.CurrentUser.UserId);
            //        ri.Parameters["Module"] = new JValue(Utility.DynamicODataModule);
            //    }
            //};
            //config.AddODataQueryFilter();
            ////config.MessageHandlers.Add(new MethodOverrideHandler());
            //config.Filters.Add(new ApiActionFilter());
            //builder.UseWebApi(config);
        }

        void ConfigureFormAuth(IAppBuilder app)
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
                //Provider = new ApplicationOAuthProvider(),
                //Token 过期时间，默认2个小时
                //AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(double.Parse(Config.AccessTokenExpireTimeSpan)),
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