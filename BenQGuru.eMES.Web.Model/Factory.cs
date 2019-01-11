using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using BenQGuru.eMES.Web.Common;

namespace BenQGuru.eMES.Web.Model
{
    /// <summary>
    /// 工厂类
    /// 模块：基础设置 > 生产布局定义 > 工厂维护 
    /// </summary>
    public class Factory:ExportCondition
    {
        public string FACCODE { get; set; }
        public string FACDESC { get; set; }
        public string MUSER { get; set; }
        public int MDATE { get; set; }
        public int MTIME { get; set; }
        public string EATTRIBUTE1 { get; set; }
        public Nullable<int> ORGID { get; set; }
    }
}
