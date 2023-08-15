import { Injectable } from '@angular/core';
import axios from 'axios';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { TabsPage } from 'src/app/tabs/tabs.page';
import { AuthService } from './auth-service.service';
import { LocalStorageService } from './local-storage.service';
import { Type } from 'src/models/type';
import { Food } from 'src/models/comida/food';

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {
  constructor(private auth: AuthService, private ls: LocalStorageService) { }

  db = getFirestore(AuthService.app);

  async getFood(foodId: string) {
    try {
      let product: Food[] = [];
      await axios.get(`https://world.openfoodfacts.org/api/v0/product/${foodId}.json`)
        .then(data => {
          let p = data.data.product

          product.push({
            id: foodId,
            name: p.product_name_es || p.product_name,
            ingredients: p.ingredients_text_es || data.data.product.ingredients_text,
            picture: p.image_url,
            quantity: {
              number: 0,
              type: ''
            },
            priceList: []
          })
        })
      return product[0];
    } catch (error) {
      console.error(error);
      return undefined
    }
  }

  async updateFoodList(data: Type[] | undefined) {
    let user = this.auth.getUserInfo();
    this.ls.updateData(data);
    user = this.auth.getUserInfo();
    await setDoc(doc(this.db, "users", TabsPage.user!.email.split('@')[0]), {
      data: user!.data,
      email: user!.email,
      fullname: user!.fullname,
      isAdmin: user!.isAdmin,
      isKitchenValidated: user!.isKitchenValidated,
      isMoneyValidated: user!.isMoneyValidated,
      lastLoginDate: user!.lastLoginDate,
      name: user!.name,
      registerDate: user!.registerDate,
      surname: user!.surname,
      username: user!.username
    })
  }
}
