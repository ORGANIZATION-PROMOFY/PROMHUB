namespace PROMHUB.Controllers
{
    public class CombinedDataCompanyDistributorProductTables
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public double ProductPrice { get; set; }
        public string ProductPhoto { get; set; }
        public int ProductDiscount { get; set; }
        public int DistributorId { get; set; }
        public string DistributorAddress { get; set; }
        public int DistributorRating { get; set; }
        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string CompanyDescription { get; set; }
        public string CompanyContactPhone { get; set; }
        public string CompanyContactEmail { get; set; }
        public string CompanyPhoto { get; set; }
    }
}
