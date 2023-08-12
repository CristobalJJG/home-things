import { Component } from '@angular/core';
import { FoodFabComponent } from 'src/app/components/fab/food-fab/food-fab.component';
import { IonicModule } from '@ionic/angular';
import { FoodCardComponent } from './food-card/food-card.component';
import { TabsPage } from '../tabs.page';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, FoodFabComponent, FoodCardComponent, CommonModule]
})
export class Tab2Page {

  user = TabsPage.user;
  products = this.user?.data.find(d => (d.name == 'kitchen'))?.list

  constructor() { }

}
