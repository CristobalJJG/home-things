import { Component, EnvironmentInjector, ViewChild, inject } from '@angular/core';
import { IonModal, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  loginRegisterModal: boolean = false;

  constructor() {
    let user = localStorage.getItem('userData');
    if (user) { console.log('si', user) }
    else { console.log('no', user); this.loginRegisterModal = true; }
  }

  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}
