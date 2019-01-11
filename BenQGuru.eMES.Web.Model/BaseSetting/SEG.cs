using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BenQGuru.eMES.Web.Common;
namespace BenQGuru.eMES.Web.Model.BaseSetting
{
    public class SEG:ExportCondition
    {
        public string SEGCODE { get; set; }
        public int SEGSEQ { get; set; }
        public string SEGDESC { get; set; }
        public string SHIFTTYPECODE { get; set; }
        public string MUSER { get; set; }
        public int MDATE { get; set; }
        public int MTIME { get; set; }
        public string EATTRIBUTE1 { get; set; }
        public Nullable<int> ORGID { get; set; }
        public string FACCODE { get; set; }
    }
}
