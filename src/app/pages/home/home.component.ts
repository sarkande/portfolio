import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  currentLang = 'fr';

  titleList = [
    'home.title1',
    'home.title2',
    'home.title3',
    'home.title4',
    'home.title5',
    'home.title6',
    'home.title7',
    'home.title8',
    'home.title9',
    'home.title10',
  ];
  descriptionList = [
    'home.description1',
    'home.description2',
    'home.description3',
    'home.description4',
    'home.description5',
    'home.description6',
    'home.description7',
    'home.description8',
    'home.description9',
    'home.description10',
  ];

  title = 'home.title1';
  description = 'home.description1';

  constructor(private langService: LanguageService) {
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
    });
    setInterval(() => {
      this.setRandomTitleAndDescription(Math.random() < 0.5);
    }, 3000); // Change title and description every 5 seconds
    this.setRandomTitleAndDescription();
  }

  setRandomTitleAndDescription(randomChoice: boolean = false) {
    const randomIndex = Math.floor(Math.random() * this.titleList.length);
    if (!randomChoice) this.title = this.titleList[randomIndex];
    else this.description = this.descriptionList[randomIndex];
  }
}
