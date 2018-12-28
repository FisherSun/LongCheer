using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;

using System.Web.Http;

[assembly: OwinStartup(typeof(BenQuru.eMES.Web.OwinSelfHost.Startup))]

namespace BenQuru.eMES.Web.OwinSelfHost
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // 有关如何配置应用程序的详细信息，请访问 https://go.microsoft.com/fwlink/?LinkID=316888

            HttpConfiguration config = new HttpConfiguration();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            app.UseWebApi(config);
        }
    }
}
