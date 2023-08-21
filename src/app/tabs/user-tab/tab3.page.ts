import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from 'src/services/auth-service.service';
import { UserService } from 'src/services/user-service.service';
import { TabsPage } from '../tabs.page';
import { Tab2Page } from '../food-tab/tab2.page';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class Tab3Page {
  user = TabsPage.user
  notUserRegistered = TabsPage.notUserRegistered

  constructor(private auth: AuthService, private db: UserService) { }

  updateValidatedSection(section: string) {
    let hasSection = false;
    this.user?.data.forEach((item) => {
      if (item.name == section) hasSection = true;
      if (hasSection && item.name == section)
        switch (item.name) {
          case 'money': this.user!.isMoneyValidated = !this.user?.isMoneyValidated; break;
          case 'kitchen': this.user!.isKitchenValidated = !this.user?.isKitchenValidated; break;
          case 'shopping': this.user!.isShoppingValidated = !this.user?.isShoppingValidated; break;
        }
    })
    if (!hasSection) this.user?.data?.push({ name: section, list: [] })
    localStorage.setItem("userData", JSON.stringify(this.user));
    this.db.updateUser(this.user!);
    TabsPage.update(this.user!);
  }

  async updateUserInfo() {
    await this.db.getUserInfo(TabsPage.user!.email);
    let aux = this.auth.getUserInfo();
    TabsPage.update(aux);
    Tab2Page.updateFoodData(aux)
  }

  async logout() {
    await this.auth.logOut();
    TabsPage.update(undefined);
    window.location.reload();
  }
}
