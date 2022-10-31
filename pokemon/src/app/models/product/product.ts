import { Category } from "./category";
import { Select } from "./select";

export class Product{
  name: string = '';
  description: string = '';
  price: number = 0 ;
  imageUrl: string = '';
  category: Category = 1;
  phone: number = 0;
  select: Select = 1;
}
