import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../enter-user.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class LoginPage {
  static ubi = "";
  constructor(private auth: AuthService, private router: Router) {
    if (auth.getUserInfo()) this.router.navigate(['/tabs/tab3']);
    else LoginPage.ubi = window.location.href.split('/login')[0];
  }
  save(form: any) {
    this.auth.logInEmailPass(form.value['email'], form.value['password']).then((data) => {
      setInterval(function () {
        if (!data) { window.location.href = LoginPage.ubi + "/tabs/tab3" }
      }, 750);
    });
  }
}
