namespace PokemonProductApi.Models;

public class Product
{
    public string Name { get; set; }
    public string Description { get; set; }
    public float Price { get; set; }
    public string ImageUrl { get; set; }
    public int Phone { get; set; }
    public Category Category { get; set; }
    public Select Select { get; set; }

}
