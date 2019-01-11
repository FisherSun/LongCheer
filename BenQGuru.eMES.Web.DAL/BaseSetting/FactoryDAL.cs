using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

using BenQGuru.eMES.Web.Common;
using BenQGuru.eMES.Web.Model;
using Oracle.ManagedDataAccess.Client;
using Dapper;

namespace BenQGuru.eMES.Web.DAL.BaseSetting
{
    public class FactoryDAL
    {
        private string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;

        /// <summary>
        /// 分页查询
        /// </summary>
        /// <param name="search">查询条件</param>
        /// <returns></returns>
        public PagedResult<Factory> GetListByPage(Factory search)
        {

            string where = " WHERE 1=1";

            if (!string.IsNullOrWhiteSpace(search.FACCODE))
            {
                where += " AND FACCODE=:FACCODE";
            }
            //if (!string.IsNullOrWhiteSpace(search.Language))
            //{
            //    where += " AND (LanguageA=:Language or LanguageB=:Language or LanguageC=:Language or LanguageD=:Language)";
            //}
            var sql = @"BEGIN OPEN :rslt1 FOR SELECT COUNT(1) FROM tblfactory" + where + ";" +
                        "OPEN :rslt2 FOR SELECT * FROM tblfactory" + where + ";" +
                      " END;";
            OracleDynamicParameters dynParams = new OracleDynamicParameters();
            dynParams.Add(":rslt1", OracleDbType.RefCursor, ParameterDirection.Output);
            dynParams.Add(":rslt2", OracleDbType.RefCursor, ParameterDirection.Output);
            if (!string.IsNullOrWhiteSpace(search.FACCODE))
            {
                dynParams.Add(":FACCODE", OracleDbType.Varchar2, ParameterDirection.Input, search.FACCODE);
            }
            //if (!string.IsNullOrWhiteSpace(search.Language))
            //{
            //    dynParams.Add(":Language", OracleDbType.Varchar2, ParameterDirection.Input, search.Language);
            //}
            using (IDbConnection dbConn = new OracleConnection(connectionString))
            {
                var queryResult = dbConn.QueryMultiple(sql, param: dynParams);
                return new PagedResult<Factory>
                {
                    Total = queryResult.Read<int>().Single(),
                    Rows = queryResult.Read<Factory>().Skip<Factory>(search.Skip).Take<Factory>(search.Count).ToList()
                };
            }
        }
    }
}
