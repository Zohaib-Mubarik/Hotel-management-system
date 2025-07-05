using Dapper;
using Npgsql;
using SProject_Connection.Models;
using System.Data;

namespace SProject_Connection.Db
{
    public class roomRepository
    {
        private readonly string _connectionString;
        public roomRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        private IDbConnection CreateConnection()
        {
            return new NpgsqlConnection(_connectionString); 
        }
        public IEnumerable<room> GetAll()
        {
            using (var connection = CreateConnection()) 
            {
                return connection.Query<room>("select p.* , p2.\"category\" as \"categoryname\" from public.room p \r\njoin public.roomcategory p2 on p.roomcategoryid = p2.id");
            }
        }
        public room GetById(long no)
        {
            using (var connection = CreateConnection()) 
            {
                return connection.QueryFirstOrDefault<room>("SELECT * FROM public.room WHERE no=@Id ", new { Id = no });
            }
        }
        public int create(room Room)
        {
            var sql = "INSERT INTO public.room ( room_type , available , roomcategoryid) VALUES ( @room_type , @available , @roomcategoryid)";
            using (var connection = CreateConnection()) 
            {
                return connection.Execute(sql, Room);
            }
        }
        public int update(room Room) 
        {
            var sql = "UPDATE public.room SET No = @no , room_type  = @Room_Type ,available = @Available , roomcategoryid=@roomcategoryid  WHERE no = @No";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, Room);
            }
        }
        public int delete(long no) 
        {
            var sql = "DELETE FROM public.room WHERE no = @Id";
            using (var connection = CreateConnection())
            {
                return connection.Execute(sql, new { Id = no });
            }
        }
    }
}
