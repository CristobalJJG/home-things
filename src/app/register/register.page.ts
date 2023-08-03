import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['../login/login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class RegisterPage {
  constructor(private auth: AuthService) { }
  save(form: any) {
    this.auth.registerEmailPass(form.value['email'], form.value['name'], form.value['password'], form.value['username']);
  }
}