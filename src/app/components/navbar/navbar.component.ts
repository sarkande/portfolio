import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LanguageService } from '../../services/language.service'; // Chemin selon ton arborescence
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, RouterModule, TranslateModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentLang = 'fr';

  links = [
    { name: 'home', path: '' },
    { name: 'resume', path: 'resume' },
    { name: 'projects', path: 'projects' },
    { name: 'about', path: 'about' },
  ];

  socials = [
    { name: 'GitHub', icon: 'github.svg', url: 'https://github.com/sarkande' },
    {
      name: 'GitLab',
      icon: 'gitlab.svg',
      url: 'https://gitlab.com/aperezgo74',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin.svg',
      url: 'https://www.linkedin.com/in/allan-perez-gonzalez/',
    },
  ];

  constructor(private langService: LanguageService, private router: Router) {
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  switchLang(lang: string) {
    this.router.navigate(['/', lang]);
  }
}
