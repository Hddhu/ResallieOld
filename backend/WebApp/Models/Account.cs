using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Account //: Model
    { 
        [Key]
        public string Account_id { get; set; } //=> Id; set => Id = value; }

        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}