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
    
    public partial class TBLITEMTRANS
    {
        public decimal SERIAL { get; set; }
        public string TRANSNO { get; set; }
        public Nullable<int> TRANSLINE { get; set; }
        public string ITEMCODE { get; set; }
        public string FRMSTORAGEID { get; set; }
        public string FRMSTACKCODE { get; set; }
        public string TOSTORAGEID { get; set; }
        public string TOSTACKCODE { get; set; }
        public long TRANSQTY { get; set; }
        public string MEMO { get; set; }
        public string TRANSTYPE { get; set; }
        public string BUSINESSCODE { get; set; }
        public Nullable<int> ORGID { get; set; }
        public string MUSER { get; set; }
        public Nullable<int> MDATE { get; set; }
        public Nullable<int> MTIME { get; set; }
        public string TOFACTORY { get; set; }
        public string FROMFACTORY { get; set; }
    }
}
