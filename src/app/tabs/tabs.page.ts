import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  notUserRegistered = false;

  constructor() {
    let user = localStorage.getItem('userData');
    if (user) { console.log('si', user) }
    else { console.log('no', user); this.notUserRegistered = true; }
    console.log(this.notUserRegistered);

  }
}
