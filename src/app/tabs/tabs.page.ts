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
  MAX_TABS = 3;
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

  maxTabs() {
    let c = 0;
    if (TabsPage.user?.isMoneyValidated) c++;
    if (TabsPage.user?.isKitchenValidated) c++;
    if (TabsPage.notUserRegistered) c++;
    if (c > this.MAX_TABS) this.setOpen(true)
    return c <= this.MAX_TABS;
  }

  isToastOpen = false;
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
