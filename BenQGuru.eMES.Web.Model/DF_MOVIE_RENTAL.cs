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
    
    public partial class DF_MOVIE_RENTAL
    {
        public int TAPEID { get; set; }
        public int CUSTID { get; set; }
        public System.DateTime RENTDATE { get; set; }
        public Nullable<System.DateTime> RETURNDATE { get; set; }
    
        public virtual DF_MOVIE_CUSTOMER DF_MOVIE_CUSTOMER { get; set; }
        public virtual DF_MOVIE_TAPE DF_MOVIE_TAPE { get; set; }
    }
}
