using Microsoft.AspNetCore.Mvc;
using PokemonProductApi.Models;

namespace PokemonProductApi.Controllers;
[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private readonly ILogger<ProductController> _logger;

    public ProductController(ILogger<ProductController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetProduct")]
    public IEnumerable<Product> Get()
    {
        return ProductRepository.GetProducts();
    }

    [HttpPost(Name = "PostProduct")]
    public void Post(Product product)
    {
        ProductRepository.AddProduct(product);
    }
}
