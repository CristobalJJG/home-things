import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {

  async getFood(food: string) {
    try {
      await axios.get('https://world.openfoodfacts.org/api/v0/product/8480012010839.json')
        .then(data => { console.log(data) })
    } catch (error) {
      console.error(error);
    }
  }
}
