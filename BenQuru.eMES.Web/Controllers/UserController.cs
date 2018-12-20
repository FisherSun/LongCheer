using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using BenQGuru.eMES.Web.EntityFramework;

namespace BenQuru.eMES.Web.Controllers
{
    public class UserController : ApiController
    {
        OracleDBContext dbcontext = new OracleDBContext();

        public string Get([FromBody]string usercode,[FromBody]string password)
        {
            //dbcontext.

            //dbcontext.User.SqlQuery("",new sqlpara)
            return "";
        }
        // GET: api/User
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/User/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/User
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/User/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
        }
    }
}
