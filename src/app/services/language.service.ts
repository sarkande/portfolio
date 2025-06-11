import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core'; // si tu utilises ngx-translate

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private langSubject = new BehaviorSubject<string>('fr');
  currentLang$ = this.langSubject.asObservable();

  constructor(private translate: TranslateService) {
    const defaultLang = 'fr';
    this.translate.setDefaultLang(defaultLang);
    this.langSubject.next(defaultLang);
  }

  setLang(lang: string) {
    this.langSubject.next(lang);
    this.translate.use(lang);
  }

  get currentLang() {
    return this.langSubject.value;
  }
}
