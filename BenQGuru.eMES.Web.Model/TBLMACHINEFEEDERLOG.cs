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
    
    public partial class TBLMACHINEFEEDERLOG
    {
        public int LOGNO { get; set; }
        public string PRODUCTCODE { get; set; }
        public string MOCODE { get; set; }
        public string MACHINECODE { get; set; }
        public string MACHINESTATIONCODE { get; set; }
        public string FEEDERSPECCODE { get; set; }
        public string FEEDERCODE { get; set; }
        public string REELNO { get; set; }
        public string LOADUSER { get; set; }
        public int LOADDATE { get; set; }
        public int LOADTIME { get; set; }
        public string MATERIALCODE { get; set; }
        public decimal UNITQTY { get; set; }
        public string LOTNO { get; set; }
        public string DATECODE { get; set; }
        public string CHECKRESULT { get; set; }
        public string FAILREASON { get; set; }
        public string OPERATIONTYPE { get; set; }
        public decimal REELUSEDQTY { get; set; }
        public string MUSER { get; set; }
        public int MDATE { get; set; }
        public int MTIME { get; set; }
        public string EATTRIBUTE1 { get; set; }
        public string OPERESCODE { get; set; }
        public string OPESSCODE { get; set; }
        public string UNLOADUSER { get; set; }
        public Nullable<int> UNLOADDATE { get; set; }
        public Nullable<int> UNLOADTIME { get; set; }
        public string UNLOADTYPE { get; set; }
        public string EXCHGFEEDERCODE { get; set; }
        public string EXCHGREELNO { get; set; }
        public string SSCODE { get; set; }
        public Nullable<decimal> REELCHKDIFFQTY { get; set; }
        public string STATIONENABLED { get; set; }
        public string TBLGRP { get; set; }
        public Nullable<int> MOSEQ { get; set; }
    }
}
