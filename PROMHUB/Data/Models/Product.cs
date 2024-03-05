using System.ComponentModel.DataAnnotations;

namespace PROMHUB.Data.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public byte[] Photo { get; set; }

        [Required]
        public double Price { get; set; }

        public int Discount { get; set; }

        // Навигационное свойство к продукту дистрибьютора
        public ProductDistributor ProductDistributor { get; set; }
    }
}
