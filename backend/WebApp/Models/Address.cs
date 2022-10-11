using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class Address : Model
    {
        public int Address_Id { get => Id; set => Id = value; }

        [Required]
        public string Address_DBid { get; set; }
        [Required]
        public string AddressName { get; set; }

        [Required]
        public string Zipcode { get; set; }
        [Required]
        public string Cityname { get; set; }    
    }
}