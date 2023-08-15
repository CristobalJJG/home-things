import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Food } from 'src/models/comida/food';
import { TabsPage } from '../../tabs.page';
import { FoodApiService } from 'src/services/food-api.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})

export class FoodCardComponent {


  static alignProducts: number = 1;

  @Input() product: Food | undefined;

  constructor(private foodApi: FoodApiService) { }

  static changeAlign() {
    FoodCardComponent.alignProducts++;
    if (FoodCardComponent.alignProducts == 3)
      FoodCardComponent.alignProducts = 0;
    return FoodCardComponent.alignProducts;
  }

  alignType() {
    return FoodCardComponent.alignProducts;
  }

  addProduct() {
    let q = this.product?.quantity;
    if (q) q.number++;
    this.addProductToUser();
  }

  removeProduct() {
    let q = this.product?.quantity;
    if (q && q.number > 0) q.number--;
    this.addProductToUser();
  }

  addProductToUser() {
    let data = TabsPage.user?.changeItemInData('kitchen');
    this.foodApi.updateFoodList(data);
  }
}

const BIG = 'big';
const MID = 'mid';
const SMALL = 'small';