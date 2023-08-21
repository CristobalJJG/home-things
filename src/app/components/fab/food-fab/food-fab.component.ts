import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FoodApiService } from 'src/services/food-api.service';
import { QrbarcodeComponent } from '../../qrbarcode/qrbarcode.component';
import { CommonModule } from '@angular/common';
import { TabsPage } from 'src/app/tabs/tabs.page';
import { Type } from 'src/models/type';
import { FoodCardComponent } from 'src/app/tabs/food-tab/food-card/food-card.component';
import { Food } from 'src/models/comida/food';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-fab',
  templateUrl: './food-fab.component.html',
  styleUrls: ['./food-fab.component.scss'],
  standalone: true,
  imports: [IonicModule, QrbarcodeComponent, CommonModule, FormsModule]
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

  changeName(product: any) {
    console.log(product);
    //this.products[0].name = product;
  }

  clean(id?: string) {
    this.products = [];
    if (id) id = ''
  }

  addProductToUser() {
    let data = TabsPage.user?.addItemInData('kitchen', this.products[0]);
    this.foodApi.updateFoodList(data);
    this.setToastOpen(true);
    this.clean();
    this.setOpen(false);
  }

  /* Modal de anadir producto */
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  /* Abrir Toast */
  isToastOpen = false;
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  /* TODO -  Realizar de una forma correcta las 3 vistas de las cartas, grande, mediano y pequeno */
  /* Cambio en el grid de productos */
  /* grid = 0;
  changeGrid() {
    this.grid = FoodCardComponent.changeAlign();
  } */
}
