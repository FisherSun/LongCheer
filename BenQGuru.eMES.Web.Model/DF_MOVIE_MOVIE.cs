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
    
    public partial class DF_MOVIE_MOVIE
    {
        public DF_MOVIE_MOVIE()
        {
            this.DF_MOVIE_TAPE = new HashSet<DF_MOVIE_TAPE>();
        }
    
        public int MOVIEID { get; set; }
        public string TITLE { get; set; }
        public string DIRECTOR { get; set; }
        public string CAST { get; set; }
        public string TYPE { get; set; }
        public string RATING { get; set; }
        public decimal DAILYRATE { get; set; }
    
        public virtual ICollection<DF_MOVIE_TAPE> DF_MOVIE_TAPE { get; set; }
    }
}
