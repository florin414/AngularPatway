using PokemonProductApi.Models;

namespace PokemonProductApi;

public static class ProductRepository
{
    private static List<Product> _products = new List<Product>()
    {
        new Product
        {
            Name = "ProductPokemon1",
            Description = "ProductPokemon1",
            ImageUrl = "https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg",
            Phone = 435345,
            Price = 12.09f,
            Category = Category.Electronics,
            Select = Select.Mobile
        },
        new Product
        {
            Name = "ProductPokemon2",
            Description = "ProductPokemon2",
            ImageUrl = "http://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.gif",
            Phone = 435345,
            Price = 12.09f,
            Category = Category.Electronics,
            Select = Select.Mobile
        },
        new Product
        {
            Name = "ProductPokemon3",
            Description = "ProductPokemon3",
            ImageUrl = "https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.png",
            Phone = 435345,
            Price = 12.09f,
            Category = Category.Blankets,
            Select = Select.Mobile
        },
        new Product
        {
            Name = "ProductPokemon4",
            Description = "ProductPokemon4",
            ImageUrl = "https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.png",
            Phone = 435345,
            Price = 12.09f,
            Category = Category.Cloths,
            Select = Select.LandLine
        },
        new Product
        {
            Name = "ProductPokemon5",
            Description = "ProductPokemon5",
            ImageUrl = "https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.png",
            Phone = 435345,
            Price = 12.09f,
            Category = Category.Electronics,
            Select = Select.LandLine
        }
    };

    public static void AddProduct(Product product)
    {
        _products.Add(product);
    }

    public static IEnumerable<Product> GetProducts()
    {
        return _products;
    }
}
