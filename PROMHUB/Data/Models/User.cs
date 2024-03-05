using System.ComponentModel.DataAnnotations;

namespace PROMHUB.Data.Models
{
    public class User
    {

        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(50)]
        public string Surname { get; set; }


        // Добавляем свойство UserSettings
        public UserSettings UserSettings { get; set; }

    }
}
