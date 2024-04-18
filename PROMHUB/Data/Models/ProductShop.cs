using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PROMHUB.Data.Models
{
    public class ProductShop
    {
        public int Id { get; set; }

        [Required]
        public int ShopId { get; set; }

        [Required]
        public int ProductId { get; set; }

        // Навигационное свойство к дистрибьютору
        [ForeignKey("ShopId")]
        public Shop Shop { get; set; }

        // Навигационное свойство к продукту
        [ForeignKey("ProductId")]
        public Product Product { get; set; }
    }
}
