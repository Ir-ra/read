import { AdditionalField } from "./AdditionalField";

export interface Product {
  'category_id': number,
  'category_name': string,
  'description': string,
  'fields': AdditionalField[],
  'id': string,
  'image': string[],
  'name': string,
  'price': number,
  'quantity': number,
  'special_price': number,
  'status': string,
}