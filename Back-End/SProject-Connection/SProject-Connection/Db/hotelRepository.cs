using Dapper;
using Npgsql;
using SProject_Connection.Models;
using System.Data;

namespace SProject_Connection.Db
{
    public class hotelRepository
    {
        private readonly string _connectionString;
        public hotelRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        private IDbConnection CreateConnection()
        {
            return new NpgsqlConnection(_connectionString);
        }
        public IEnumerable<hotel> GetAll()
        {
            using (var connection = CreateConnection())
            {
                return connection.Query<hotel>("SELECT * FROM hotel");
            }
        }
        public hotel GetById(long id)
        {
            using (var connection = CreateConnection())
            {
                return connection.QueryFirstOrDefault<hotel>("SELECT * FROM public.hotel WHERE id=@Id ", new { Id = id});
            }
        }
        public int create(hotel Hotel)
        {
            var sql = "INSERT INTO public.hotel (location , name) VALUES ( @Location, @Name)";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, Hotel);
            }
        }
        public int update(hotel Hotel)
        {
            var sql = "UPDATE public.hotel SET Id = @id , Location = @location , Name = @name  WHERE id = @Id";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, Hotel);
            }
        }
        public int delete(long id)
        {
            var sql = "DELETE FROM public.hotel WHERE id = @Id";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, new { Id = id });
            }
        }

    }
}
