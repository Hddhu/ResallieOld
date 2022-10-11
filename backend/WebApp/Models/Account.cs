using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Account : Model
    {
        [Key]
        public int Account_id{ get => Id; set => Id = value; }

        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}