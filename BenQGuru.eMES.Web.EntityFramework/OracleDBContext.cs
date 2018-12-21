using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data.Entity;

using Oracle.ManagedDataAccess.EntityFramework;
using Oracle.ManagedDataAccess;
using Oracle.ManagedDataAccess.Client;

using BenQGuru.eMES.Web.Model;

namespace BenQGuru.eMES.Web.EntityFramework
{
    public class OracleDBContext:DbContext
    {
        public OracleDBContext()
            :base("name=LongCheerEntities")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }

        public virtual DbSet<TBLUSER> User { get; set; }
    }
}
