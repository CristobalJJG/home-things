import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class Tab3Page {

  notUserRegistered = false;

  constructor() {
    let user = localStorage.getItem('userData');
    if (user) { console.log('si', user) }
    else { console.log('no', user); this.notUserRegistered = true; }
  }
}
