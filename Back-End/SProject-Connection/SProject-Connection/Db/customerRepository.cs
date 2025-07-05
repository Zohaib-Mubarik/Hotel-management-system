using Dapper;
using Npgsql;
using SProject_Connection.Models;
using System.Data;

namespace SProject_Connection.Db
{
    public class customerRepository
    {
        private readonly string _connectionString;
        public customerRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        private IDbConnection CreateConnection()
        {
            return new NpgsqlConnection(_connectionString);
        }
        public IEnumerable<customer> GetAll()
        {
            using (var connection = CreateConnection())
            {
                return connection.Query<customer>("SELECT * FROM customer");
            }
        }
        public customer GetById(long id)
        {
            using (var connection = CreateConnection())
            {
                return connection.QueryFirstOrDefault<customer>("SELECT * FROM public.customer WHERE id=@Id ", new { Id = id });
            }
        }
        public int create(customer Customer)
        {
            var sql = "INSERT INTO public.customer ( name , m_no , address , age) VALUES (@name, @m_no, @address, @age)";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, Customer);
            }
        }
        public int update(customer Customer)
        {
            var sql = "UPDATE public.customer SET Id = @id , Name = @name , M_no = @m_no, Address = @address, Age = @age  WHERE id = @Id";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, Customer);
            }
        }
        public int delete(long id)
        {
            var sql = "DELETE FROM public.Customer WHERE id = @Id";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, new { Id = id });
            }
        }
    }
}
