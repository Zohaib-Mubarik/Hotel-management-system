using Dapper;
using Npgsql;
using SProject_Connection.Models;
using System.Data;

namespace SProject_Connection.Db
{
    public class reservationRepository
    {
        private readonly string _connectionString;
        public reservationRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        private IDbConnection CreateConnection()
        {
            return new NpgsqlConnection(_connectionString);
        }
        public IEnumerable<reservation> GetAll()
        {
            using (var connection = CreateConnection())
            {
                return connection.Query<reservation>("SELECT * FROM public.reservation");
            }
        }
        public reservation GetById(long reservationid)
        {
            using (var connection = CreateConnection())
            {
                return connection.QueryFirstOrDefault<reservation>("SELECT * FROM public.reservation WHERE reservationid=@Id ", new { Id = reservationid });
            }
        }
        public int create(reservation Reservation)
        {
            var sql = "INSERT INTO public.reservation (reservationid, roomno , customerid , paymentno) VALUES (@reservationid, @roomno, @customerid, @paymentno)";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, Reservation);
            }
        }
        public int update(reservation Reservation)
        {
            var sql = "UPDATE public.reservation SET Id = @reservationid , Roomno = @roomno , Customerid = @customerid, Paymentno = @paymentno WHERE reservationid = @Id";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, Reservation);
            }
        }
        public int delete(long reservationid)
        {
            var sql = "DELETE FROM public.reservation WHERE reservationid = @Id";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, new { Id = reservationid });
            }
        }
    }
}
