//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace BenQGuru.eMES.Web.Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class TBLSMTALERT
    {
        public int ALERTSEQ { get; set; }
        public string ALERTTYPE { get; set; }
        public string PRODUCTCODE { get; set; }
        public string MOCODE { get; set; }
        public string MACHINECODE { get; set; }
        public string MACHINESTATIONCODE { get; set; }
        public string FEEDERCODE { get; set; }
        public int FEEDERMAXCOUNT { get; set; }
        public int FEEDERALERTCOUNT { get; set; }
        public int FEEDERUSEDCOUNT { get; set; }
        public string REELNO { get; set; }
        public decimal REELQTY { get; set; }
        public decimal REELUSEDQTY { get; set; }
        public int ALERTDATE { get; set; }
        public int ALERTTIME { get; set; }
        public string ALERTSTATUS { get; set; }
        public string ALERTLEVEL { get; set; }
        public string MAINTAINUSER { get; set; }
        public int MAINTAINDATE { get; set; }
        public int MAINTAINTIME { get; set; }
        public string SSCODE { get; set; }
    }
}
