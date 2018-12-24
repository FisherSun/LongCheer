using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Threading.Tasks;

using BenQGuru.eMES.Web.EntityFramework;
using BenQGuru.eMES.Web.Model;
using BenQGuru.eMES.Web.CommonFactory;

namespace BenQuru.eMES.Web.Controllers
{
    //public class UserController : WebApiBaseController
    public class UserController : ApiController
    {
        //private readonly LongCheerEntities DbContext;
        //public UserController()
        //{
        //    this.DbContext = new LongCheerEntities();
        //}
        readonly OracleDBContext DbContext = new OracleDBContext();
        /// <summary>
        /// 系统用户登录
        /// </summary>
        /// <param name="usercode">账号</param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpGet]
        //public IHttpActionResult CheckUserLogin(string usercode,string password)
        public string CheckUserLogin(string usercode, string password)
        {
            //TBLUSER user = DbContext.User.Where(x => x.USERCODE == usercode).FirstOrDefault();
            DapperFactory dapper = new DapperFactory();
            var result = dapper.CheckLogin(usercode);
            if (result <= 0)
            {
                //return BadRequest("用户名不存在！");
                return "用户名不存在！";
            }
            return "登录成功！";
            //return Ok("登录成功！");
            //return Ok(new { message = "登录成功！" });
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
