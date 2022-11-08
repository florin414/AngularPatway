import { Category } from "./category";
import { Select } from "./select";

export class Product{
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: Category;
  phone: number;
  select: Select;
}
