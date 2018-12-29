using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Net.Http;
using Microsoft.Owin.Hosting;
//using BenQuru.eMES.Web;
using System.Reflection;

namespace BenQuru.eMES.Web.OwinSelfHost
{
    class Program
    {
        static void Main(string[] args)
        {
            string baseAddress = "http://10.89.32.87:9000/";
            // Start OWIN host 
            using (WebApp.Start<BenQuru.eMES.Web.Startup>(url: baseAddress))
            {
                Console.WriteLine("OWIN自宿主程序已开启！");
                Console.WriteLine("Press enter to exit");
                Console.ReadLine();
            }
        }
    }
}
