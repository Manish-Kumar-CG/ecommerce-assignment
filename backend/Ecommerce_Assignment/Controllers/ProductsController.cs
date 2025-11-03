using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ecommerce_Assignment.Data;
using Ecommerce_Assignment.Models;


namespace Ecommerce_Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController: ControllerBase
    {
        private readonly Datacontext _datacontext;

        public ProductsController(Datacontext datacontext)
        {
            _datacontext = datacontext;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Products>>>GetProducts()
        {
            return await _datacontext.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Products>> GetProduct(int id)
        {
            var product = await _datacontext.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            return product;
        }
    }
}
