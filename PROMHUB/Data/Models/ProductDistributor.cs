using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PROMHUB.Data.Models
{
    public class ProductDistributor
    {
        public int Id { get; set; }

        [Required]
        public int DistributorId { get; set; }

        [Required]
        public int ProductId { get; set; }

        // Навигационное свойство к дистрибьютору
        [ForeignKey("DistributorId")]
        public Distributor Distributor { get; set; }

        // Навигационное свойство к продукту
        [ForeignKey("ProductId")]
        public Product Product { get; set; }
    }
}
