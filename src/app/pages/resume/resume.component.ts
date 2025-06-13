import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NgxTimelineEvent,
  NgxTimelineItemPosition,
  NgxTimelineModule,
} from '@frxjs/ngx-timeline';

// Définir une interface personnalisée qui étend NgxTimelineEvent
// pour inclure la propriété optionnelle 'endDate'.
export interface MyResumeTimelineEvent extends NgxTimelineEvent {
  endDate?: Date;
}

@Component({
  selector: 'app-resume',
  imports: [NgxTimelineModule, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  standalone: true,
})
export class ResumeComponent {
  // Utiliser l'interface personnalisée pour le tableau 'events'
  events: MyResumeTimelineEvent[] = [
    {
      timestamp: new Date('2025-11-01'),
      title: 'Mastère Expert en Ingénierie Logicielle – ISCOD (en cours)',
      description:
        'Validation prévue en novembre 2025. Formation RNCP niveau 7 (Bac+5/6) orientée projet : développement full-stack, architecture logicielle, DevOps, méthodes agiles, sécurité et gestion de projet. Suivie en alternance avec mise en pratique directe chez Pure Illusion.',
      itemPosition: NgxTimelineItemPosition.ON_RIGHT,
    },
    {
      timestamp: new Date('2025-10-01'),
      title: 'Passage du TOEIC – Score : XXX/990',
      description:
        'Score équivalent au niveau CECRL XX. Mise en valeur des compétences professionnelles en anglais, notamment en contexte IT et projet agile international.',
      itemPosition: NgxTimelineItemPosition.ON_RIGHT,
    },
    {
      timestamp: new Date('2025-06-01'),
      title: 'Refonte web & ERP Odoo – Bujinkan Kanji, Neko & GSI Automeca',
      description:
        "Modernisation des sites existants avec intégration d'ERP Odoo. Modules personnalisés : gestion des membres et des cours pour les associations d’arts martiaux, gestion des rendez-vous clients pour un garage automobile.",
      itemPosition: NgxTimelineItemPosition.ON_LEFT,
    },
    {
      timestamp: new Date('2024-05-01'),
      title: 'Création du site GSI Automeca – Angular',
      description:
        "Site vitrine pour un garage automobile avec prise de rendez-vous en ligne, responsive design, hébergement optimisé et interface d'administration.",
      itemPosition: NgxTimelineItemPosition.ON_LEFT,
    },
    {
      timestamp: new Date('2023-06-01'),
      title: 'Création du site Bujinkan Neko – Fréjus',
      description:
        'Site vitrine pour une association d’arts martiaux (ninjutsu) : mise en avant des cours, gestion des inscriptions et calendrier des événements.',
      itemPosition: NgxTimelineItemPosition.ON_LEFT,
    },
    {
      timestamp: new Date('2023-10-01'),
      endDate: new Date('2025-12-31'), // Ajout de la date de fin
      title: 'Développeur Odoo – Pure Illusion (Alternance)',
      description:
        'Développement back-end en Python/Odoo, front-end JS/SCSS/XML. Intégration d’Odoo sur des projets clients, gestion d’hébergement via Docker.',
      itemPosition: NgxTimelineItemPosition.ON_RIGHT,
    },
    {
      timestamp: new Date('2022-03-01'),
      title: 'Certification Développeur React JS – OpenClassrooms',
      description:
        'Certification professionnelle inscrite au RNCP (niveau Bac+3/4). Réalisation de 14 projets : React JS, HTML/CSS/SASS, gestion de projet agile.',
      itemPosition: NgxTimelineItemPosition.ON_RIGHT,
    },
    {
      timestamp: new Date('2022-03-01'),
      title: 'Développeur React JS – OpenClassrooms',
      description:
        'Contrat de professionnalisation axé sur la création d’applications React. Méthodologie agile, suivi client, versioning Git/GitHub.',
      itemPosition: NgxTimelineItemPosition.ON_LEFT,
    },
    {
      timestamp: new Date('2018-09-01'),
      endDate: new Date('2021-06-30'), // Ajout de la date de fin
      title: 'Licence 2 LEA Anglais/Japonais – Université Grenoble Alpes',
      description:
        '3 ans de cursus : une année de mise à niveau en japonais suivie de 2 années d’études en Langues Étrangères Appliquées (anglais/japonais).',
      itemPosition: NgxTimelineItemPosition.ON_RIGHT,
    },
    {
      timestamp: new Date('2016-05-01'),
      endDate: new Date('2016-09-30'), // Ajout de la date de fin
      title: 'Développeur AngularJS & RubyOnRails – FreshPigment',
      description:
        'Stage puis mission freelance. Développement d’une web app métier : AngularJS côté front, Ruby on Rails côté back.',
      itemPosition: NgxTimelineItemPosition.ON_LEFT,
    },
    {
      timestamp: new Date('2015-12-01'),
      title: 'Développeur PHP & Wordpress – Bujinkan-Kanji (Bénévolat)',
      description:
        'Migration du site Joomla vers Wordpress personnalisé pour une association de ninjutsu. Maintenance technique et graphique.',
      itemPosition: NgxTimelineItemPosition.ON_LEFT,
    },
    {
      timestamp: new Date('2015-06-01'),
      title: 'Développeur Unity 3D – OrcWarRTS (Freelance)',
      description:
        'Développement de fonctionnalités pour un jeu mobile temps réel Android/iOS : IA, équilibrage, gestion des assets.',
      itemPosition: NgxTimelineItemPosition.ON_LEFT,
    },
    {
      timestamp: new Date('2014-12-01'),
      title: 'Développeur PHP – Jonquille Sportive Reignier (Bénévolat)',
      description:
        'Création complète d’un site associatif en PHP/HTML/CSS pour un club de sport. Projet de validation de DUT.',
      itemPosition: NgxTimelineItemPosition.ON_LEFT,
    },
    {
      timestamp: new Date('2014-09-01'),
      endDate: new Date('2016-08-31'), // Ajout de la date de fin
      title: 'DUT Informatique – IUT Savoie Mont Blanc',
      description:
        'Formation diplômante Bac+2. Compétences en algorithmique, base de données, développement web, système UNIX, architecture matérielle.',
      itemPosition: NgxTimelineItemPosition.ON_RIGHT,
    },
    {
      timestamp: new Date('2014-07-01'),
      title: "BAC STI2D Mention Bien – Lycée de l'Albanais",
      description:
        'Spécialité Systèmes d’Information et Numérique. Mise en place de projets techniques en électronique et informatique.',
      itemPosition: NgxTimelineItemPosition.ON_RIGHT,
    },
    {
      timestamp: new Date('2008-10-01'),
      title: 'Professeur xHTML/CSS/PHP – Collège du Val des Usses (Bénévolat)',
      description:
        'Initiation des collégiens à la création de pages web statiques et dynamiques. Formation pédagogique adaptée aux jeunes publics.',
      itemPosition: NgxTimelineItemPosition.ON_LEFT,
    },
  ];

  // Méthode pour déterminer si un événement est "en cours"
  isEventEnCours(eventInfo: any): boolean {
    return (
      (eventInfo.title && eventInfo.title.includes('(en cours)')) ||
      (eventInfo.description && eventInfo.description.includes('en cours')) ||
      (eventInfo.description && eventInfo.description.includes('à ce jour'))
    );
  }
}
