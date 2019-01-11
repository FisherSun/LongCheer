using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BenQGuru.eMES.Web.BLL.BaseSetting;
using BenQGuru.eMES.Web.Model.BaseSetting;
using BenQGuru.eMES.Web.Common;
namespace BenQuru.eMES.Web.Controllers
{
    public class SEGController : ApiController
    {
        SEGBLL segBLL = new SEGBLL();
        /// <summary>
        /// 分页查询
        /// </summary>
        /// <param name="search"></param>
        /// <returns></returns>
        public PagedResult<SEG> Get([FromUri]SEG search)
        {
            return segBLL.GetListByPage(search);
        }

        // GET: api/SEG/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/SEG
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/SEG/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/SEG/5
        public void Delete(int id)
        {
        }
    }
}
