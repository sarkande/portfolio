import { ProjectModel } from './project.model';

export const mockProjects: ProjectModel[] = [
    {
        "id": "bujinkan-neko",
        "title": "Bujinkan-Neko",
        "description": "Commande de site web pour un club d’arts martiaux à Fréjus. Front en ReactJS, back en PHP REST.",
        "startDate": "2022-02-01",
        "endDate": "2022-03-01",
        "technologies": [
            "React",
            "TypeScript",
            "REST"
        ],
        "tags": [
            "Front",
            "Formation"
        ],
        "category": "Projets récents",
        "thumbnailUrl": "project/bujinkan-neko/1.jpg",
        "gallery": [
            "project/bujinkan-neko/1.jpg"
        ],
        "githubUrl": null,
        "liveUrl": "https://bujinkan-neko.fr/",
        "role": "Développeur Fullstack",
        "isFeatured": true
    },
    {
        "id": "capture-trame",
        "title": "Capture trame",
        "description": "Décompilation de trames du jeu Dofus, exploitation en CSharp avec UI en Electron/ReactJS.",
        "startDate": "2022-04-01",
        "endDate": "2022-06-01",
        "technologies": [
            "CSharp",
            "React",
            "Electron",
            "Reverse Engineering"
        ],
        "tags": [
            "Electron",
            "Formation"
        ],
        "category": "Projets récents",
        "thumbnailUrl": "project/captureTrame/1.png",
        "gallery": [
            "project/captureTrame/1.png",
            "project/captureTrame/2.png",
            "project/captureTrame/3.png",
            "project/captureTrame/4.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur Fullstack",
        "isFeatured": false
    },
    {
        "id": "better-organizer",
        "title": "BetterOrganizer",
        "description": "Refonte du logiciel Organizer de Naio en CSharp, Electron, ReactJS et Node.js.",
        "startDate": "2022-07-01",
        "endDate": "2022-08-01",
        "technologies": [
            "React",
            "Electron",
            "Node.js",
            "CSharp",
            "Redux"
        ],
        "tags": [
            "Electron",
            "Personnel"
        ],
        "category": "Projets récents",
        "thumbnailUrl": "project/betterOrganizer/1.png",
        "gallery": [
            "project/betterOrganizer/1.png",
            "project/betterOrganizer/2.png",
            "project/betterOrganizer/3.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur Fullstack",
        "isFeatured": true
    },
    {
        "id": "modale",
        "title": "Modale HRNet",
        "description": "Composant ReactJS de modale publié sur NPM. Projet de fin de formation React.",
        "startDate": "2022-09-01",
        "endDate": "2022-10-01",
        "technologies": [
            "React",
            "Redux",
            "NPM"
        ],
        "tags": [
            "Component",
            "NPM"
        ],
        "category": "Formation ReactJS",
        "thumbnailUrl": "project/openclassrooms/projet14-modale/2.png",
        "gallery": [
            "project/openclassrooms/projet14-modale/1.png",
            "project/openclassrooms/projet14-modale/2.png",
            "project/openclassrooms/projet14-modale/3.png"
        ],
        "githubUrl": "https://github.com/sarkande/Projet_14",
        "liveUrl": null,
        "role": "Développeur Frontend",
        "isFeatured": false
    },
    {
        "id": "argentbank",
        "title": "ArgentBank",
        "description": "Application bancaire React avec Redux et gestion d'authentification via API REST.",
        "startDate": "2022-07-01",
        "endDate": "2022-08-01",
        "technologies": [
            "React",
            "Redux",
            "REST"
        ],
        "tags": [
            "Finance",
            "Formation"
        ],
        "category": "Formation ReactJS",
        "thumbnailUrl": "project/openclassrooms/projet13-argentbank/2.png",
        "gallery": [
            "project/openclassrooms/projet13-argentbank/1.png",
            "project/openclassrooms/projet13-argentbank/2.png",
            "project/openclassrooms/projet13-argentbank/3.png"
        ],
        "githubUrl": "https://github.com/sarkande/Projet_13",
        "liveUrl": null,
        "role": "Développeur Frontend",
        "isFeatured": false
    },
    {
        "id": "sportsee",
        "title": "SportSee",
        "description": "Dashboard sportif animé avec React et D3.js pour visualiser des performances.",
        "startDate": "2022-06-01",
        "endDate": "2022-07-01",
        "technologies": [
            "React",
            "D3JS",
            "REST"
        ],
        "tags": [
            "Graphique",
            "Sport"
        ],
        "category": "Formation ReactJS",
        "thumbnailUrl": "project/openclassrooms/projet12-sportsee/2.png",
        "gallery": [
            "project/openclassrooms/projet12-sportsee/1.png",
            "project/openclassrooms/projet12-sportsee/2.png",
            "project/openclassrooms/projet12-sportsee/3.png"
        ],
        "githubUrl": "https://github.com/sarkande/Projet_12",
        "liveUrl": null,
        "role": "Développeur Frontend",
        "isFeatured": false
    },
    {
        "id": "kasa",
        "title": "Kasa",
        "description": "Application de location immobilière avec ReactJS consommant une API REST.",
        "startDate": "2022-05-01",
        "endDate": "2022-06-01",
        "technologies": [
            "React",
            "REST"
        ],
        "tags": [
            "Immobilier",
            "Formation"
        ],
        "category": "Formation ReactJS",
        "thumbnailUrl": "project/openclassrooms/projet11-kasa/2.png",
        "gallery": [
            "project/openclassrooms/projet11-kasa/1.png",
            "project/openclassrooms/projet11-kasa/2.png",
            "project/openclassrooms/projet11-kasa/3.png"
        ],
        "githubUrl": "https://github.com/sarkande/Projet_11",
        "liveUrl": null,
        "role": "Développeur Frontend",
        "isFeatured": false
    },
    {
        "id": "maquettage",
        "title": "Learn@school (maquettage)",
        "description": "Création de maquettes Figma adaptatives pour une association d'aide scolaire.",
        "startDate": "2022-04-01",
        "endDate": "2022-04-30",
        "technologies": [
            "UI/UX",
            "Figma"
        ],
        "tags": [
            "Design",
            "Formation"
        ],
        "category": "Formation ReactJS",
        "thumbnailUrl": "project/openclassrooms/projet10-maquettage/3.png",
        "gallery": [
            "project/openclassrooms/projet10-maquettage/1.png",
            "project/openclassrooms/projet10-maquettage/2.png",
            "project/openclassrooms/projet10-maquettage/3.png",
            "project/openclassrooms/projet10-maquettage/4.png"
        ],
        "githubUrl": "https://github.com/sarkande/Projet_13",
        "liveUrl": null,
        "role": "UX Designer",
        "isFeatured": false
    },
    {
        "id": "billed",
        "title": "Billed app",
        "description": "Gestion de frais professionnels avec sécurité des tokens et Redux.",
        "startDate": "2022-03-01",
        "endDate": "2022-03-31",
        "technologies": [
            "JavaScript",
            "Jest"
        ],
        "tags": [
            "Tests",
            "Formation"
        ],
        "category": "Formation ReactJS",
        "thumbnailUrl": "project/openclassrooms/projet9-Billed/2.png",
        "gallery": [
            "project/openclassrooms/projet9-Billed/1.png",
            "project/openclassrooms/projet9-Billed/2.png",
            "project/openclassrooms/projet9-Billed/3.png",
            "project/openclassrooms/projet9-Billed/4.png"
        ],
        "githubUrl": "https://github.com/sarkande/Billed-app-FR-Front",
        "liveUrl": null,
        "role": "Développeur Frontend",
        "isFeatured": false
    },
    {
        "id": "les-petits-plats",
        "title": "Les petits plats",
        "description": "Application de recherche de recettes basée sur des filtres avancés. Réalisée en JS natif.",
        "startDate": "2022-02-01",
        "endDate": "2022-02-28",
        "technologies": [
            "JavaScript",
            "REST",
            "NPM"
        ],
        "tags": [
            "Recettes",
            "Recherche"
        ],
        "category": "Formation ReactJS",
        "thumbnailUrl": "project/openclassrooms/projet7-lespetitsplats/1.png",
        "gallery": [
            "project/openclassrooms/projet7-lespetitsplats/1.png",
            "project/openclassrooms/projet7-lespetitsplats/2.png",
            "project/openclassrooms/projet7-lespetitsplats/3.png",
            "project/openclassrooms/projet7-lespetitsplats/4.png"
        ],
        "githubUrl": "https://github.com/sarkande/projet07",
        "liveUrl": null,
        "role": "Développeur Frontend",
        "isFeatured": false
    },
    {
        "id": "fisheye",
        "title": "FishEye",
        "description": "Site de promotion pour artistes photographes, axé sur l'accessibilité.",
        "startDate": "2022-01-01",
        "endDate": "2022-01-31",
        "technologies": [
            "JavaScript",
            "Accessibility"
        ],
        "tags": [
            "Accessibilité",
            "Photographie"
        ],
        "category": "Formation ReactJS",
        "thumbnailUrl": "project/openclassrooms/projet6-fisheye/1.png",
        "gallery": [
            "project/openclassrooms/projet6-fisheye/1.png",
            "project/openclassrooms/projet6-fisheye/2.png"
        ],
        "githubUrl": "https://github.com/sarkande/Front-End-Fisheye",
        "liveUrl": null,
        "role": "Développeur Frontend",
        "isFeatured": false
    },
    {
        "id": "gameon",
        "title": "GameOn",
        "description": "Validation de formulaires complexes via des regex sur un site de gaming.",
        "startDate": "2021-12-01",
        "endDate": "2021-12-31",
        "technologies": [
            "JavaScript",
            "Regex"
        ],
        "tags": [
            "Formulaire",
            "Validation"
        ],
        "category": "Formation ReactJS",
        "thumbnailUrl": "project/openclassrooms/projet4-gameon/1.png",
        "gallery": [
            "project/openclassrooms/projet4-gameon/1.png",
            "project/openclassrooms/projet4-gameon/2.png"
        ],
        "githubUrl": "https://github.com/sarkande/GameOn-website-FR",
        "liveUrl": null,
        "role": "Développeur Frontend",
        "isFeatured": false
    },
    {
        "id": "betterorganizer",
        "title": "BetterOrganizer",
        "description": "Projet importé automatiquement : BetterOrganizer",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "React",
            "Electron",
            "Node.js",
            "CSharp",
            "Redux"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/betterOrganizer/1.png",
        "gallery": [
            "project/betterOrganizer/1.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "ohmyfood",
        "title": "OhMyFood",
        "description": "Projet importé automatiquement : OhMyFood",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "HTML5",
            "Sass"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/openclassrooms/projet3-ohmyfood/5.png",
        "gallery": [
            "project/openclassrooms/projet3-ohmyfood/5.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "booki",
        "title": "Booki",
        "description": "Projet importé automatiquement : Booki",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "HTML5",
            "CSS3"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/openclassrooms/projet2-booki/1.png",
        "gallery": [
            "project/openclassrooms/projet2-booki/1.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "foundry-vtt-naheulbeuk",
        "title": "Foundry VTT Naheulbeuk",
        "description": "Projet importé automatiquement : Foundry VTT Naheulbeuk",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "JavaScript",
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/naheulbeuk/1.png",
        "gallery": [
            "project/naheulbeuk/1.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "talents-affinity",
        "title": "Talents-Affinity",
        "description": "Projet importé automatiquement : Talents-Affinity",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "AngularJS",
            "RubyOnRails",
            "Bash"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/talents-affinity/3.png",
        "gallery": [
            "project/talents-affinity/3.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "site-angularjs-rubyonrails-goldrush",
        "title": "Site AngularJS/RubyOnRails Goldrush",
        "description": "Projet importé automatiquement : Site AngularJS/RubyOnRails Goldrush",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "AngularJS",
            "RubyOnRails"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/goldrush.png",
        "gallery": [
            "project/goldrush.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "orcwar",
        "title": "OrcWar",
        "description": "Projet importé automatiquement : OrcWar",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "Unity",
            "CSharp",
            "Android"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/orcwar/2.png",
        "gallery": [
            "project/orcwar/2.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "jonquille-sportive-reignier",
        "title": "Jonquille Sportive Reignier",
        "description": "Projet importé automatiquement : Jonquille Sportive Reignier",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "PHP"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/jonquille/1.png",
        "gallery": [
            "project/jonquille/1.png",
            "project/jonquille/2.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "bujinkan-kanji",
        "title": "Bujinkan-kanji",
        "description": "Projet importé automatiquement : Bujinkan-kanji",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "WordPress",
            "PHP"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/bujinkan-kanji.png",
        "gallery": [
            "project/bujinkan-kanji.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "rpg-3d-unity",
        "title": "RPG 3D Unity",
        "description": "Projet importé automatiquement : RPG 3D Unity",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "Unity",
            "CSharp",
            "Autodesk Maya"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/rpg3d/1.png",
        "gallery": [
            "project/rpg3d/1.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "rpg-tactical-3d-unity",
        "title": "RPG tactical 3D Unity",
        "description": "Projet importé automatiquement : RPG tactical 3D Unity",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "Unity",
            "CSharp",
            "Autodesk Maya"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/tactical/1.png",
        "gallery": [
            "project/tactical/1.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "android-unity",
        "title": "android Unity",
        "description": "Projet importé automatiquement : android Unity",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "Unity",
            "CSharp",
            "Android"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/android/1.png",
        "gallery": [
            "project/android/1.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "ocr-discord",
        "title": "OCR Discord",
        "description": "Projet importé automatiquement : OCR Discord",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "JavaScript",
            "API Google"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/OCR_discord/1.png",
        "gallery": [
            "project/OCR_discord/1.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "ocr-dofus",
        "title": "OCR Dofus",
        "description": "Projet importé automatiquement : OCR Dofus",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "JavaScript",
            "NeutralinoJS",
            "Tesseract"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/OCR_app/1.png",
        "gallery": [
            "project/OCR_app/1.png",
            "project/OCR_app/2.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "navigateur-web-simplifié",
        "title": "Navigateur web simplifié",
        "description": "Projet importé automatiquement : Navigateur web simplifié",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "JavaScript",
            "NeutralinoJS"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/mini/2.png",
        "gallery": [
            "project/mini/1.png",
            "project/mini/2.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "lecteur-multimédia-wpf",
        "title": "Lecteur multimédia wpf",
        "description": "Projet importé automatiquement : Lecteur multimédia wpf",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "WPF",
            "CSharp"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "project/PFAudio.png",
        "gallery": [
            "project/PFAudio.png"
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "wakeonlan-php",
        "title": "WakeOnLan PHP",
        "description": "Projet importé automatiquement : WakeOnLan PHP",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "PHP"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "",
        "gallery": [
            ""
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "fnac-php",
        "title": "Fnac PHP",
        "description": "Projet importé automatiquement : Fnac PHP",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "PHP"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "",
        "gallery": [
            ""
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "bloc-notes-c",
        "title": "Bloc notes C++",
        "description": "Projet importé automatiquement : Bloc notes C++",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "C++",
            "Qt"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "",
        "gallery": [
            ""
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "bot-discord-parsing",
        "title": "Bot discord parsing",
        "description": "Projet importé automatiquement : Bot discord parsing",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "JavaScript"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "",
        "gallery": [
            ""
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    },
    {
        "id": "logiciel-de-chat-en-réseau-winform",
        "title": "Logiciel de chat en réseau winform",
        "description": "Projet importé automatiquement : Logiciel de chat en réseau winform",
        "startDate": "2022-01-01",
        "endDate": null,
        "technologies": [
            "WinForm",
            "CSharp"
        ],
        "tags": [
            "AutoImport"
        ],
        "category": "Import React",
        "thumbnailUrl": "",
        "gallery": [
            ""
        ],
        "githubUrl": null,
        "liveUrl": null,
        "role": "Développeur",
        "isFeatured": false
    }
];