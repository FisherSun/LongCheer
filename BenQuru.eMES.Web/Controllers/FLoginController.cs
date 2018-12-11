using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace BenQuru.eMES.Web.Controllers
{
    public class FLoginController : ApiController
    {
        // GET: api/FLogin
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/FLogin/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/FLogin
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/FLogin/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/FLogin/5
        public void Delete(int id)
        {
        }
    }
}
