using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using BenQGuru.eMES.Web.DAL;
using BenQGuru.eMES.Web.Model;
using BenQGuru.eMES.Web.Common;
using BenQGuru.eMES.Web.Libs.Search;

namespace BenQuru.eMES.Web.Controllers
{
    public class TestController : ApiController
    {
        private static TestDAL dal = new TestDAL();
        /// <summary>
        /// 分页查询
        /// </summary>
        /// <param name="search"></param>
        /// <returns></returns>
        public PagedResult<TBLTEST> Get([FromUri]TestSearch search)
        {
            return dal.GetListByPage(search);
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public IHttpActionResult Put([FromBody]TBLTEST entity)
        {
            bool result = dal.AddLanguage(entity);
            if (result)
                return Ok("添加成功！");
            else
              return BadRequest("添加失败！");
            
        }

        /// <summary>
        /// 修改
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public IHttpActionResult Post([FromBody]TBLTEST entity)
        {
            bool result = dal.EditLanguage(entity);
            if (result)
                return Ok("修改成功！");
            else
                return BadRequest("修改失败！");
        }
        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="UserCode"></param>
        /// <returns></returns>
        public IHttpActionResult Delete(string UserCode)
        {
            bool result = dal.DeleteLanguage(UserCode);
            if (result)
                return Ok("修改成功！");
            else
                return BadRequest("修改失败！");
        }

    }
}
