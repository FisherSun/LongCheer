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
    
    public partial class ORA_ASPNET_APPLICATIONS
    {
        public ORA_ASPNET_APPLICATIONS()
        {
            this.ORA_ASPNET_USERS = new HashSet<ORA_ASPNET_USERS>();
        }
    
        public string APPLICATIONNAME { get; set; }
        public string LOWEREDAPPLICATIONNAME { get; set; }
        public System.Guid APPLICATIONID { get; set; }
        public string DESCRIPTION { get; set; }
    
        public virtual ICollection<ORA_ASPNET_USERS> ORA_ASPNET_USERS { get; set; }
    }
}
