import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Food } from 'src/models/food';
import { FoodApiService } from 'src/services/food-api.service';
import { QrbarcodeComponent } from '../../qrbarcode/qrbarcode.component';
import { CommonModule } from '@angular/common';
import { TabsPage } from 'src/app/tabs/tabs.page';
import { Type } from 'src/models/type';
import { LocalStorageService } from 'src/services/local-storage.service';

@Component({
  selector: 'app-food-fab',
  templateUrl: './food-fab.component.html',
  styleUrls: ['./food-fab.component.scss'],
  standalone: true,
  imports: [IonicModule, QrbarcodeComponent, CommonModule]
})
export class FoodFabComponent {

  constructor(private foodApi: FoodApiService) { }

  products: Food[] = [];

  async showProducts(p: string) {
    if (p.length == 13) {
      this.products = [];
      await this.foodApi.getFood(p)
        .then((data: Food | undefined) => {
          if (data) this.products.push(data);
        });
    }
  }

  changeQuantity(input: string, type?: string) {
    switch (input) {
      case 'add': this.addProduct(); break;
      case 'remove': this.removeProduct(); break;
      case 'type': this.changeType(type);
    }
  }

  private addProduct() {
    let q = this.products[0].quantity;
    q.number++;
  }

  private removeProduct() {
    let q = this.products[0].quantity;
    if (q.number > 0) q.number--;
  }

  changeQuantityNumber(number: number) {
    let q = this.products[0].quantity;
    number < 0 ? q.number = 0 : q.number = number;
  }

  private changeType(type: string | undefined) {
    let q = this.products[0].quantity;
    q.type = type + '';
  }

  async addProductToUser() {
    let data = TabsPage.user?.data
    let change = data?.find((d: Type) => d.name === 'kitchen');
    data = data?.filter(d => (d.name != 'kitchen'))
    change?.list.push(this.products[0]);
    if (change) data?.push(change)
    await this.foodApi.updateFoodList(data);
  }

  /* Modal de anadir producto */
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
