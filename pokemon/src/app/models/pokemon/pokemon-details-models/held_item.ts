import { Item } from "./item";
import { VersionDetails } from "./version-details";

export class HeldItem{
  item!: Item;
  version_details: VersionDetails[] = []
  id: number = 0;
  is_deafult: boolean = false;
  location_area_encounters: string = '';
}
