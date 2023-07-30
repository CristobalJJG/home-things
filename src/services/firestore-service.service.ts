import { Injectable } from '@angular/core';
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  db = getFirestore(AuthService.app);

  async getUserInfo(mail: string) {
    let snap = await getDoc(doc(this.db, "users", mail.split("@")[0]));
    if (snap.exists()) localStorage.setItem("userData", JSON.stringify(snap.data()))
    else console.log("No hay datos, señor");
  }

  async addUser(mail: string, fullname: string) {
    let username = mail.split("@")[0]

    let name = "";
    let surname = "";
    switch (fullname.split(" ").length) {
      case 1: name = this.toPascal(fullname); break;
      case 2: {
        let spl = fullname.split(" ");
        name = this.toPascal(spl[0]);
        surname = this.toPascal(spl[1]);;
        break;
      }
      case 3: {
        let spl = fullname.split(" ");
        name = this.toPascal(spl[0]);
        surname = this.toPascal(spl[1]) + " " + this.toPascal(spl[2]);
        break;
      }
      case 4: {
        let spl = fullname.split(" ");
        name = this.toPascal(spl[0]) + " " + this.toPascal(spl[1]);
        surname = this.toPascal(spl[2]) + " " + this.toPascal(spl[3]);
        break;
      }
    }

    await setDoc(doc(this.db, "users", username.toLowerCase()), {
      name: name,
      surname: surname,
      email: mail,
      isAdmin: false,
      username: mail.split('@')[0].toLowerCase(),
      gastos: [],
      food: []
    });
  }

  async updateUser(user: any) {
    try {
      await setDoc(doc(this.db, "users", user.email.split('@')[0].toLowerCase()), {
        name: user.name,
        surname: user.surname,
        email: user.email,
        isAdmin: user.isAdmin,
        username: user.username,
        gastos: user.gastos,
        food: user.food
      });
      window.location.reload();
    } catch (e) { console.error(e) };
  }

  protected toPascal(str: string) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length).toLowerCase()
  }
}
