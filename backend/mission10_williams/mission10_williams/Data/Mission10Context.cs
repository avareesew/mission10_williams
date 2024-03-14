using Microsoft.EntityFrameworkCore;

namespace mission10_williams.Data
{
    public class Mission10Context : DbContext
    {
        public Mission10Context(DbContextOptions<Mission10Context> options): base(options) { } 
        
        public DbSet<Bowler> Bowlers { get; set; }
        public DbSet<Team> Teams { get; set; }

    }
}
