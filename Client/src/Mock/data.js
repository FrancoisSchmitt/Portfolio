const USER_MAIN_DATA = [
      {
            _id: '6537b8ef043c62b24362c4b5',
            lastName: 'Schmitt',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/me.png',
            firstName: 'François',
            whoIam: [
                  //   "Suite à une reconversion du métier de l'aide à la personne, ",
                  "Après avoir fait une première formation en tant que développeur web, au sein de la Web@cadémie de Epitech, j'ai poursuivit une formation en tant que développeur front-end chez OpenClassrooms",
                  "J'aime créer des produits frontend solides et évolutifs avec d'excellentes expériences utilisateur.",
            ],
            jobs: 'Développeur Front-end',
            email: 'schmitt.francois.1699@gmail.com',
            __v: 0,
      },
];

const EXPERIMENT_DATA = [
      {
            _id: '653901dee5d2fe5590dee811',
            experimentsName: 'Bruker',
            experimentsJobs: 'Développeur web ',

            experimentsDescription: [
                  "Dans le cadre de ma formation à la Web@cademie de Epitech j'ai du réaliser une alternance, que j'ai effectuée chez Bruker pour une durée d'un an ",
                  "Durant cette alternance, j'ai du créer un produit qui permet de faire un suivi de réparation de machine IRM que l'on retrouve dans les hopitaux.",
            ],

            experimentsGoal: [
                  'Création de cahier des charges',
                  'Travail en équipe',
                  'Gérer un projet web de A à Z',
            ],
            experimentDateStart: 'Décembre 2019',
            experimentDateEnd: 'Décembre 2020',
            experimentStack: [
                  'PHP',
                  'MySQL',
                  'Sympfony',
                  'Laravel',
                  'HTML',
                  'CSS',
                  'Bootstrap',
                  'Javascript',
                  'Jquery',
            ],
            __v: 0,
      },
];
const COURSES_DATA = [
      {
            coursesName: 'OpenClassrooms ',
            coursesJobs: "Développeur d'application JavaScript React",
            coursesLvl: 'Bac+ 3/4',
            coursesDateStart: 'Novembre 2021',
            coursesDateEnd: 'Janvier 2023',
            coursesDescription: [
                  "La formation au sein d'OpenClassrooms, s'est réalisée 100% à distance, suivie par un mentor toutes les semaines pour suivre l'avancement des projets et revenir sur différents problèmes rencontrées.",
                  "Durant 14 mois, j'ai pu réaliser 13 projets, avec une soutenance à la fin de chaque projet. La formation est scindée en plusieurs parties, dans un premier temps on réalise des projets en HTML / CSS. Par la suite on aura quelques projets en JavaScript, et pour finir la plus grosse partie de la formation se terminera sur React.js.",
            ],
            coursesGoal: [
                  'Choisir une solution technique adaptée à votre client et travailler en mode Agile',
                  'Créer des sites webs avec HTML et CSS',
                  'Créer des applications web dynamiques avec Javascript et React',
                  'Communiquer avec le back-end de l’application grâce à une API',
                  'Mettre en œuvre des tests unitaires et d’intégration et débugger le code',
                  'Résoudre des problèmes techniques avec un langage de programmation et des algorithmes',
                  'Refactoriser du code pour qu’il soit plus moderne et optimisé',
            ],
            coursesStack: [
                  'HTML/CSS',
                  'JavaScript',
                  'React.js',
                  'Redux/Toolkit',
                  'Jest.js',
                  'Recharts.js',
                  'API REST',
                  'Figma',
                  'Sass',
            ],
            _id: '65390724f64416ea845d04d2',
            __v: 0,
      },
      {
            coursesName: 'Web@cademie By Epitech ',
            coursesJobs: 'intégrateur / développeur web',
            coursesLvl: 'Bac+ 2',
            coursesDateStart: 'Décembre 2018',
            coursesDateEnd: 'Décembre 2020',
            coursesDescription: [
                  "Dans le cadre de ma formation à la Web@cademie de Epitech, la première année à été une mutlitude de projets principalement axés sur du PHP. La deuxième année à été une alternance, suivie de projets d'étude tout au long de l'année.",
                  'Lors de la première année nous avons commencé par une "piscine", un système éducatif intensif pendant une durée de 3 semaines. Pendant ces 3 semaines, nous avions plusieurs petits exercices à réaliser par jour et un projet en groupe du vendredi au dimanche',
                  "J'ai réalisé mon alternance chez Bruker pour une durée d'un an. Durant cette alternance, j'ai du créer un produit qui permet de faire un suivi de réparation de machine IRM que l'on retrouve dans les hopitaux.",
            ],
            coursesGoal: [
                  'Analyser et comprendre des besoins exprimés dans un cahier des charges',
                  'Concevoir une architecture de site web',
                  'Développer un site web',
                  'Élaborer et mettre en œuvre un plan de test',
                  'Assurer le support technique et conduire la formation des utilisateurs',
                  'Assurer la veille technologique',
            ],
            coursesStack: ['HTML/CSS', 'PHP', 'Laravel', 'Symfony', 'MySQL'],
            _id: '65390721f64416ea845d04d0',
            __v: 0,
      },
];

const PROJECT_DATA = [
      {
            _id: 'b3d56c064a4a426082eb',
            title: 'Kasa',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/kasa/D_Home.png',
            allImage: [
                  'https://fs-portfolio.s3.eu-west-3.amazonaws.com/kasa/D_404.png',
                  'https://fs-portfolio.s3.eu-west-3.amazonaws.com/kasa/D_A-Propos.png',
                  'https://fs-portfolio.s3.eu-west-3.amazonaws.com/kasa/D_Fiche-Logement.png',
                  'https://fs-portfolio.s3.eu-west-3.amazonaws.com/kasa/D_Home.png',
                  'https://fs-portfolio.s3.eu-west-3.amazonaws.com/kasa/M_404.png',
                  'https://fs-portfolio.s3.eu-west-3.amazonaws.com/kasa/M_A-Propos.png',
                  'https://fs-portfolio.s3.eu-west-3.amazonaws.com/kasa/M_Fiche-Logement.png',
                  'https://fs-portfolio.s3.eu-west-3.amazonaws.com/kasa/M_Home.png',
            ],
            description:
                  "Création d'une application qui permet de visualisé tous les logements disponibles et une visualisation plus précises du logement lorsque l'on clic dessus ",
            stack: ['React.Js', 'react-router-dom'],
            goal: [
                  'Créer des composants avec React',
                  "Développer les routes d'une application web avec React Router\n",
                  'Initialiser une application web avec un framework\n',
            ],
            githubUrl:
                  'https://github.com/FrancoisSchmitt/SchmittFrancois_11_25052022',
            projectUrl: 'https://schmitt-francois-kasa.vercel.app/',
            __v: 0,
      },
      {
            _id: '77cd589970d74e75a42a',
            title: 'Booki',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/Booki.png',
            description:
                  "Création d'une application qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
            stack: ['HTML', 'CSS'],
            goal: [
                  'Intégrer du contenu conformément à une maquette',
                  'Implémenter une interface responsive',
            ],
            githubUrl:
                  'https://github.com/FrancoisSchmitt/schmitt_francois_2_Booki',
            projectUrl: 'https://schmitt-francois-booki.vercel.app/',
            __v: 0,
      },
      {
            _id: '648d0688aaeb4790aed5',
            title: 'Les petits plats',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/petits-plats.png',
            description:
                  "Création d'une application qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
            stack: ['HTML', 'CSS'],
            goal: [
                  'Intégrer du contenu conformément à une maquette',
                  'Implémenter une interface responsive',
            ],
            githubUrl:
                  'https://github.com/FrancoisSchmitt/schmitt_francois_2_Booki',
            projectUrl: 'https://les-petits-plats-francoisschmitt.vercel.app/',
            __v: 0,
      },
      {
            _id: '4fb2bf6c469c4eacacc8',
            title: 'OhMyFood',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/Homepage.png',
            description:
                  "Création d'une application qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
            stack: ['HTML', 'CSS'],
            goal: [
                  'Intégrer du contenu conformément à une maquette',
                  'Implémenter une interface responsive',
            ],
            githubUrl:
                  'https://github.com/FrancoisSchmitt/schmitt_francois_2_Booki',
            projectUrl: 'https://ohmyfood-francoisschmitt.vercel.app/',
            __v: 0,
      },
      {
            _id: '757b3b89c28349b6a54b',
            title: 'Sportsee',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/sportsee/SportSee.png',
            description:
                  "Création d'une application qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
            stack: ['HTML', 'CSS'],
            goal: [
                  'Intégrer du contenu conformément à une maquette',
                  'Implémenter une interface responsive',
            ],
            githubUrl:
                  'https://github.com/FrancoisSchmitt/schmitt_francois_2_Booki',
            projectUrl: 'https://sportsee-francoisschmitt.vercel.app/',
            __v: 0,
      },
      {
            _id: '987f0bdd38554a068b32',
            title: 'Photographer',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/Photographer/Index-2.png',
            description:
                  "Création d'une application qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
            stack: ['HTML', 'CSS'],
            goal: [
                  'Intégrer du contenu conformément à une maquette',
                  'Implémenter une interface responsive',
            ],
            githubUrl:
                  'https://github.com/FrancoisSchmitt/schmitt_francois_2_Booki',
            projectUrl: 'https://fisheye-francoisschmitt.vercel.app/',
            __v: 0,
      },
      {
            _id: '987f0bdd38554a068b32',
            title: 'GameOn',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/gameon/M-HomePage.png',
            description:
                  "Création d'une application qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
            stack: ['HTML', 'CSS'],
            goal: [
                  'Intégrer du contenu conformément à une maquette',
                  'Implémenter une interface responsive',
            ],
            githubUrl:
                  'https://github.com/FrancoisSchmitt/schmitt_francois_2_Booki',
            projectUrl: 'https://schmitt-francois-booki.vercel.app/',
            __v: 0,
      },
];

module.exports = {
      USER_MAIN_DATA,
      EXPERIMENT_DATA,
      COURSES_DATA,
      PROJECT_DATA,
};
