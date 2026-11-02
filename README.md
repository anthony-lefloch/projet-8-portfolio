# Portfolio professionnel — Anthony Le Floch

## Présentation

Portfolio professionnel réalisé dans le cadre de ma formation **Développeur Web chez OpenClassrooms**.

En reconversion professionnelle, je me spécialise dans le développement web full-stack junior, avec un intérêt particulier pour le front-end et React.

Ce portfolio présente mon parcours, mes compétences et plusieurs projets réalisés pendant ma formation. Il a été conçu pour proposer une expérience claire, responsive et accessible aux recruteurs et aux visiteurs.

**Site en ligne :** https://projet-8-portfolio-vert.vercel.app/

## Technologies utilisées

- **Front-end :** HTML5, CSS3, JavaScript, React
- **Environnement de développement :** Vite
- **Styles :** Sass / SCSS
- **Versionnement :** Git et GitHub
- **Hébergement :** Vercel
- **Qualité web :** Lighthouse, WAVE et Chrome DevTools

## Fonctionnalités du portfolio

- Présentation professionnelle et parcours de reconversion
- Présentation des compétences techniques
- Trois projets de formation détaillés
- Fiches projets interactives avec accès au code GitHub
- Navigation responsive avec menu mobile
- Interface adaptée aux ordinateurs, tablettes et smartphones
- Navigation au clavier et bonnes pratiques d'accessibilité
- Optimisations pour les performances et le référencement naturel (SEO)
- Section Contact avec liens vers mes profils professionnels

## Projets présentés

### Nina Carducci — Optimisation et qualité web

Optimisation d'un site de photographe existant : performances, référencement naturel, accessibilité et correction de fonctionnalités.

**Technologies et outils :** HTML, CSS, Lighthouse, WAVE, Chrome DevTools.

[Consulter le dépôt GitHub](https://github.com/anthony-lefloch/Projet-4-Nina-Carducci)

### Kasa — Développement front-end

Développement d'une application web de location immobilière avec React, composants réutilisables, navigation entre les pages et interface responsive.

**Technologies :** React, React Router, Sass.

[Consulter le dépôt GitHub](https://github.com/anthony-lefloch/kasa)

### Mon Vieux Grimoire — Développement back-end

Développement d'une API REST pour un site de notation de livres, avec authentification JWT, gestion des données et opérations CRUD sécurisées.

**Technologies :** Node.js, Express, MongoDB.

[Consulter le dépôt GitHub](https://github.com/anthony-lefloch/projet-6-mon-vieux-grimoire)

## Installation et lancement en local

### Prérequis

Disposer de Node.js et npm, avec une version compatible avec le projet.

### Installation

Cloner le dépôt :

```bash
git clone https://github.com/anthony-lefloch/projet-8-portfolio.git
```

Accéder au dossier :

```bash
cd projet-8-portfolio
```

Installer les dépendances :

```bash
npm install
```

Démarrer le serveur de développement :

```bash
npm run dev
```

Ouvrir ensuite l'adresse locale indiquée dans le terminal.

### Autres commandes

Créer la version de production :

```bash
npm run build
```

Prévisualiser la version compilée :

```bash
npm run preview
```

Lancer l'analyse ESLint :

```bash
npm run lint
```

## Organisation du projet

Le projet repose sur une architecture React organisée en composants réutilisables.

- `src/components/` : composants de l'interface et sections du portfolio
- `src/assets/` : images et ressources visuelles
- `src/data/projects.js` : données des projets présentés
- `src/styles/main.scss` : styles et adaptations responsive
- `src/App.jsx` : assemblage des sections de l'application
- `src/main.jsx` : point d'entrée React et importation des styles
- `public/robots.txt` : directives d'exploration pour les moteurs de recherche

## Responsive, accessibilité et SEO

Le portfolio a été conçu pour être utilisable sur ordinateur, tablette et smartphone.

Une attention particulière a été portée aux éléments suivants :

- Structure HTML sémantique
- Navigation au clavier et focus visible
- Contrastes et lisibilité des contenus
- Alternatives textuelles des images
- Titres et métadonnées SEO
- Optimisation des images et du chargement
- Vérifications avec Lighthouse et WAVE

## Déploiement

Le portfolio est hébergé sur **Vercel**, à partir de son dépôt GitHub.

La branche `main` contient le code destiné à la publication. Les modifications envoyées sur cette branche peuvent être déployées automatiquement par Vercel.

**Portfolio public :** https://projet-8-portfolio-vert.vercel.app/

**Dépôt GitHub :** https://github.com/anthony-lefloch/projet-8-portfolio

## Auteur

**Anthony Le Floch**  
Développeur web full-stack junior

Projet réalisé dans le cadre de la formation Développeur Web — OpenClassrooms.