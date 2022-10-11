using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public abstract class Model
    {
        [Key]
        protected int Id { get; set; }
    }
}