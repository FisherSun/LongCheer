using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

using BenQGuru.eMES.Web.Common;
using BenQGuru.eMES.Web.Model.BaseSetting;
using Oracle.ManagedDataAccess.Client;
using Dapper;

namespace BenQGuru.eMES.Web.DAL.BaseSetting
{
    public class SEGDAL
    {
        private string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;

        /// <summary>
        /// 分页查询
        /// </summary>
        /// <param name="search">查询条件</param>
        /// <returns></returns>
        public PagedResult<SEG> GetListByPage(SEG search)
        {

            string where = " WHERE 1=1";

            if (!string.IsNullOrWhiteSpace(search.SEGCODE))
            {
                where += " AND SEGCODE=:SEGCODE";
            }
            if (!string.IsNullOrWhiteSpace(search.SEGDESC))
            {
                where += " AND SEGDESC=:SEGDESC";
            }
            //if (!string.IsNullOrWhiteSpace(search.Language))
            //{
            //    where += " AND (LanguageA=:Language or LanguageB=:Language or LanguageC=:Language or LanguageD=:Language)";
            //}
            var sql = @"BEGIN OPEN :rslt1 FOR SELECT COUNT(1) FROM tblseg" + where + ";" +
                        "OPEN :rslt2 FOR SELECT * FROM tblseg" + where + ";" +
                      " END;";
            OracleDynamicParameters dynParams = new OracleDynamicParameters();
            dynParams.Add(":rslt1", OracleDbType.RefCursor, ParameterDirection.Output);
            dynParams.Add(":rslt2", OracleDbType.RefCursor, ParameterDirection.Output);
            if (!string.IsNullOrWhiteSpace(search.SEGCODE))
            {
                dynParams.Add(":SEGCODE", OracleDbType.Varchar2, ParameterDirection.Input, search.SEGCODE);
            }
            if (!string.IsNullOrWhiteSpace(search.SEGDESC))
            {
                dynParams.Add(":SEGDESC", OracleDbType.Varchar2, ParameterDirection.Input, search.SEGDESC);
            }
            //if (!string.IsNullOrWhiteSpace(search.Language))
            //{
            //    dynParams.Add(":Language", OracleDbType.Varchar2, ParameterDirection.Input, search.Language);
            //}
            using (IDbConnection dbConn = new OracleConnection(connectionString))
            {
                var queryResult = dbConn.QueryMultiple(sql, param: dynParams);
                return new PagedResult<SEG>
                {
                    Total = queryResult.Read<int>().Single(),
                    Rows = queryResult.Read<SEG>().Skip<SEG>(search.Skip).Take<SEG>(search.Count).ToList()
                };
            }
        }
    }
}
