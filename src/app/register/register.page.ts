import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['../login/login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class RegisterPage {
  static ubi = "";
  constructor(private auth: AuthService, private router: Router) {
    if (auth.getUserInfo()) this.router.navigate(['/tabs/tab3']);
    else RegisterPage.ubi = window.location.href.split('/login')[0];
  }
  save(form: any) {
    this.auth.registerEmailPass(form.value['email'], form.value['name'], form.value['password'], form.value['username']).then((data) => {
      setInterval(function () {
        if (!data) { window.location.href = RegisterPage.ubi + "/tabs/tab3" }
      }, 750);
    });;
  }
}