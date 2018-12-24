using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BenQGuru.eMES.Web.Model
{
    public class User
    {
        public string USERCODE { get; set; }
        public string USERPWD { get; set; }
        public string USERNAME { get; set; }
        public string USERTEL { get; set; }
        public string USEREMAIL { get; set; }
        public string USERDEPART { get; set; }
        public string MUSER { get; set; }
        public int MDATE { get; set; }
        public int MTIME { get; set; }
        public string EATTRIBUTE1 { get; set; }
        public string USERSTAT { get; set; }
    }
}
