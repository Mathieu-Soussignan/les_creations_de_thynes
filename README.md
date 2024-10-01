# Les Créations de Thyne - Mon Univers Créatif

Bienvenue dans l'univers créatif de **Thyne**, une plateforme en ligne dédiée à la présentation de créations artisanales uniques. Ce site, développé avec **React**, **Vite**, et **Tailwind CSS**, reflète une passion profonde pour l'artisanat, que ce soit à travers le crochet, le tricot, ou d'autres œuvres faites à la main avec soin.

## Table des matières

1. [Description](#description)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies Utilisées](#technologies-utilisées)
4. [Configuration EmailJS](#configuration-emailjs)
5. [Usage](#usage)
6. [Contributions](#contributions)
7. [Auteur](#auteur)
8. [Licence](#licence)

---

## Description

**Les Créations de Thyne** est un site vitrine conçu pour mettre en valeur des créations artisanales faites main, allant du crochet au tricot, en passant par la couture. Chaque pièce raconte une histoire, et ce site permet aux utilisateurs de découvrir, d'explorer et de se connecter directement avec le créateur.

Le site propose également un formulaire de contact, permettant aux visiteurs de laisser un message et d'interagir directement pour des demandes personnalisées ou des collaborations.

## Fonctionnalités

- **Catalogue des Créations** : Une galerie qui présente les dernières créations avec des descriptions détaillées.
- **Formulaire de Contact** : Envoyez un message directement via un formulaire interactif et simple à utiliser.
- **Responsive Design** : Le site est entièrement responsive, s'adaptant parfaitement aux appareils mobiles, tablettes, et ordinateurs.
- **Animations Douces** : Avec **Framer Motion**, les éléments de la page prennent vie grâce à des animations subtiles qui enrichissent l'expérience utilisateur.

## Technologies Utilisées

- **[React](https://reactjs.org/)** : Pour la construction d'une interface utilisateur dynamique et réactive.
- **[Vite](https://vitejs.dev/)** : Outil de développement ultra rapide pour la configuration du projet.
- **[Tailwind CSS](https://tailwindcss.com/)** : Pour un design modernisé et responsive avec des classes utilitaires.
- **[Framer Motion](https://www.framer.com/motion/)** : Pour les animations et transitions douces des éléments.
- **[React Router](https://reactrouter.com/)** : Pour la gestion de la navigation entre les pages.
- **[EmailJS](https://www.emailjs.com/)** : Pour permettre aux utilisateurs d'envoyer des emails via le formulaire de contact.

## Configuration EmailJS

Pour configurer EmailJS, suivez ces étapes :

1. Créer un compte sur EmailJS :

Accédez au site EmailJS. 2. Créez un compte ou connectez-vous. 3. Configuration EmailJS
Le formulaire de contact utilise EmailJS pour envoyer les informations soumises par les utilisateurs.

Créez un service et un template sur EmailJS. 4. Récupérez votre User ID (Public Key). 5. Configurez le code dans le fichier Contact.jsx :

```
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

Les contributions sont les bienvenues ! Si vous avez des suggestions pour améliorer le site, merci de soumettre une pull request.

## Auteur

Ce site a été conçu et développé par Mathieu Soussignan pour mettre en valeur les créations de Thyne.

- Email : contact.mathieu.soussignan@gmail.com
- Portfolio : https://mathieu-soussignan.com
- LinkedIn : https://www.linkedin.com/in/mathieu-soussignan/

## Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.
