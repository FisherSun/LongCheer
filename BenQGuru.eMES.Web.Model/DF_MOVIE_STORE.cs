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
    
    public partial class DF_MOVIE_STORE
    {
        public DF_MOVIE_STORE()
        {
            this.DF_MOVIE_CUSTOMER = new HashSet<DF_MOVIE_CUSTOMER>();
            this.DF_MOVIE_EMPLOYEE = new HashSet<DF_MOVIE_EMPLOYEE>();
        }
    
        public int STOREID { get; set; }
        public int MANAGERID { get; set; }
        public string NAME { get; set; }
        public string PHONE { get; set; }
        public string ADDRESS { get; set; }
        public string CITY { get; set; }
        public string STATE { get; set; }
        public string ZIP { get; set; }
        public int DISTRICTID { get; set; }
    
        public virtual ICollection<DF_MOVIE_CUSTOMER> DF_MOVIE_CUSTOMER { get; set; }
        public virtual DF_MOVIE_DISTRICT DF_MOVIE_DISTRICT { get; set; }
        public virtual ICollection<DF_MOVIE_EMPLOYEE> DF_MOVIE_EMPLOYEE { get; set; }
        public virtual DF_MOVIE_EMPLOYEE DF_MOVIE_EMPLOYEE1 { get; set; }
    }
}
