using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using BenQGuru.eMES.Web.Model;

namespace BenQuru.eMES.Web.Controllers
{
    public abstract class WebApiBaseController : ApiController
    {
        private readonly LongCheerEntities db = new LongCheerEntities();
        

        protected LongCheerEntities DbContext
        {
            get { return db; }
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (db != null)
                {
                    DbContext.Dispose();
                }
            }
            base.Dispose(disposing);
        }
    }
}
