using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

//using System.Data.OracleClient;
using BenQGuru.eMES.Web.Common;
using BenQGuru.eMES.Web.Model;
using BenQGuru.eMES.Web.Libs.Search;
using Dapper;
using Oracle.ManagedDataAccess.Client;

//using BenQGuru.eMES.Web.CommonFactory;

namespace BenQGuru.eMES.Web.DAL
{
    public class TestDAL
    {
        //DapperFactory factory = new DapperFactory();

        public PagedResult<TBLTEST> GetListByPage(TestSearch search)
        {
            string where = " WHERE 1=1";

            if (!string.IsNullOrWhiteSpace(search.UserCode))
            {
                where += " AND UserCode=:UserCode";
            }
            if (!string.IsNullOrWhiteSpace(search.LanguageA))
            {
                where += " AND (LanguageA=:Language or LanguageB=:Language or LanguageC=:Language or LanguageD=:Language)";
            }
            //if (!string.IsNullOrWhiteSpace(search.UserCode))
            //{
            //    where += " AND UserCode=@UserCode";
            //}
            //if (!string.IsNullOrWhiteSpace(search.LanguageA))
            //{
            //    where += " AND (LanguageA=@Language or LanguageB=@Language or LanguageC=@Language or LanguageD=@Language)";
            //}
            //string sqlCount = @"SELECT COUNT(1) FROM tblTest" + where;
            //string sqlData = @"SELECT * FROM tblTest" + where;
            var sql = @"BEGIN OPEN :rslt1 FOR SELECT COUNT(1) FROM tblTest;" +
                        "OPEN :rslt2 FOR SELECT * FROM tblTest;"+
                      " END;";
            OracleDynamicParameters dynParams = new OracleDynamicParameters();
            dynParams.Add(":rslt1", OracleDbType.RefCursor, ParameterDirection.Output);
            dynParams.Add(":rslt2", OracleDbType.RefCursor, ParameterDirection.Output);
            //if (search.Count > 0)
            //{
            //    sqlData += " OFFSET @Skip ROWS FETCH NEXT @Count ROWS ONLY";
            //}
            //string sql = sqlCount + ";" + sqlData;
            //using (DbAccess db = new DbAccess())
            using (IDbConnection dbConn = new OracleConnection(System.Configuration.ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString))
            {
                var queryResult = dbConn.QueryMultiple(sql, param: dynParams);
                //var queryResult = db.Connection.QueryMultiple(sql, param: dynParams);
                // var queryResult = db.Connection.QueryMultiple(sql, search);
                return new PagedResult<TBLTEST>
                {
                    Total = queryResult.Read<int>().Single(),
                    Rows = queryResult.Read<TBLTEST>().Skip<TBLTEST>(search.Skip).Take<TBLTEST>(search.Count).ToList()
                };
            }
        }
    }
}
