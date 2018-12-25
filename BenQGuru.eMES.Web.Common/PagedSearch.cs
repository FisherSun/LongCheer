using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BenQGuru.eMES.Web.Common
{
    /// <summary>
    /// 分页查询条件
    /// </summary>
    public class PagedSearch
    {
        /// <summary>
        /// 查询数量
        /// </summary>
        public int Count { get; set; }

        /// <summary>
        /// 起始位置
        /// </summary>
        public int Skip { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        public string OrderBy { get; set; }
    }
}
