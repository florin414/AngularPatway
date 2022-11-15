using PokemonProductApi.Models;

namespace PokemonProductApi;

public static class ProductRepository
{
    private static List<Product> _products = new List<Product>();

    public static void AddProduct(Product product)
    {
        _products.Add(product);
    }

    public static IEnumerable<Product> GetProducts()
    {
        return _products;
    }
}
