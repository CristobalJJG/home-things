import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword, getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';


import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { FirestoreService } from './firestore-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static app = initializeApp(environment.firebaseConfig);

  auth = getAuth(AuthService.app);
  constructor(protected db: FirestoreService) { }


  async logInEmailPass(mail: string, pass: string): Promise<string> {
    return await signInWithEmailAndPassword(this.auth, mail, pass)
      .then((data) => {
        if (data.user.email != null) this.db.getUserInfo(mail);
      }).catch((error) => { return error.code; });
  }

  async registerEmailPass(mail: string, name: string, pass: string): Promise<string> {
    return await createUserWithEmailAndPassword(this.auth, mail, pass)
      .then((data) => {
        if (data.user.email != null) {
          this.db.addUser(mail, name.trim());
          this.db.getUserInfo(mail);
        }
      }).catch((error) => { return error.code; });
  }

  async logOut() {
    await signOut(this.auth);
    localStorage.clear();
  }
}