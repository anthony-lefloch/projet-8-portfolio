import ninaImage from '../assets/projects/nina-carducci.webp'
import kasaImage from '../assets/projects/kasa.webp'
import grimoireImage from '../assets/projects/mon-vieux-grimoire.webp'

const projects = [
  {
    title: 'Nina Carducci',
    category: 'Qualité web',
    image: ninaImage,
    technologies: ['HTML', 'CSS', 'SEO', 'Accessibilité', 'Lighthouse', 'WAVE'],
    description:
      'Optimisation des performances, du référencement et de l’accessibilité du site d’une photographe.',
    context:
      'Le projet consistait à analyser puis améliorer un site existant afin d’optimiser ses performances, son référencement naturel et son accessibilité.',
    objectives: [
      'Améliorer les performances du site',
      'Optimiser le SEO',
      'Corriger les problèmes d’accessibilité',
      'Vérifier les résultats avec des outils d’audit',
    ],
    skills: [
      'Analyse avec Chrome DevTools',
      'Optimisation des images et du chargement',
      'SEO technique',
      'Accessibilité numérique',
      'Audits Lighthouse et WAVE',
    ],
    improvements:
      'Continuer à surveiller les performances et l’accessibilité après les évolutions futures du site.',
  },
  {
    title: 'Kasa',
    category: 'Front-end',
    image: kasaImage,
    technologies: ['React', 'React Router', 'Sass'],
    description:
      'Développement d’une application immobilière avec React, composants réutilisables et navigation dynamique.',
    context:
      'Le projet consistait à développer l’interface d’une plateforme de location immobilière à partir d’une maquette.',
    objectives: [
      'Créer l’application avec React',
      'Mettre en place une navigation entre les pages',
      'Créer des composants réutilisables',
      'Adapter l’interface aux différentes tailles d’écran',
    ],
    skills: [
      'React',
      'Composants et props',
      'React Router',
      'Sass',
      'Responsive design',
    ],
    improvements:
      'Améliorer encore la gestion des états et prévoir des tests automatisés sur les composants principaux.',
  },
  {
    title: 'Mon Vieux Grimoire',
    category: 'Back-end',
    image: grimoireImage,
    technologies: ['Node.js', 'Express', 'MongoDB', 'API'],
    description:
      'Création du back-end d’un site de notation de livres avec authentification et opérations CRUD sécurisées.',
    context:
      'Le projet consistait à développer l’API et la logique serveur d’un site permettant aux utilisateurs de gérer et noter des livres.',
    objectives: [
      'Créer une API REST',
      'Mettre en place l’authentification',
      'Gérer les opérations CRUD',
      'Sécuriser les routes',
      'Stocker les données dans MongoDB',
    ],
    skills: [
      'Node.js',
      'Express',
      'MongoDB',
      'Authentification',
      'CRUD sécurisé',
      'Gestion des images',
    ],
    improvements:
      'Ajouter davantage de tests automatisés et renforcer encore la gestion des erreurs côté serveur.',
  },
]

export default projects