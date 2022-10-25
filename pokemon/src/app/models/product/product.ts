import { Category } from "./category";
import { Select } from "./select";

export class Product{
  name: string = '';
  description: string = '';
  price: number = 0 ;
  imageUrl: string = '';
  category!: Category;
  phone: number = 0;
  select!: Select;
}
