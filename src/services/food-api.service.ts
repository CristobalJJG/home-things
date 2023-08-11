import { Injectable } from '@angular/core';
import axios from 'axios';
import { Food } from 'src/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {

  async getFood(foodId: string) {
    try {
      let product: Food[] = [];
      await axios.get(`https://world.openfoodfacts.org/api/v0/product/${foodId}.json`)
        .then(data => {
          let p = data.data.product
          product.push({
            name: p.product_name_es || p.product_name,
            ingredients: p.ingredients_tags_es || data.data.product.ingredients_tags,
            picture: p.image_url
          })
        })
      return product[0];
    } catch (error) {
      console.error(error);
      return undefined
    }
  }
}
