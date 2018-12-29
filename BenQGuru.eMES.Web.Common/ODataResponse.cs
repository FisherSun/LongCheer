using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BenQGuru.eMES.Web.Common
{
    public class ODataResponseList<T>
    {
        public List<T> Value { get; set; }
    }

    public class ODataResponse<T>
    {
        public T Value { get; set; }
    }
}
