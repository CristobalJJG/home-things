import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { User } from 'src/models/user';
import { AuthService } from 'src/services/auth-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

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
