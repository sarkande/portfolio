import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-home',
    imports: [TranslateModule, RouterModule, CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  // Propriétés de gestion de la langue et des clés de traduction
  public currentLang: string = 'fr';
  public titleList: string[] = [];
  public descriptionList: string[] = [];
  public titleKey: string = 'home.title1';
  public descriptionKey: string = 'home.description1';

  // Propriétés de gestion de l'animation de saisie
  public lastRandomIndex: number | null = null;
  public isTitleTyping: boolean = false;
  public isDescriptionTyping: boolean = false;

  // Références aux éléments du DOM
  @ViewChild('titleEl') titleEl!: ElementRef<HTMLElement>;
  @ViewChild('descEl') descEl!: ElementRef<HTMLElement>;

  constructor(
    private langService: LanguageService,
    private translate: TranslateService
  ) {
    this.langService.currentLang$.subscribe((lang: string) => {
      this.currentLang = lang;
    });

    for (let i = 1; i <= 10; i++) {
      this.titleList.push(`home.title${i}`);
      this.descriptionList.push(`home.description${i}`);
    }
  }

  /**
   * Méthode du cycle de vie Angular appelée après l'initialisation de la vue du composant.
   * Lance les animations de saisie initiales et configure l'intervalle de mise à jour.
   */
  public async ngAfterViewInit(): Promise<void> {
    await this.triggerTyping(
      this.titleEl.nativeElement,
      this.titleKey,
      'title'
    );
    await this.triggerTyping(
      this.descEl.nativeElement,
      this.descriptionKey,
      'description'
    );

    setInterval(() => {
      this.setRandomTitleAndDescription();
    }, 3000);
  }

  /**
   * Déclenche l'animation de saisie sur un élément donné.
   * Gère les flags d'état et la récupération de la traduction.
   * @param element L'élément HTML sur lequel taper le texte.
   * @param key La clé de traduction à utiliser.
   * @param type Le type d'élément ('title' ou 'description') pour gérer les flags spécifiques.
   */
  private async triggerTyping(
    element: HTMLElement,
    key: string,
    type: 'title' | 'description'
  ): Promise<void> {
    if (type === 'title') {
      this.isTitleTyping = true;
    } else {
      this.isDescriptionTyping = true;
    }

    try {
      const translatedText: string = await firstValueFrom(
        this.translate.get(key)
      );
      await this.typeText(element, translatedText);
    } catch (error) {
      console.error(
        `Erreur lors de la traduction ou de la saisie pour la clé "${key}" :`,
        error
      );
      await this.typeText(element, key); // Affiche la clé en cas d'erreur
    } finally {
      if (type === 'title') {
        this.isTitleTyping = false;
      } else {
        this.isDescriptionTyping = false;
      }
    }
  }

  /**
   * Définit un nouveau titre ou une nouvelle description aléatoirement et lance l'animation de saisie.
   * La méthode vérifie si une animation est déjà en cours pour éviter les chevauchements.
   */
  private async setRandomTitleAndDescription(): Promise<void> {
    if (this.isTitleTyping || this.isDescriptionTyping) {
      return;
    }

    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * this.titleList.length);
    } while (randomIndex === this.lastRandomIndex);

    this.lastRandomIndex = randomIndex;

    const updateTitle: boolean = Math.random() < 0.5;

    if (updateTitle) {
      this.titleKey = this.titleList[randomIndex];
      await this.triggerTyping(
        this.titleEl.nativeElement,
        this.titleKey,
        'title'
      );
    } else {
      this.descriptionKey = this.descriptionList[randomIndex];
      await this.triggerTyping(
        this.descEl.nativeElement,
        this.descriptionKey,
        'description'
      );
    }
  }

  /**
   * Anime la saisie de texte caractère par caractère dans un élément HTML.
   * Gère la suppression du contenu existant et l'ajout du curseur.
   * @param element L'élément HTML cible.
   * @param text Le texte à taper.
   */
  private async typeText(element: HTMLElement, text: string): Promise<void> {
    let cursor: HTMLElement | null = element.querySelector('.cursor');
    if (!cursor) {
      cursor = document.createElement('span');
      cursor.classList.add('cursor');
      cursor.innerText = '|';
    }

    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    element.appendChild(cursor);

    for (let i = 0; i < text.length; i++) {
      const char: Text = document.createTextNode(text[i]);
      element.insertBefore(char, cursor);
      const delay: number = Math.floor(Math.random() * (60 - 20 + 1)) + 20;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
