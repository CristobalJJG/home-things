import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword, getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { FirestoreService } from './firestore-service.service';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static app = initializeApp(environment.firebaseConfig);

  auth = getAuth(AuthService.app);
  constructor(protected db: FirestoreService) {
    this.getUserInfo();
  }

  private user: User | undefined;

  getUserInfo() {
    let userData = localStorage.getItem('userData');
    if (userData) this.user = User.fromJsonToUser(JSON.parse(userData));
    return this.user;
  }

  async logInEmailPass(mail: string, pass: string): Promise<string> {
    return await signInWithEmailAndPassword(this.auth, mail, pass)
      .then((data: any) => {
        if (data.user.email != null) this.db.getUserInfo(mail);
      }).catch((error: any) => { return error.code; });
  }

  async registerEmailPass(mail: string, name: string, pass: string, username: string): Promise<string> {
    return await createUserWithEmailAndPassword(this.auth, mail, pass)
      .then((data: any) => {
        if (data.user.email != null) {
          this.db.addUser(mail, name.trim(), username);
          this.db.getUserInfo(mail);
        }
      }).catch((error: any) => { return error.code; });
  }

  async logOut() {
    await signOut(this.auth);
    localStorage.clear();
  }
}