import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/services/auth-service.service';
import { Router } from '@angular/router';
import { TabsPage } from '../tabs.page';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GeneralPage implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (TabsPage.user) this.router.navigate(['/tabs/tab3']);
  }


}
