import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  encodedParams = new URLSearchParams();

  options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': 'd9c7e15d7bmsh047a335908240e8p1b9c75jsnb5da89e246f3',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    data: this.encodedParams,
  };

  async translateEnEs(phrase: string) {
    this.encodedParams.set('q', phrase);
    this.encodedParams.set('target', 'es');
    this.encodedParams.set('source', 'en');

    return await this.translate();
  }

  async translateEsEn(phrase: string) {
    this.encodedParams.set('q', phrase);
    this.encodedParams.set('target', 'en');
    this.encodedParams.set('source', 'es');

    return await this.translate();
  }

  private async translate() {
    try {
      let res: any[] = [];
      await axios.request(this.options).then(data => { res.push(data) });
      return res[0].data.data.translations[0].translatedText;
    } catch (error) { console.error(error); return null }
  }
}
