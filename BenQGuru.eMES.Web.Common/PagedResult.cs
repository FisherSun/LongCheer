using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BenQGuru.eMES.Web.Common
{
    public class PagedResult<T>
    {
        /// <summary>
        /// 数据总数
        /// </summary>
        public int Total { get; set; }

        /// <summary>
        /// 分页查询结果
        /// </summary>
        public List<T> Rows { get; set; }
    }
}
