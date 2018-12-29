using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;

using System.Web.Http;
using System.Web.Http.Dispatcher;
using BenQuru.eMES.Web.config;

[assembly: OwinStartup(typeof(BenQuru.eMES.Web.OwinSelfHost.Startup))]

namespace BenQuru.eMES.Web.OwinSelfHost
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Services.Replace(typeof(IHttpControllerSelector),new  WebApiControllerSelector(config));
            app.UseWebApi(config);
        }
    }
}
