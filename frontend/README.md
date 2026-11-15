# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
 # Hospital Management System

## 1. Présentation du projet

Hospital Management System est une application web de gestion des services d’un établissement hospitalier.

Elle permet :

- aux patients de consulter les informations de l’hôpital ;
- aux patients de créer un compte ;
- aux patients de se connecter ;
- aux patients de demander un rendez-vous médical ;
- aux visiteurs d’envoyer un message à l’administration ;
- aux administrateurs de gérer les médecins ;
- aux administrateurs de consulter et traiter les rendez-vous ;
- aux administrateurs de consulter les messages reçus ;
- aux administrateurs d’ajouter de nouveaux administrateurs et médecins.

L’application sépare clairement l’espace public destiné aux patients de l’espace sécurisé destiné à l’administration.

---

## 2. Problématique

La gestion manuelle des rendez-vous hospitaliers peut provoquer plusieurs difficultés :

- perte ou mauvaise organisation des demandes de rendez-vous ;
- manque de visibilité sur les médecins disponibles ;
- communication lente entre les patients et l’administration ;
- difficulté à suivre l’état d’un rendez-vous ;
- centralisation insuffisante des informations des patients et des médecins ;
- accès non sécurisé aux informations administratives ;
- absence d’une interface unique pour gérer les opérations de l’hôpital.

L’objectif de ce projet est de proposer une solution numérique permettant de centraliser ces opérations et d’améliorer la communication entre les patients et l’administration hospitalière.

---

## 3. Objectifs

Les objectifs principaux sont les suivants :

1. Mettre à disposition un site public moderne pour l’hôpital.
2. Permettre l’inscription et l’authentification des patients.
3. Permettre aux patients de demander un rendez-vous.
4. Permettre à l’administration de gérer les demandes de rendez-vous.
5. Permettre la gestion des médecins et de leurs départements.
6. Centraliser les messages envoyés par les visiteurs.
7. Protéger les fonctionnalités administratives par authentification.
8. Stocker les données dans une base MongoDB.
9. Permettre l’importation d’avatars de médecins via Cloudinary.

---

## 4. Acteurs de l’application

### 4.1 Visiteur

Le visiteur est un utilisateur non authentifié.

Il peut :

- consulter la page d’accueil ;
- consulter la présentation de l’hôpital ;
- consulter les départements ;
- consulter les services proposés ;
- envoyer un message à l’hôpital.

Il ne peut pas :

- créer directement un rendez-vous sans compte ;
- accéder au tableau de bord administratif ;
- consulter les données internes de l’hôpital.

### 4.2 Patient

Le patient est un utilisateur inscrit sur la plateforme.

Il peut :

- créer un compte ;
- se connecter ;
- consulter les informations de l’hôpital ;
- consulter la liste des médecins ;
- sélectionner un département ;
- sélectionner un médecin ;
- demander un rendez-vous ;
- indiquer s’il a déjà visité l’établissement ;
- se déconnecter.

Les patients sont identifiés par le rôle `Patient`.

### 4.3 Administrateur

L’administrateur gère les opérations principales de l’hôpital.

Il peut :

- se connecter à l’espace administrateur ;
- consulter les rendez-vous ;
- modifier le statut d’un rendez-vous ;
- supprimer un rendez-vous ;
- consulter les médecins ;
- ajouter un nouveau médecin ;
- ajouter un nouvel administrateur ;
- consulter les messages envoyés ;
- se déconnecter.

Les administrateurs sont identifiés par le rôle `Admin`.

### 4.4 Médecin

Le médecin est enregistré par un administrateur.

Les informations enregistrées sont notamment :

- prénom ;
- nom ;
- adresse e-mail ;
- téléphone ;
- numéro d’identification ;
- date de naissance ;
- genre ;
- département ;
- mot de passe ;
- avatar.

Dans la version actuelle, le médecin est principalement géré comme une ressource médicale par l’administrateur. Une interface dédiée au médecin pourrait être ajoutée ultérieurement.

---

## 5. Fonctionnalités principales

### 5.1 Site public

Le site public contient notamment :

- une page d’accueil ;
- une présentation de l’hôpital ;
- une section sur les départements ;
- une section sur les services ;
- un formulaire de contact ;
- une page de connexion ;
- une page d’inscription ;
- une page de prise de rendez-vous.

Les routes principales du frontend sont :

| Route | Description |
|---|---|
| `/` | Page d’accueil |
| `/appointment` | Demande de rendez-vous |
| `/about` | Présentation de l’hôpital |
| `/register` | Inscription d’un patient |
| `/login` | Connexion d’un patient |

### 5.2 Authentification patient

Lors de l’inscription, le patient fournit :

- prénom ;
- nom ;
- e-mail ;
- téléphone ;
- numéro d’identification ;
- date de naissance ;
- genre ;
- mot de passe.

Le backend :

1. vérifie que tous les champs sont présents ;
2. vérifie que l’adresse e-mail n’est pas déjà utilisée ;
3. crée l’utilisateur avec le rôle `Patient` ;
4. chiffre le mot de passe avec `bcryptjs` ;
5. génère un token JWT ;
6. place le token dans un cookie HTTP.

### 5.3 Prise de rendez-vous

Pour demander un rendez-vous, le patient renseigne :

- ses informations personnelles ;
- la date souhaitée ;
- le département ;
- le médecin ;
- son adresse ;
- son historique de visite.

Le rendez-vous est initialement créé avec le statut :

```text
Pending