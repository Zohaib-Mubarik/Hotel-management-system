using Dapper;
using Npgsql;
using SProject_Connection.Models;
using System.Data;

namespace SProject_Connection.Db
{
    public class employeeRepository
    {
        private readonly string _connectionString;
        public employeeRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        private IDbConnection CreateConnection()
        {
            return new NpgsqlConnection(_connectionString);
        }
        public IEnumerable<employee> GetAll()
        {
            using (var connection = CreateConnection())
            {
                return connection.Query<employee>("SELECT * FROM employee");
            }
        }
        public employee GetById(long id)
        {
            using (var connection = CreateConnection())
            {
                return connection.QueryFirstOrDefault<employee>("SELECT * FROM public.employee WHERE id=@Id ", new { Id = id });
            }
        }
        public int create(employee Employee)
        {
            var sql = "INSERT INTO public.employee (name , address , jobDes) VALUES (@name, @address, @jobDes)";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, Employee);
            }
        }
        public int update(employee Employee)
        {
            var sql = "UPDATE public.employee SET Id = @id , Name = @name , Address = @address, JobDes = @jobDes WHERE id = @Id";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, Employee);
            }
        }
        public int delete(long id)
        {
            var sql = "DELETE FROM public.employee WHERE id = @Id";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, new { Id = id });
            }
        }
    }
}
