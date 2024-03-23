using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace PROMHUB.Data.Models
{

    public class Product
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public string Photo { get; set; }

        [Required]
        public double Price { get; set; }

        public int Discount { get; set; }

        public ProductDistributor ProductDistributor { get; set; }

    }

    // Класс для операции GET
    public class ProductGet
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public string Photo { get; set; }

        [Required]
        public double Price { get; set; }

        public int Discount { get; set; }

        public ProductDistributor ProductDistributor { get; set; }

        [JsonIgnore]
        public byte[] PhotoBlob { get; set; } // Игнорируем при сериализации для GET
    }

    // Класс для операции POST
    public class ProductPostPut
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [JsonIgnore]
        public string Photo { get; set; } // Игнорируем при десериализации для POST

        [Required]
        public double Price { get; set; }

        public int Discount { get; set; }

        public ProductDistributor ProductDistributor { get; set; }

        [JsonPropertyName("PhotoBlob")]
        public byte[] PhotoBlob { get; set; }
    }
}
