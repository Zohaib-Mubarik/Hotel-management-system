using Dapper;
using Npgsql;
using SProject_Connection.Models;
using System.Data;

namespace SProject_Connection.Db
{
    public class UserRepository
    {
        private readonly string _connectionString;
        public UserRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        private IDbConnection CreateConnection()
        {
            return new NpgsqlConnection(_connectionString);
        }
        public User GetByUsernamePass(string username, string password)
        {
            using (var connection = CreateConnection())
            {
                return connection.QueryFirstOrDefault<User>("select * from public.user where " +
                    "username = @username AND password = @password", new { username = username, password = password });
            }
        }
    }
}