import { Injectable } from '@angular/core';
import { Type } from 'src/models/type';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private getSnap() {
    return JSON.parse(localStorage.getItem('userData') + '');
  }

  private async updateUserData(snap: any) {
    localStorage.setItem('userData', JSON.stringify(snap));
  }

  async updateData(data: Type[] | undefined) {
    let snap = this.getSnap()
    snap.data = data;
    await this.updateUserData(snap);
  }
}
