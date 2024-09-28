# Les Créations de Thynes - Mon Univers Créatif

Bienvenue dans l'univers créatif de **Thynes**, une plateforme en ligne dédiée à la présentation de créations artisanales uniques. Ce site, développé avec **React**, **Vite**, et **Tailwind CSS**, reflète une passion profonde pour l'artisanat, que ce soit à travers le crochet, le tricot, ou d'autres œuvres faites à la main avec soin.

## Table des matières
1. [Description](#description)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies Utilisées](#technologies-utilisées)
4. [Installation](#installation)
5. [Configuration EmailJS](#configuration-emailjs)
6. [Usage](#usage)
7. [Contributions](#contributions)
8. [Auteur](#auteur)
9. [Licence](#licence)

---

## Description

Les Créations de Thynes est un site vitrine conçu pour mettre en valeur des créations artisanales faites main, allant du crochet au tricot, en passant par la couture. Chaque pièce raconte une histoire, et ce site permet aux utilisateurs de découvrir, d'explorer et de se connecter directement avec le créateur.

Le site propose également un formulaire de contact, permettant aux visiteurs de laisser un message et d'interagir directement pour des demandes personnalisées ou des collaborations.

## Fonctionnalités

- **Catalogue des Créations** : Une galerie qui présente les dernières créations avec des descriptions détaillées.
- **Formulaire de Contact** : Envoyez un message directement via un formulaire interactif et simple à utiliser.
- **Responsive Design** : Le site est entièrement responsive, s'adaptant parfaitement aux appareils mobiles, tablettes, et ordinateurs.
- **Animations Douces** : Avec **Framer Motion**, les éléments de la page prennent vie grâce à des animations subtiles qui enrichissent l'expérience utilisateur.

## Technologies Utilisées

- **[React](https://reactjs.org/)** : Pour la construction d'une interface utilisateur dynamique et réactive.
- **[Vite](https://vitejs.dev/)** : Outil de développement ultra rapide pour la configuration du projet React.
- **[Tailwind CSS](https://tailwindcss.com/)** : Pour le design UI moderne et personnalisable.
- **[Framer Motion](https://www.framer.com/motion/)** : Ajout d'animations fluides et élégantes.
- **[EmailJS](https://www.emailjs.com/)** : Intégration pour l'envoi des messages via le formulaire de contact.

## Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 14 ou plus)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) ou [npm](https://www.npmjs.com/)

### Étapes d'installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/votre-utilisateur/creas-thynes.git
   cd creas-thynes
   ```

2. **Installer les dépendances :**

   ```bash
   yarn install
   ```

3. **Démarrer le serveur de développement :**

   ```bash
   yarn dev
   ```

## Configuration EmailJS

Pour configurer EmailJS, suivez ces étapes :

1. **Créer un compte sur EmailJS :**
   - Accédez au site [EmailJS](https://www.emailjs.com/).
   - Créez un compte ou connectez-vous.

2. **Configuration EmailJS**
Le formulaire de contact utilise EmailJS pour envoyer les informations soumises par les utilisateurs.

Étapes de configuration :
Créez un compte sur EmailJS.

Ajoutez un service, un template et récupérez votre User ID (Public Key).

Configurez le code dans le fichier Contact.jsx :

```javascript
const templateId = 'template_id'; // Remplacez par votre template ID
const serviceId = 'service_id'; // Remplacez par votre service ID
const userId = 'user_id'; // Remplacez par votre User ID
```

## Usage

Pour naviguer sur le site, voici quelques pages clés :

- Accueil : Présentation chaleureuse et introduction à l'univers créatif.
- Créations : Explorez les projets artisanaux récents.
- À propos : Découvrez l'histoire de Créas Thynes.
- Contact : Laissez un message via un formulaire simple et direct.

## Contributions

Les contributions sont les bienvenues ! Si vous souhaitez améliorer le site ou ajouter de nouvelles fonctionnalités, suivez ces étapes :

Forkez le projet
- Créez une branche de fonctionnalité (git checkout -b ma-fonctionnalite)
- Effectuez vos modifications
- Soumettez une pull request pour que vos changements soient examinés

## Auteur

Ce site a été conçu et développé par Mathieu Soussignan pour mettre en valeur les créations de Thynes.

- Email : contact.mathieu.soussignan@gmail.com
- Portfolio : https://mathieu-soussignan.com/
- LinkedIn : https://www.linkedin.com/in/mathieu-soussignan-007a07158/

---

## Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.


