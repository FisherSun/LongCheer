﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Configuration;
using System.Data.OracleClient;

namespace BenQGuru.eMES.Web.CommonFactory
{
    public class DapperFactory
    {
        private readonly string connectionString = System.Configuration.ConfigurationManager.AppSettings["ConnectionString"].ToString();
        private OracleConnection connection = null;
        public DapperFactory() {
            this.connection = new OracleConnection(connectionString);
        }


        public OracleConnection CreateOracleConnection()
        {
            //var connection = new OracleConnection(connectionString);
            connection.Open();
            return connection;
        }

        public void CloseOracleConnection()
        {
            if (connection.State == System.Data.ConnectionState.Open)
            {
                connection.Close();
            }
        }
        public int CheckLogin(string usercode)
        {
            using (var conn = CreateOracleConnection())
            {
                OracleCommand command = conn.CreateCommand();
                string sql = string.Format("select count(1) from tblUser where usercode='{0}'", usercode);
                command.CommandText = sql;
                return int.Parse(command.ExecuteScalar().ToString());
            }
        }  
    }
}