import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs'; // Utilisé pour convertir un Observable en Promise

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  // Langue courante, initialisée en 'fr' par défaut.
  currentLang = 'fr';

  // Listes des clés de traduction pour les titres et descriptions, générées dynamiquement.
  titleList: string[] = [];
  descriptionList: string[] = [];

  // Clés de traduction actuellement affichées (pour le titre et la description).
  titleKey: string = 'home.title1';
  descriptionKey: string = 'home.description1';

  // Indice du dernier élément aléatoire affiché pour éviter les répétitions immédiates.
  lastRandomIndex: number | null = null;

  // Flags pour gérer l'état de saisie des éléments.
  // Empêche de lancer une nouvelle animation si une est déjà en cours.
  isTitleTyping = false;
  isDescriptionTyping = false;

  // Références aux éléments du DOM pour la saisie de texte.
  @ViewChild('titleEl') titleEl!: ElementRef<HTMLElement>;
  @ViewChild('descEl') descEl!: ElementRef<HTMLElement>;

  constructor(
    private langService: LanguageService, // Service personnalisé pour la gestion de la langue
    private translate: TranslateService // Service ngx-translate pour la traduction
  ) {
    // S'abonne aux changements de langue pour mettre à jour la langue courante du composant.
    // Cela permettra aux prochaines traductions de se faire dans la nouvelle langue.
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
    });

    // Génère dynamiquement les clés de traduction pour les titres et descriptions.
    // Cela permet d'éviter la duplication de code et rend les listes extensibles facilement.
    for (let i = 1; i <= 10; i++) {
      this.titleList.push(`home.title${i}`);
      this.descriptionList.push(`home.description${i}`);
    }
  }

  /**
   * Méthode du cycle de vie Angular appelée après l'initialisation de la vue du composant.
   * C'est ici que les animations de saisie initiales sont lancées et l'intervalle est configuré.
   */
  async ngAfterViewInit() {
    // Lance la saisie initiale du titre.
    await this.triggerTyping(
      this.titleEl.nativeElement,
      this.titleKey,
      'title'
    );

    // Lance la saisie initiale de la description.
    await this.triggerTyping(
      this.descEl.nativeElement,
      this.descriptionKey,
      'description'
    );

    // Configure un intervalle pour changer aléatoirement le titre ou la description toutes les 3 secondes.
    setInterval(() => {
      this.setRandomTitleAndDescription();
    }, 7000);
  }

  /**
   * Fonction utilitaire pour déclencher l'animation de saisie sur un élément.
   * Gère les flags d'état et la récupération de la traduction.
   * @param element L'élément HTML sur lequel taper le texte.
   * @param key La clé de traduction à utiliser.
   * @param type Le type d'élément ('title' ou 'description') pour gérer les flags spécifiques.
   */
  async triggerTyping(
    element: HTMLElement,
    key: string,
    type: 'title' | 'description'
  ) {
    if (type === 'title') {
      this.isTitleTyping = true;
    } else {
      this.isDescriptionTyping = true;
    }

    try {
      // Récupère la traduction du texte en utilisant firstValueFrom pour convertir l'Observable en Promise.
      const translatedText = await firstValueFrom(this.translate.get(key));
      // Lance l'animation de saisie avec le texte traduit.
      await this.typeText(element, translatedText);
    } catch (error) {
      console.error(
        `Erreur lors de la traduction ou de la saisie pour la clé "${key}" :`,
        error
      );
      await this.typeText(element, key);
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
  async setRandomTitleAndDescription() {
    // Si une animation de saisie est déjà en cours pour le titre ou la description, on ne fait rien.
    if (this.isTitleTyping || this.isDescriptionTyping) {
      return;
    }

    let randomIndex: number;
    // Trouve un nouvel index aléatoire qui est différent du dernier index utilisé.
    do {
      randomIndex = Math.floor(Math.random() * this.titleList.length);
    } while (randomIndex === this.lastRandomIndex);

    this.lastRandomIndex = randomIndex;

    // Décide aléatoirement s'il faut mettre à jour le titre ou la description.
    const updateTitle = Math.random() < 0.5;

    if (updateTitle) {
      this.titleKey = this.titleList[randomIndex];
      // Déclenche l'animation de saisie pour le titre.
      await this.triggerTyping(
        this.titleEl.nativeElement,
        this.titleKey,
        'title'
      );
    } else {
      this.descriptionKey = this.descriptionList[randomIndex];
      // Déclenche l'animation de saisie pour la description.
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
  async typeText(element: HTMLElement, text: string) {
    // Récupère ou crée l'élément curseur.
    let cursor = element.querySelector('.cursor') as HTMLElement | null;
    if (!cursor) {
      cursor = document.createElement('span');
      cursor.classList.add('cursor');
      cursor.innerText = '|';
    }

    // Efface tous les nœuds enfants de l'élément (y compris l'ancien texte) avant d'ajouter le curseur.
    // Cela garantit que seul le nouveau texte et le curseur sont présents.
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    // Assure que le curseur est toujours à la fin de l'élément.
    element.appendChild(cursor);

    // Boucle pour ajouter chaque caractère un par un.
    for (let i = 0; i < text.length; i++) {
      const char = document.createTextNode(text[i]);
      // Insère le caractère avant le curseur.
      element.insertBefore(char, cursor);
      // Délai aléatoire pour simuler une saisie naturelle.
      const delay = Math.floor(Math.random() * (60 - 20 + 1)) + 20; // Délai entre 20 et 60 ms
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
