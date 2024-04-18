using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PROMHUB.Data.Models;

namespace PROMHUB.Data
{
    public class AppDbContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public AppDbContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to postgres with connection string from app settings
            options.UseNpgsql(Configuration.GetConnectionString("WebApiDatabase"));
        }

        public DbSet<User> Users { get; set; }

        // DbSet для таблицы UserSettings
        public DbSet<UserSettings> UserSettings { get; set; }

        public DbSet<CompanyInfo> CompanyInfo { get; set; }

        public DbSet<Company> Company { get; set; }

        public DbSet<CompanyProduct> CompanyProduct { get; set; }

        public DbSet<Shop> Shop { get; set; }

        public DbSet<ProductShop> ProductShop { get; set; }

        public DbSet<Product> Product { get; set; }
        public DbSet<ProductGet> ProductGets { get; set; }
        public DbSet<ProductPostPut> ProductPostPuts { get; set; }


    }
}