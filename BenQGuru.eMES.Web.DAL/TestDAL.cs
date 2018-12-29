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
        private string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;

        /// <summary>
        /// 分页查询
        /// </summary>
        /// <param name="search">查询条件</param>
        /// <returns></returns>
        public PagedResult<TBLTEST> GetListByPage(TestSearch search)
        {
            
            string where = " WHERE 1=1";

            if (!string.IsNullOrWhiteSpace(search.UserCode))
            {
                where += " AND UserCode=:UserCode";
            }
            //if (!string.IsNullOrWhiteSpace(search.Language))
            //{
            //    where += " AND (LanguageA=:Language or LanguageB=:Language or LanguageC=:Language or LanguageD=:Language)";
            //}
            var sql = @"BEGIN OPEN :rslt1 FOR SELECT COUNT(1) FROM tblTest" + where + ";" +
                        "OPEN :rslt2 FOR SELECT * FROM tblTest" + where + ";" +
                      " END;";
            OracleDynamicParameters dynParams = new OracleDynamicParameters();
            dynParams.Add(":rslt1", OracleDbType.RefCursor, ParameterDirection.Output);
            dynParams.Add(":rslt2", OracleDbType.RefCursor, ParameterDirection.Output);
            if (!string.IsNullOrWhiteSpace(search.UserCode))
            {
                dynParams.Add(":UserCode", OracleDbType.Varchar2, ParameterDirection.Input, search.UserCode);
            }
            //if (!string.IsNullOrWhiteSpace(search.Language))
            //{
            //    dynParams.Add(":Language", OracleDbType.Varchar2, ParameterDirection.Input, search.Language);
            //}
            using (IDbConnection dbConn = new OracleConnection(connectionString))
            {
                var queryResult = dbConn.QueryMultiple(sql, param: dynParams);
                return new PagedResult<TBLTEST>
                {
                    Total = queryResult.Read<int>().Single(),
                    Rows = queryResult.Read<TBLTEST>().Skip<TBLTEST>(search.Skip).Take<TBLTEST>(search.Count).ToList()
                };
            }
        }

        /// <summary>
        /// 导出
        /// </summary>
        /// <param name="search"></param>
        /// <returns></returns>
        public List<TBLTEST> GetListByCondition(TestSearch search)
        {
            string where = " WHERE 1=1";

            if (!string.IsNullOrWhiteSpace(search.UserCode))
            {
                where += " AND UserCode=:UserCode";
            }
            if (!string.IsNullOrWhiteSpace(search.Language))
            {
                where += " AND (LanguageA=:Language or LanguageB=:Language or LanguageC=:Language or LanguageD=:Language)";
            }
            var sql = @"BEGIN OPEN :rslt1 FOR SELECT * FROM tblTest" + where + ";" +
                      " END;";
            OracleDynamicParameters dynParams = new OracleDynamicParameters();
            dynParams.Add(":rslt1", OracleDbType.RefCursor, ParameterDirection.Output);
            dynParams.Add(":UserCode", OracleDbType.Varchar2, ParameterDirection.Input, search.UserCode);
            dynParams.Add(":Language", OracleDbType.Varchar2, ParameterDirection.Input, search.Language);
            using (IDbConnection dbConn = new OracleConnection(connectionString))
            {
                return dbConn.Query<TBLTEST>(sql, param: dynParams).AsList();
            }
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool AddLanguage(TBLTEST entity)
        {
            string sql = "INSERT INTO tblTest(UserCode,LanguageA,LanguageB,LanguageC,LanguageD) VALUES(:UserCode,:LanguageA,:LanguageB,:LanguageC,:LanguageD)";
            OracleDynamicParameters dynParams = new OracleDynamicParameters();
            dynParams.Add(":UserCode", OracleDbType.Varchar2,ParameterDirection.Input,entity.USERCODE);
            dynParams.Add(":LanguageA", OracleDbType.Varchar2, ParameterDirection.Input,entity.LANGUAGEA);
            dynParams.Add(":LanguageB", OracleDbType.Varchar2, ParameterDirection.Input, entity.LANGUAGEB);
            dynParams.Add(":LanguageC", OracleDbType.Varchar2, ParameterDirection.Input, entity.LANGUAGEC);
            dynParams.Add(":LanguageD", OracleDbType.Varchar2, ParameterDirection.Input, entity.LANGUAGED);
            using (IDbConnection dbConn = new OracleConnection(connectionString))
            {
                try
                {
                    dbConn.Execute(sql, param: dynParams);
                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                }
            }
        }

        /// <summary>
        /// 修改
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool EditLanguage(TBLTEST entity)
        {
            string sql = "UPDATE tblTest SET LanguageA=:LanguageA,LanguageB=:LanguageB,LanguageC=:LanguageC,LanguageD=:LanguageD WHERE UserCode=:UserCode";
            OracleDynamicParameters dynParams = new OracleDynamicParameters();
            dynParams.Add(":UserCode", OracleDbType.Varchar2, ParameterDirection.Input, entity.USERCODE);
            dynParams.Add(":LanguageA", OracleDbType.Varchar2, ParameterDirection.Input, entity.LANGUAGEA);
            dynParams.Add(":LanguageB", OracleDbType.Varchar2, ParameterDirection.Input, entity.LANGUAGEB);
            dynParams.Add(":LanguageC", OracleDbType.Varchar2, ParameterDirection.Input, entity.LANGUAGEC);
            dynParams.Add(":LanguageD", OracleDbType.Varchar2, ParameterDirection.Input, entity.LANGUAGED);
            using (IDbConnection dbConn = new OracleConnection(connectionString))
            {
                try
                {
                    dbConn.Execute(sql, param: dynParams);
                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                }
            }
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool DeleteLanguage(string UserCode)
        {
            string sql = "DELETE tblTest WHERE UserCode=:UserCode";
            OracleDynamicParameters dynParams = new OracleDynamicParameters();
            dynParams.Add(":UserCode", OracleDbType.Varchar2, ParameterDirection.Input, UserCode);
            using (IDbConnection dbConn = new OracleConnection(connectionString))
            {
                try
                {
                    dbConn.Execute(sql, param: dynParams);
                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                }
            }
        }
    }
}
