import ninaImage from '../assets/projects/nina-carducci.webp'
import kasaImage from '../assets/projects/kasa.webp'
import grimoireImage from '../assets/projects/mon-vieux-grimoire.webp'

const projects = [
  {
    title: 'Nina Carducci',
    category: 'Qualité web',
    image: ninaImage,
    github: 'https://github.com/anthony-lefloch/Projet-4-Nina-Carducci',
    technologies: ['HTML', 'CSS', 'SEO', 'Accessibilité', 'Lighthouse', 'WAVE'],
    description:
      'Optimisation d’un site web de photographe : performances, référencement naturel (SEO) et accessibilité numérique.',
    context:
      'Le projet consistait à analyser et améliorer le site web existant d’une photographe afin d’optimiser ses performances, son référencement naturel et son accessibilité.',
    objectives: [
      'Améliorer les performances du site',
      'Optimiser le référencement naturel (SEO)',
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
    results:
      'Filtres de la galerie et navigation du carrousel corrigés. Images optimisées, référencement naturel et accessibilité du site améliorés.',
    improvements:
      'Continuer à surveiller les performances et l’accessibilité après les évolutions futures du site.',
  },
  {
    title: 'Kasa',
    category: 'Front-end',
    image: kasaImage,
    github: 'https://github.com/anthony-lefloch/kasa',
    technologies: ['React', 'React Router', 'Sass'],
    description:
      'Développement d’une application web de location immobilière avec React, React Router, composants réutilisables et interface responsive.',
    context:
      'Le projet consistait à développer l’interface d’une application web de location immobilière à partir d’une maquette, en utilisant React pour organiser les composants et React Router pour gérer la navigation.',
    objectives: [
      'Développer l’application avec React',
      'Mettre en place une navigation avec React Router',
      'Créer des composants réutilisables',
      'Adapter l’interface aux différentes tailles d’écran',
    ],
    skills: [
      'Développement front-end avec React',
      'Composants et props',
      'Navigation avec React Router',
      'Styles avec Sass',
      'Responsive design',
    ],
    results:
      'Application React responsive avec navigation via React Router, affichage des logements depuis un fichier JSON et gestion des pages d’erreur 404.',
    improvements:
      'Améliorer encore la gestion des états et prévoir des tests automatisés sur les composants principaux.',
  },
  {
    title: 'Mon Vieux Grimoire',
    category: 'Back-end',
    image: grimoireImage,
    github: 'https://github.com/anthony-lefloch/projet-6-mon-vieux-grimoire',
    technologies: ['Node.js', 'Express', 'MongoDB', 'API REST'],
    description:
      'Développement d’une API REST avec Node.js, Express et MongoDB pour un site de notation de livres, avec authentification et opérations CRUD sécurisées.',
    context:
      'Le projet consistait à développer le back-end d’un site de notation de livres, en créant une API REST permettant aux utilisateurs de gérer et noter des livres, avec une authentification et un stockage des données dans MongoDB.',
    objectives: [
      'Créer une API REST avec Node.js et Express',
      'Mettre en place l’authentification des utilisateurs',
      'Gérer les opérations CRUD',
      'Sécuriser les routes de l’API',
      'Stocker les données dans MongoDB',
    ],
    skills: [
      'Développement back-end avec Node.js',
      'Création d’API REST avec Express',
      'Gestion des données avec MongoDB',
      'Authentification des utilisateurs',
      'Opérations CRUD sécurisées',
      'Gestion des images',
    ],
    results:
      'Développement d’une API REST permettant la gestion des livres, l’attribution de notes et le calcul automatique des moyennes. Mise en place d’une authentification JWT et stockage des données dans MongoDB. Fonctionnement des routes API vérifié avec Postman.',
    improvements:
      'Ajouter davantage de tests automatisés et renforcer encore la gestion des erreurs côté serveur.',
  },
]

export default projects