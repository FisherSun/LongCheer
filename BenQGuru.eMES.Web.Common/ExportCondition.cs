using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BenQGuru.eMES.Web.Common
{
    public class ExportCondition : PagedSearch
    {
        /// <summary>
        /// 导出标题
        /// </summary>
        public string ExportTitles { get; set; }

        /// <summary>
        /// 导出列
        /// </summary>
        public string ExportColumns { get; set; }

        /// <summary>
        /// 根据不同时区调整时间
        /// </summary>
        public int? ExportTimeZone { get; set; }
    }
}
