const USER_MAIN_DATA = [
      {
            id: '6537b8ef043c62b24362c4b5',
            lastName: 'Schmitt',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/me.png',
            firstName: 'François',
            whoIam: [
                  //   "Suite à une reconversion du métier de l'aide à la personne, ",
                  "Après avoir fait une première formation en tant que développeur web, au sein de la Web@cadémie de Epitech, j'ai poursuivi une formation en tant que développeur front-end chez OpenClassrooms",
                  "J'aime créer des produits frontend solides et évolutifs avec d'excellentes expériences utilisateur.",
            ],
            jobs: 'Développeur Front-end',
            email: 'schmitt.francois.1699@gmail.com',
            __v: 0,
      },
];

const EXPERIMENT_DATA = [
      {
            id: '653901dee5d2fe5590dee811',
            experimentsName: 'Bruker',
            experiment: 'Alternance',
            experimentsJobs: 'Développeur web',

            experimentsDescription: [
                  "Dans le cadre de ma formation à la Web@cademie de Epitech j'ai du réaliser une alternance, que j'ai effectuée chez Bruker pour une durée d'un an.",
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
            courses: 'Formation',
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
            id: '65390724f64416ea845d04d2',
            __v: 0,
      },
      {
            coursesName: 'Web@cademie By Epitech ',
            courses: 'Formation',
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
            id: '65390721f64416ea845d04d0',
            __v: 0,
      },
];

const PROJECT_DATA = [
      {
            id: '648d0688aaeb4790aed5',
            title: 'Les petits plats',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/petits-plats.png',
            detail: [
                  {
                        title: 'Description',
                        description:
                              "Les petits plats est une application web qui est similaire aux site Marmiton. il y'a une quantité de recette à afficher, l'ajout de différents « tag » et d'une barre de recherche",
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/petits-plat/Desktop+-+3.png',
                  },
                  {
                        title: 'Procédure',
                        description:
                              "Pour ce projet j'ai éxaminer dans un premier temps quel était les différentes fonctionnalités a réaliser afin de mieux comprendre la problématique. J'ai ensuite entamé l'affichage de toutes les données qui ont été mock, une fois terminer je me suis penché sur la création de l'algorithme afin de faire la recherche par « tag » ou par une recherche basique ou les deux simultanément.",
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/petits-plat/Desktop+-+1.png',
                  },
                  {
                        title: 'Objectifs',
                        description: [
                              "Les différents objéctifs ont été d'analyser un problème informatique et de développer un algorithme pour résoudre un problème ",
                        ],
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/petits-plat/Desktop+-+4.png',
                  },
                  {
                        title: 'Technologie',
                        description: [
                              'Les téchnologies utilisées ont été JavaScript Vanilla, CSS',
                        ],
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/petits-plat/Desktop+-+5.png',
                  },
            ],
            goal: [
                  'Analyser un problème informatique',
                  'Développer un algorithme pour résoudre un problème',
            ],
            githubUrl:
                  'https://github.com/FrancoisSchmitt/Schmitt_Francois_7_Les_Petits_Plats_08052022',
            projectUrl: 'https://les-petits-plats-francoisschmitt.vercel.app/',
            __v: 0,
      },
      {
            id: '757b3b89c28349b6a54b',
            title: 'Sportsee',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/sportsee/SportSee.png',
            detail: [
                  {
                        title: 'Description',
                        description:
                              'SportSee est une application web permettant au sportif de suivre leur évolutions grâce à des éléments graphique, les données ont été transmisses par une API, et des données mock il fallait géré les deux cas.',
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/sportsee/SportSee.png',
                  },
                  {
                        title: 'Procédure',
                        description:
                              "Pour ce projet j'ai éxaminer dans un premier temps quel était les différentes fonctionnalités. j'ai ensuite commencé par réaliser le site avec les données mock en les affichants les données sur les différents éléments graphiques et j'ai fini par implémenter les données via l'API sur une branche distinct",
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/sportsee/sportSee-1.png',
                  },
                  {
                        title: 'Objectifs',
                        description:
                              "Les différents objéctifs ont été d'assurer la qualité des données d'une application et de Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript",
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/sportsee/sportSee1.png',
                  },
                  {
                        title: 'Technologie',
                        description:
                              'les différentes technologie utilisées ont été React.Js, Recharts.Js, CSS, API / Mock et Node.Js',
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/sportsee/sportsee3.png',
                  },
            ],

            githubUrl:
                  'https://github.com/FrancoisSchmitt/SchmittFrancois_12_22062022',
            projectUrl: 'https://sportsee-francoisschmitt.vercel.app/',
            __v: 0,
      },
      {
            id: '77cd589970d74e75a42a',
            title: 'Booki',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/Booki.png',
            detail: [
                  {
                        title: 'Description',
                        description:
                              "Reproduction d'une maquette, pour trouver un hébergement de vacances",
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/booki/Booki.png',
                  },
                  {
                        title: 'Procédure',
                        description:
                              "Examiner les différents éléments graphiques pour mettre en place l'architecture en HTML, et réaliser le style par compartiment",
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/booki/Mobile.png',
                  },
                  {
                        title: 'Objectifs',
                        description:
                              "L'objectif du projets et d'intégrer du contenu conformément à une maquette et d'implémenter une interface responsive",
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/booki/Tablette.png',
                  },
                  {
                        title: 'Technologie',
                        description:
                              'Les différents téchnologies utilisées ont été HTML et CSS',
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/kasa/D_Home.png',
                  },
            ],
            githubUrl:
                  'https://github.com/FrancoisSchmitt/schmitt_francois_2_Booki',
            projectUrl: 'https://schmitt-francois-booki.vercel.app/',
            __v: 0,
      },
      {
            id: '4fb2bf6c469c4eacacc8',
            title: 'OhMyFood',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/Homepage.png',
            detail: [
                  {
                        title: 'Description',
                        description:
                              "OhMyFood est une application web qui est similaire aux site Uber Eats. Des restaurants mettent à disposition des plats que l'on peux commander.",
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/ohmyfood/Menu+La+palette+du+gout.png',
                  },
                  {
                        title: 'Procédure',
                        description:
                              'Dans un premier temps, je me suis renseigné sur le projets, les différentes fonctionnalités à réaliser,  prendre connaissance de la charte graphique afin de s’organiser plus facilement sur la conception du projet. ',
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/ohmyfood/Homepage-1.png',
                  },
                  {
                        title: 'Objectifs',
                        description:
                              "Les objectifs de ce projet ont été de mettre en œuvre des effets CSS graphiques avancés, d'assurer la cohérence graphique d'un site web, de mettre en place une structure de navigation pour un site web.",
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/ohmyfood/Menu+-+%C3%80+la+fran%C3%A7aise.png',
                  },
                  {
                        title: 'Technologie',
                        description:
                              'Les technologies utilisées ont été HTML et Sass',
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/kasa/D_Home.png',
                  },
            ],

            githubUrl: 'https://github.com/FrancoisSchmitt/OhmyFood',
            projectUrl: 'https://ohmyfood-francoisschmitt.vercel.app/',
            __v: 0,
      },
      {
            id: '4fb2bf6c469c4eacac780',
            title: 'Kasa',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/kasa/D_Home.png',
            detail: [
                  {
                        title: 'Description',
                        description:
                              ' Kasa est une application web dédié au agence de location de logement. Une liste de logement est affiche, lorsque l’on clique sur un logement qui nous intéresse, on sera redirigiez sur le logement choisi avec une quantité de ressource supplémentaire.',
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/ohmyfood/Menu+La+palette+du+gout.png',
                  },
                  {
                        title: 'Procédure',
                        description:
                              'Dans un premier temps, je me suis renseigné sur le projets, les différentes fonctionnalités à réaliser,  prendre connaissance de la charte graphique afin de s’organiser plus facilement sur la conception du projets. ',
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/ohmyfood/Homepage-1.png',
                  },
                  {
                        title: 'Objectifs',
                        description:
                              "Les objectifs de ce projets ont été la création d’un carousel et d'assuré un système de routes ",
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/ohmyfood/Menu+-+%C3%80+la+fran%C3%A7aise.png',
                  },
                  {
                        title: 'Technologie',
                        description:
                              'Les technologies utilisées ont été React.Js et CSS',
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/kasa/D_Home.png',
                  },
            ],

            githubUrl: 'https://github.com/FrancoisSchmitt/OhmyFood',
            projectUrl: 'https://ohmyfood-francoisschmitt.vercel.app/',
            __v: 0,
      },

      {
            id: '987f0bdd38554a068b32',
            title: 'FishEye',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/Photographer/Index-2.png',
            detail: [
                  {
                        title: 'Description',
                        description:
                              "FishEye est une application web dédié au photographe, pour qu'ils partagent leur plus belles images ",
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/Photographer/photographer-page.png',
                  },
                  {
                        title: 'Procédure',
                        description:
                              'Dans un premier temps, je me suis renseigné sur le projets, les différentes fonctionnalités à réaliser,  prendre connaissance de la charte graphique afin de s’organiser plus facilement sur la conception du projets. ',
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/Photographer/form-modal.png',
                  },
                  {
                        title: 'Objectifs',
                        description:
                              "Les différents objectifs ont été d'assurer l'accessibilité d'un site web, développeur une application web modulaire et de gérer les évènements d'un site avec JavaScript",
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/Photographer/component.png',
                  },
                  {
                        title: 'Technologie',
                        description:
                              'Les technologies utilisées ont été JavaScript et CSS',
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/Photographer/photographer-page.png',
                  },
            ],
            githubUrl:
                  'https://github.com/FrancoisSchmitt/Schmitt_Francois_6_Fisheye_03092022',
            projectUrl: 'https://fisheye-francoisschmitt.vercel.app/',
            __v: 0,
      },

      {
            id: 'cad17b7b479046ca965d',
            title: 'GameOn',
            image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/gameon/M-HomePage.png',
            detail: [
                  {
                        title: 'Description',
                        description:
                              "GameOn est une application web qui permet de présenté sont évènement, et d'avoir la possibilité de s'inscrire via un formulaire",
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/gameon/M-HomePage.png',
                  },
                  {
                        title: 'Procédure',
                        description:
                              'Dans un premier temps, je me suis renseigné sur le projets, les différentes fonctionnalités à réaliser,  prendre connaissance de la charte graphique afin de s’organiser plus facilement sur la conception du projets. ',
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/gameon/M-HomePage-ModalOpened.png',
                  },
                  {
                        title: 'Objectifs',
                        description:
                              'Les différents objectifs ont été de ce projet et de programmer en JavaScript et de réaliser un formulaire fonctionnel',
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/gameon/M-HomePage-ModalOpened-1.png',
                  },
                  {
                        title: 'Technologie',
                        description:
                              'Les technologies utilisées ont été HTML, CSS et JavaScript',
                        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/gameon/Homepage.png',
                  },
            ],
            githubUrl: 'https://github.com/FrancoisSchmitt/GameOn',
            projectUrl: 'https://francois-schmitt-game-on.vercel.app/#',
            __v: 0,
      },
];

module.exports = {
      USER_MAIN_DATA,
      EXPERIMENT_DATA,
      COURSES_DATA,
      PROJECT_DATA,
};
