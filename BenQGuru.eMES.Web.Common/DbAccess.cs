using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Reflection;
using System.Threading;

using System.Data.OracleClient;

namespace BenQGuru.eMES.Web.Common
{
    public class DbAccess : IDisposable
    {
        #region 属性
        static CommandType _DefaultCommandType = CommandType.StoredProcedure;
        public static CommandType DefaultCommandType
        {
            get { return _DefaultCommandType; }
            set { _DefaultCommandType = value; }
        }
        private const int _MaxRetryCount = 2;
        private const int _IncreasingDelayRetry = 500;		// Increases 500 milliseconds delay time for every retry.
        //private SqlConnection _Connection;
        private OracleConnection _Connection;

        public static string ConnectionString
        {
            get
            {
                //return ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;
                return ConfigurationManager.AppSettings["ConnectionString"].ToString();
            }
        }

        public OracleConnection Connection
        {
            get
            {
                if (_Connection == null)
                    throw new ObjectDisposedException("DbAccess");

                return _Connection;
            }
        }

        #endregion

        #region 构造函数

        public DbAccess()
        {
            _Connection = new OracleConnection(ConnectionString);
            _Connection.Open();
        }

        public DbAccess(string connectionString)
        {
            _Connection = new OracleConnection(connectionString);
            _Connection.Open();
        }


        #endregion

        #region method private
        private OracleCommand CreateCommand(string commandText, int commandTimeout, CommandType commandType, Action<OracleParameterCollection> parametersBuilder)
        {
            if (_Connection == null)
                throw new ObjectDisposedException("DbAccess");

            OracleCommand dbCommand = _Connection.CreateCommand();
            dbCommand.CommandType = commandType;
            dbCommand.CommandText = commandText;

            if (commandTimeout > 0)
                dbCommand.CommandTimeout = commandTimeout;

            if (parametersBuilder != null)
                parametersBuilder(dbCommand.Parameters);

            return dbCommand;
        }
        private bool OnConnectionLost(Exception dbException)
        {
            bool canRetry = false;

            SqlException e = dbException as SqlException;

            if (e == null)
                canRetry = false;
            else
                switch (e.Number)
                {
                    case 233:
                    case -2: canRetry = true; break;
                    // To add other cases
                    default: canRetry = false; break;
                }
            return canRetry;
        }
        private void ReConnect(int retrying)
        {
            if (_Connection != null)
                if (_Connection.State != ConnectionState.Closed)
                {
                    _Connection.Close();

                    if (retrying > 0)
                        Thread.Sleep(retrying * _IncreasingDelayRetry);	// retrying starts at 0, increases delay time for every retry.

                    _Connection.Open();
                }
        }
        private OracleDataReader CreateReader(string commandText, int commandTimeout, CommandType commandType, Action<OracleParameterCollection> parametersBuilder, int resultSetCnt = 1)
        {
            for (int retry = 0; ; retry++)
            {
                try
                {
                    OracleCommand dbCmd = CreateCommand(commandText, commandTimeout, commandType, parametersBuilder);
                    return dbCmd.ExecuteReader();
                }
                catch (Exception e)
                {
                    if (retry < _MaxRetryCount && OnConnectionLost(e))
                        ReConnect(retry);
                    else
                        throw;
                }
            }
        }
        #endregion

        #region public

        public void ExecuteReader(string commandText, Action<OracleDataReader> dataReader, Action<OracleParameterCollection> parametersBuilder = null, CommandType commandType = CommandType.StoredProcedure, int commandTimeout = 0)
        {
            using (OracleDataReader reader = CreateReader(commandText, commandTimeout, commandType, parametersBuilder))
            {
                if (dataReader != null)
                    while (reader.Read())
                        dataReader(reader);
            }
        }
        public void ExecuteReader(string commandText, Action<OracleDataReader, int> dataReaders, Action<OracleParameterCollection> parametersBuilder = null, CommandType commandType = CommandType.StoredProcedure, int commandTimeout = 0)
        {
            using (OracleDataReader reader = CreateReader(commandText, commandTimeout, commandType, parametersBuilder))
            {
                if (dataReaders != null)
                {
                    int resultSet = 0;
                    do
                    {
                        while (reader.Read())
                            dataReaders(reader, resultSet);
                        resultSet++;
                    } while (reader.NextResult());
                }
            }
        }

        public void ExecuteReader<T>(string commandText, Action<OracleParameterCollection> parametersBuilder, Action<DbFieldMap<T>> resultMap, Action<T> readEntity,
            CommandType commandType = CommandType.StoredProcedure, int commandTimeout = 0) where T : class, new()
        {
            using (DbDataReader reader = CreateReader(commandText, commandTimeout, commandType, parametersBuilder))
            {
                if (readEntity != null)
                {
                    DbFieldMap<T> map = new DbFieldMap<T>();

                    map.PrepareResultMap(resultMap);

                    while (reader.Read())
                        readEntity(map.ReadNew(reader));
                }
            }
        }
        public IEnumerable<T> ExecuteReader<T>(string commandText, Action<OracleParameterCollection> parametersBuilder, Action<DbFieldMap<T>> resultMap = null,
            CommandType commandType = CommandType.StoredProcedure, int commandTimeout = 0) where T : class, new()
        {
            using (DbDataReader reader = CreateReader(commandText, commandTimeout, commandType, parametersBuilder))
            {
                DbFieldMap<T> map = new DbFieldMap<T>();

                map.PrepareResultMap(resultMap);

                while (reader.Read())
                    yield return map.ReadNew(reader);
            }
        }

        public object ExecuteScalar(string commandText, Action<OracleParameterCollection> parametersBuilder,
           CommandType commandType = CommandType.StoredProcedure, int commandTimeout = 0)
        {
            object rtv = 0;

            for (int retry = 0; ; retry++)
            {
                try
                {
                    rtv = CreateCommand(commandText, commandTimeout, commandType, parametersBuilder).ExecuteScalar();
                    break;
                }
                catch (Exception e)
                {
                    if (retry < _MaxRetryCount && OnConnectionLost(e))
                        ReConnect(retry);
                    else
                        throw;
                }
            }

            return rtv;
        }


        public void ExecuteMultiReader(string commandText, Action<OracleParameterCollection> parametersBuilder, Action<DbMultiResultSet> multiResultSetMap,
            CommandType commandType = CommandType.StoredProcedure, int commandTimeout = 0)
        {
            DbMultiResultSet multiResultSet = new DbMultiResultSet();

            if (multiResultSetMap != null)
                multiResultSetMap(multiResultSet);

            using (DbDataReader reader = CreateReader(commandText, commandTimeout, commandType, parametersBuilder, multiResultSet.Count))
            {
                multiResultSet.ReadAll(reader);
            }
        }
        public int ExecuteNonQuery(string commandText, Action<OracleParameterCollection> parametersBuilder,
            CommandType commandType = CommandType.StoredProcedure, int commandTimeout = 0)
        {
            int nAffectedRows = 0;

            for (int retry = 0; ; retry++)
            {
                try
                {
                    nAffectedRows = CreateCommand(commandText, commandTimeout, commandType, parametersBuilder).ExecuteNonQuery();
                    break;
                }
                catch (Exception e)
                {
                    if (retry < _MaxRetryCount && OnConnectionLost(e))
                        ReConnect(retry);
                    else
                        throw;
                }
            }

            return nAffectedRows;
        }

        #endregion

        #region IDisposable Members
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing && _Connection != null)
            {
                if (_Connection.State != ConnectionState.Closed)
                {
                    _Connection.Dispose();			// Close()
                }

                _Connection = null;
            }
        }
        #endregion
    }
    public class DbFieldMap<T> where T : class, new()
    {
        private List<ColumnMemberInfo> _FieldList;
        private ulong _RowCount;

        private Action<T> _CustomInitAction = null;
        private Action<T, DbDataReader> _CustomReaderAction = null;
        private bool _AllowAutoMatch = true;

        public DbFieldMap()
        {
            _FieldList = new List<ColumnMemberInfo>();
            _RowCount = 0;
        }

        private void MapColumns(DbDataReader dataReader)
        {
            ColumnMemberInfo field;

            for (int i = _FieldList.Count - 1; i >= 0; i--)
            {
                field = _FieldList[i];

                try
                {
                    field.ColumnOrdinal = dataReader.GetOrdinal(field.ColumnName);
                }
                catch (IndexOutOfRangeException)
                {
                    _FieldList.RemoveAt(i);
                }
            }
        }

        public DbFieldMap<T> Add(string columnName, Expression<Func<T, object>> fieldExpr)
        {
            _FieldList.Add(new ColumnMemberInfo(columnName, fieldExpr));
            return this;
        }

        public void CustomizeInitAction(Action<T> entityInitAction)
        {
            _CustomInitAction = entityInitAction;
        }

        public void CustomizeReaderAction(Action<T, DbDataReader> customReaderAction, bool allowAutoMatch /*allowAutoMapAllPropertiesOrFields*/ = false)
        {
            _CustomReaderAction = customReaderAction;
            _AllowAutoMatch = allowAutoMatch;
        }

        internal void AddAllPropertiesOrFields()
        {
            Type type = typeof(T);

            foreach (PropertyInfo p in type.GetProperties())
                //if (p.CanWrite && p.CanRead && p.PropertyType.TryUnderlyingType().CanMapToDbType())
                //    _FieldList.Add(new ColumnMemberInfo(p.Name, p));
                if (p.CanWrite && p.CanRead)
                    _FieldList.Add(new ColumnMemberInfo(p.Name, p));

            foreach (FieldInfo f in type.GetFields())
                //if (f.IsInitOnly == false && f.FieldType.TryUnderlyingType().CanMapToDbType())
                //    _FieldList.Add(new ColumnMemberInfo(f.Name, f));
                if (f.IsInitOnly == false)
                    _FieldList.Add(new ColumnMemberInfo(f.Name, f));
        }

        internal void PrepareResultMap(Action<DbFieldMap<T>> resultMap = null)
        {
            if (resultMap != null)
                resultMap(this);
            else
                if (_AllowAutoMatch)
                AddAllPropertiesOrFields();
        }

        internal T ReadNew(DbDataReader dataReader)
        {
            T entity = new T();

            if (_CustomInitAction != null)
                _CustomInitAction(entity);

            if (_RowCount == 0L)
                MapColumns(dataReader);

            foreach (ColumnMemberInfo field in _FieldList)
                field.SetValue(entity, dataReader[field.ColumnOrdinal]);

            if (_CustomReaderAction != null)
                _CustomReaderAction(entity, dataReader);

            _RowCount++;
            return entity;
        }
    }
    public class ColumnMemberInfo
    {
        private string _ColumnName;
        public string ColumnName { get { return _ColumnName; } }

        public int ColumnOrdinal { get; set; }

        private PropertyOrField[] _DeepMemberRoute;
        public PropertyOrField[] DeepMemberRoute { get { return _DeepMemberRoute; } }

        public ColumnMemberInfo(string columnName, LambdaExpression fieldExpr)
        {
            //_ColumnName = columnName;
            //_DeepMemberRoute = fieldExpr.GetDeepMemberRoute();

            //int depth = _DeepMemberRoute.Length;

            //if (depth == 0 || _DeepMemberRoute[depth - 1].DataType.CanMapToDbType() == false)
            //    throw new ApplicationException("The (Underlying)Type of end Property Or Field must be a Value Type.");
        }

        public ColumnMemberInfo(string columnName, PropertyInfo propertyInfo)
        {
            _ColumnName = columnName;
            _DeepMemberRoute = new PropertyOrField[] { new PropertyOrField(propertyInfo) };
        }

        public ColumnMemberInfo(string columnName, FieldInfo fieldInfo)
        {
            _ColumnName = columnName;
            _DeepMemberRoute = new PropertyOrField[] { new PropertyOrField(fieldInfo) };
        }

        public bool SetValue(object rootObject, object dbValue)
        {
            return true;
            //return _DeepMemberRoute.SetDeepMemberValue(rootObject, dbValue);
        }
    }

    public class PropertyOrField
    {
        private PropertyInfo _PropertyInfo;
        private FieldInfo _FieldInfo;

        private Type _DataType;
        public Type DataType { get { return _DataType; } }

        public PropertyOrField(PropertyInfo propertyInfo)
        {
            if (propertyInfo == null)
                throw new ArgumentNullException("propertyInfo");

            _PropertyInfo = propertyInfo;
            //_DataType = _PropertyInfo.PropertyType.TryUnderlyingType();
        }

        public PropertyOrField(FieldInfo fieldInfo)
        {
            if (fieldInfo == null)
                throw new ArgumentNullException("fieldInfo");

            _FieldInfo = fieldInfo;
           //_DataType = _FieldInfo.FieldType.TryUnderlyingType();
        }

        public static PropertyOrField CreateFromMember(MemberInfo memberInfo)
        {
            PropertyInfo propertyInfo = memberInfo as PropertyInfo;

            if (propertyInfo != null)
                return new PropertyOrField(propertyInfo);

            FieldInfo fieldInfo = memberInfo as FieldInfo;

            if (fieldInfo != null)
                return new PropertyOrField(fieldInfo);

            throw new ArgumentOutOfRangeException("memberInfo", "Expression must be a Property or a Field.");
        }

        public void SetValue(object objEntity, object dbValue)
        {
            if (Convert.IsDBNull(dbValue))
                return;

            if (_PropertyInfo != null)
                _PropertyInfo.SetValue(objEntity, Convert.ChangeType(dbValue, _DataType), null);
            else if (_FieldInfo != null)
                _FieldInfo.SetValue(objEntity, Convert.ChangeType(dbValue, _DataType));
        }

        public object GetValue(object objEntity)
        {
            if (_PropertyInfo != null)
                return _PropertyInfo.GetValue(objEntity, null);
            else if (_FieldInfo != null)
                return _FieldInfo.GetValue(objEntity);
            else
                return null;
        }

        public object ConstructNestedMember(object containerObject)
        {
            if (_DataType != null && containerObject != null)
            {
                object memberObject = GetValue(containerObject);

                if (_DataType.IsClass && memberObject == null)
                {
                    ConstructorInfo memberConstructor = _DataType.GetConstructor(Type.EmptyTypes);

                    if (memberConstructor != null && memberConstructor.IsPublic)
                    {
                        try
                        {
                            memberObject = memberConstructor.Invoke(null);

                            if (_PropertyInfo != null)
                                _PropertyInfo.SetValue(containerObject, memberObject, null);
                            else if (_FieldInfo != null)
                                _FieldInfo.SetValue(containerObject, memberObject);
                        }
                        catch
                        {
                            memberObject = null;
                        }
                    }
                }

                return memberObject;
            }

            return null;
        }
    }

    public class DbMultiResultSet
    {
        internal class DbResultAdapter<T> where T : class, new()
        {
            private readonly ICollection<T> _ResultSet;
            public ICollection<T> ResultSet
            {
                get { return _ResultSet; }
            }

            private readonly DbFieldMap<T> _FieldMap;
            public DbFieldMap<T> FieldMap
            {
                get { return _FieldMap; }
            }

            public DbResultAdapter(ICollection<T> resultSet, Action<DbFieldMap<T>> resultMap)
            {
                _ResultSet = resultSet;
                _FieldMap = new DbFieldMap<T>();
                _FieldMap.PrepareResultMap(resultMap);
            }
        }

        private readonly ArrayList _MultiResultSet;
        public int Count { get { return _MultiResultSet.Count; } }

        public DbMultiResultSet()
        {
            _MultiResultSet = new ArrayList();
        }

        public void Add<T>(ICollection<T> resultSet, Action<DbFieldMap<T>> resultMap = null) where T : class, new()
        {
            _MultiResultSet.Add(new DbResultAdapter<T>(resultSet, resultMap));
        }

        public void Add<T>(ref ICollection<T> resultSet, Action<DbFieldMap<T>> resultMap = null) where T : class, new()
        {
            _MultiResultSet.Add(new DbResultAdapter<T>(resultSet, resultMap));
        }

        internal void ReadAll(DbDataReader reader)
        {
            for (int rs = 0; rs < _MultiResultSet.Count; rs++)
            {
                dynamic resultAdapter = _MultiResultSet[rs];

                if (resultAdapter.ResultSet == null)
                    continue;

                while (reader.Read())
                    resultAdapter.ResultSet.Add(resultAdapter.FieldMap.ReadNew(reader));

                if (reader.NextResult() == false)
                    break;
            }
        }
    }
}
