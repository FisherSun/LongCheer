using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Net.Http;
using Microsoft.Owin.Hosting;
//using BenQuru.eMES.Web;

namespace BenQuru.eMES.Web.OwinSelfHost
{
    class Program
    {
        static void Main(string[] args)
        {
            string baseAddress = "http://localhost:80/";
            // Start OWIN host 
            using (WebApp.Start<Startup>(url: baseAddress))
            {
                // Create HttpCient and make a request to api/values 
                HttpClient client = new HttpClient();

                //var response = client.GetAsync(baseAddress + "api/Test").Result;

                //Console.WriteLine(response);
                //Console.WriteLine(response.Content.ReadAsStringAsync().Result);
                //Console.ReadLine();
                Console.WriteLine("Running on {0}", baseAddress);
                Console.WriteLine("Press enter to exit");
                Console.ReadLine();
            }
        }
    }
}
