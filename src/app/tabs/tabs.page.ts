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

  static user: User | undefined
  static notUserRegistered = false;

  constructor(private auth: AuthService) {
    let aux = this.auth.getUserInfo();
    if (aux != undefined) {
      TabsPage.notUserRegistered = true;
      TabsPage.user = aux;
    }
  }

  static update(user: User | undefined) { TabsPage.user = user; }

  isMoneyValidated() { return TabsPage.user?.isMoneyValidated }
  isKitchenValidated() { return TabsPage.user?.isKitchenValidated }
  userRegistered() { return TabsPage.notUserRegistered }
}
