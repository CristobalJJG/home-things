import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Food } from 'src/models/food';
import { FoodApiService } from 'src/services/food-api.service';
import { TranslateService } from 'src/services/translate.service';
import { QrbarcodeComponent } from '../../qrbarcode/qrbarcode.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-fab',
  templateUrl: './food-fab.component.html',
  styleUrls: ['./food-fab.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, QrbarcodeComponent, CommonModule]
})
export class FoodFabComponent {

  constructor(private foodApi: FoodApiService) { }

  product: Food = {
    name: ''
  };

  products: Food[] = [];

  async showProducts(p: string) {
    if (p.length == 13) {
      this.products = [];
      await this.foodApi.getFood(p)
        .then((data: Food | undefined) => {
          if (data) this.products.push(data);
        });
      console.log(this.products);

    }

    /* await this.translateApi.translateEsEn(p)
      .then(data => { food.push(data) })
    await this.foodApi.getFood(food[0])
      .then(data => { food.push(data) });
    console.log(food);

    if (food[1]?.length > 0)
      food[1].forEach((f: never) => {
        this.products.push(f);
      });
    console.log(this.products); */
  }

  /* Modal de anadir producto */
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
