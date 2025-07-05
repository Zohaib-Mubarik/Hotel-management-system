using Dapper;
using Npgsql;
using SProject_Connection.Models;
using System.Data;

namespace SProject_Connection.Db
{
    public class roomcategoryRepository
    {
        private readonly string _connectionString;
        public roomcategoryRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        private IDbConnection CreateConnection()
        {
            return new NpgsqlConnection(_connectionString);
        }
        public IEnumerable<roomcategory> GetAll()
        {
            using (var connection = CreateConnection())
            {
                return connection.Query<roomcategory>("select * from public.roomcategory");
            }
        }
        public roomcategory GetById(long id)
        {
            using (var connection = CreateConnection())
            {
                return connection.QueryFirstOrDefault<roomcategory>("SELECT * FROM public.roomcategory WHERE id=@idvalue ", new { idvalue = id });
            }
        }

    }

}