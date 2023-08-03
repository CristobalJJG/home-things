import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from 'src/models/user';
import { AuthService } from 'src/services/auth-service.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class Tab3Page {

  user: User | undefined
  notUserRegistered = false;

  constructor(private auth: AuthService) {
    let aux = this.auth.getUserInfo();
    if (aux != undefined) {
      this.notUserRegistered = true;
      this.user = aux;
    }
  }
}
