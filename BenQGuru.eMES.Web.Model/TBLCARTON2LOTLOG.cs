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
    
    public partial class TBLCARTON2LOTLOG
    {
        public decimal SERIAL { get; set; }
        public string CARTONNO { get; set; }
        public string LOTCODE { get; set; }
        public decimal CARTONQTY { get; set; }
        public string PACKUSER { get; set; }
        public Nullable<int> PACKDATE { get; set; }
        public Nullable<int> PACKTIME { get; set; }
        public string REMOVEUSER { get; set; }
        public Nullable<int> REMOVDATE { get; set; }
        public Nullable<int> REMOVTIME { get; set; }
    }
}
