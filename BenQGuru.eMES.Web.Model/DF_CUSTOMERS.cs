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
    
    public partial class DF_CUSTOMERS
    {
        public DF_CUSTOMERS()
        {
            this.DF_ORDERS = new HashSet<DF_ORDERS>();
        }
    
        public int CUSTID { get; set; }
        public string FIRSTNAME { get; set; }
        public string LASTNAME { get; set; }
        public string SSN { get; set; }
        public string AREACODE { get; set; }
        public string PHONENO { get; set; }
        public string ADDRESS { get; set; }
        public string CITY { get; set; }
        public string STATE { get; set; }
        public string ZIPCODE { get; set; }
        public string FIPSCODE { get; set; }
    
        public virtual ICollection<DF_ORDERS> DF_ORDERS { get; set; }
    }
}
