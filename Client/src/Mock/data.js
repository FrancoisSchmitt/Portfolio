const USER_MAIN_DATA = [
      {
            _id: '6537b8ef043c62b24362c4b5',
            lastName: 'Schmitt',
        image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/me.png',
            firstName: 'François',
            whoIam: [
                  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis et iure ducimus a qui ad laudantium! Quaerat, ipsa? Laborum doloremque atque qui sunt blanditiis dolor libero earum facere asperiores cumque.',
                  "Après avoir fait une première formation en tant que développeur web, au sein de la Web@cadémie de Epitech, j'ai poursuivit une formation en tant que développeur front-end ",
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
                  "Dans le cadre de ma formation à la Web@cademie de Epitech j'ai du réaliser une alternance, que j'ai effectué chez Bruker pour une durée d'un an ",
                  "Durant cette alternance, j'ai du créer un produit qui permet de faire un suivis de réparation de machine IRM que l'on retrouve dans les hopitaux.",
            ],

            experimentsGoal: [
                  'Création de cahier des charges',
                  'Travail en équipe',
            ],
            experimentDateStart: 'Décembre 2019',
            experimentDateEnd: 'Décembre 2020',
            experimentStack: ['PHP', 'MySQL'],
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
                  "La formation au sein d'OpenClassrooms, c'est réaliser 100% à distance, suivis par un mentor toutes les semaines pour suivre l'avancement des projets et revenir sur différents problèmes rencontrées.",
                  "Durant 14 mois, j'ai pu réaliser 13 projects, avec une soutenance a la fin de chaque projet. La formation est scindé en plusieurs partie, dans un premier temps on realise des projets en HTML / CSS. Par la suite on aura quelques projets en JavaScript, et pour finir la plus grosses partie de la formation ce terminera sur React.js.",
            ],
            coursesGoal: [
                  'Choisir une solution technique adaptée à votre client et travailler en mode Agile',
                  'Créer des sites webs avec HTML et CSS',
                  'Créer des applications web dynamiques avec Javascript et React',
                  'Communiquer avec le back-end de l’application grâce à une API',
                  'Mettre en œuvre des test unitaires et d’intégration et débugger le code',
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
                  'La formation au sein de la Web@cademie, à commencé par une piscine à la rentrée, et des projets seul, et en groupe tout au long de la première année.',
                  "La piscine, nous a permis de nous surpasser, sur une durée de 3 semaines 7 jours sur 7 de 9 heures à 23 heures, la semaine une multitude d'exercices à réaliser, et le week-end un projet de groupes était à faire.",
                  "La deuxième année, on a réalisé une alternance, avec en parrallèles des projets d'école et un projet de fin d'année en groupe.",
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
            _id: '652d5565524bbfeaed52e36a',
            title: 'Kasa',
            image: 'http://localhost:3080/images/kasa.png1697469797630.png',
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
            _id: '6536847f2f99e7f318e35027',
            title: 'Booki',
          image: 'https://fs-portfolio.s3.eu-west-3.amazonaws.com/Booki.png',
            description:
                  "Création d'une application qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
            stack: ['HTML', 'CSS'],
            goal: [
                  'Intégrer du contenu conformément à une maquette',
                  'Implémenter une interface responsive\n',
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
