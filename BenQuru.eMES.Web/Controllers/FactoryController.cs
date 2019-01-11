using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using BenQGuru.eMES.Web.BLL.BaseSetting;
using BenQGuru.eMES.Web.Model;
using BenQGuru.eMES.Web.Common;

namespace BenQuru.eMES.Web.Controllers
{
    public class FactoryController : ApiController
    {
        FactoryBLL factoryBLL = new FactoryBLL();
        /// <summary>
        /// 分页查询
        /// </summary>
        /// <param name="search"></param>
        /// <returns></returns>
        public PagedResult<Factory> Get([FromUri]Factory search)
        {
            return factoryBLL.GetListByPage(search);
        }

        // GET: api/Factory/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Factory
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Factory/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Factory/5
        public void Delete(int id)
        {
        }
    }
}
