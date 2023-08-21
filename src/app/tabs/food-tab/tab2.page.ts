import { Component } from '@angular/core';
import { FoodFabComponent } from 'src/app/components/fab/food-fab/food-fab.component';
import { IonicModule } from '@ionic/angular';
import { FoodCardComponent } from './food-card/food-card.component';
import { TabsPage } from '../tabs.page';
import { CommonModule } from '@angular/common';
import { User } from 'src/models/user';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, FoodFabComponent, FoodCardComponent, CommonModule]
})
export class Tab2Page {

  static user: User | undefined;
  static products: any[];
  static results: any[];

  constructor() {
    Tab2Page.updateFoodData(TabsPage.user);
  }

  filterProducts(event: any) {
    const query = event.target.value.toLowerCase();
    Tab2Page.results = Tab2Page.products.filter((d) => d.name.toLowerCase().indexOf(query) > -1);
  }

  getResults() {
    return Tab2Page.products;
  }

  static updateFoodData(user: User | undefined) {
    this.user = user;
    this.products = Tab2Page.user!.data.find(d => (d.name == 'kitchen'))!.list;
    this.results = [...Tab2Page.products];
    console.log(this.products);

  }
}
