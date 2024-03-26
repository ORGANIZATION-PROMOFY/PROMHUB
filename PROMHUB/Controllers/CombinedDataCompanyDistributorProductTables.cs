namespace PROMHUB.Controllers
{
    public class CombinedDataCompanyDistributorProductTables
    {
        public ProductData Product { get; set; }
        public DistributorData Distributor { get; set; }
        public CompanyData Company { get; set; }
    }

    public class ProductData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Photo { get; set; }
        public int Discount { get; set; }
    }

    public class DistributorData
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public int Rating { get; set; }
    }

    public class CompanyData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ContactPhone { get; set; }
        public string ContactEmail { get; set; }
        public string Photo { get; set; }
    }
}
