import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Food } from 'src/models/food';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class FoodCardComponent {

  static alignProducts: number = 0;

  @Input() product: Food | undefined;

  constructor() { }

  static changeAlign(n: number) {
    FoodCardComponent.alignProducts++;
    if (FoodCardComponent.alignProducts == 3) FoodCardComponent.alignProducts = 0;
    return FoodCardComponent.alignProducts;
  }

  alignType() {
    return FoodCardComponent.alignProducts;
  }
}
