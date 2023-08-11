import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { FoodFabComponent } from 'src/app/components/fab/food-fab/food-fab.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FoodFabComponent]
})
export class Tab2Page {

  constructor() { }

}
