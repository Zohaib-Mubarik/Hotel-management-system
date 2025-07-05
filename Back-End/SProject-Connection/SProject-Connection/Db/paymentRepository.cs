using Dapper;
using Npgsql;
using SProject_Connection.Models;
using System.Data;

namespace SProject_Connection.Db
{
    public class paymentRepository
    {
        private readonly string _connectionString;
        public paymentRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        private IDbConnection CreateConnection()
        {
            return new NpgsqlConnection(_connectionString);
        }
        public IEnumerable<payment> GetAll()
        {
            using (var connection = CreateConnection())
            {
                return connection.Query<payment>("SELECT * FROM payment");
            }
        }
        public payment GetById(long pay_no)
        {
            using (var connection = CreateConnection())
            {
                return connection.QueryFirstOrDefault<payment>("SELECT * FROM public.payment WHERE pay_no=@Id ", new { Id = pay_no });
            }
        }
        public int create(payment Payment)
        {
            var sql = "INSERT INTO public.payment (pay_date , pay_method , pay_amount) VALUES (@pay_date, @pay_method , @pay_amount)";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, Payment);
            }
        }
        public int update(payment Payment)
        {
            var sql = "UPDATE public.payment SET Pay_No = @pay_no , Pay_Date = @pay_date , Pay_Method = @pay_method , Pay_Amount = @pay_amount  WHERE pay_no = @Pay_no";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, Payment);
            }
        }
        public int delete(long pay_no)
        {
            var sql = "DELETE FROM public.payment WHERE pay_no = @Id";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, new { Id = pay_no });
            }
        }
    }
}
