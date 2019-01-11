using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using BenQGuru.eMES.Web.DAL.BaseSetting;
using BenQGuru.eMES.Web.Common;
using BenQGuru.eMES.Web.Model;

namespace BenQGuru.eMES.Web.BLL.BaseSetting
{
    public class FactoryBLL
    {
        FactoryDAL factoryDAL = new FactoryDAL();
        /// <summary>
        /// 分页查询
        /// </summary>
        /// <param name="search">查询条件</param>
        /// <returns></returns>
        public PagedResult<Factory> GetListByPage(Factory search)
        {
            return factoryDAL.GetListByPage(search);
        }
    }
}
