using Ecommerce_Assignment.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Ecommerce_Assignment.Data
{
    public class Datacontext : DbContext
    {
        public DbSet<Products>Products { get; set; }
        public Datacontext(DbContextOptions<Datacontext> options) 
        :   base(options)
        { 
        }
    }
}
