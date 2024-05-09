using System.ComponentModel.DataAnnotations.Schema;

namespace PROMHUB.Data.Models
{
    public class ProductList
    {
        public int Id { get; set; }

        public int Quantity { get; set; }

        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }

        public int ProductId { get; set; } 
        [ForeignKey("ProductId")]
        public Product Product { get; set; }


    }
}
