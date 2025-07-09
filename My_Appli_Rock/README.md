# Projet React + Vite – Aesop Rock

## Choix technologiques

- **React** : Pour créer une interface moderne, dynamique et réutilisable.
- **Vite** : Pour démarrer et développer rapidement le projet React.
- **CSS** : Pour le style et le responsive (adaptation mobile/ordinateur).
- **Bootstrap** : Pour styliser rapidement l'admin (boutons, formulaires).
- **Firebase (Firestore)** : Pour stocker les données (dates, actualités) de façon sécurisée et en temps réel.
- **React Router** : Pour naviguer entre les pages sans recharger le site.

## Sécurité (admin)

- Champs obligatoires et validation dans les formulaires.
- Choix contrôlés (ex : statut « Disponible » ou « Épuisé » seulement).
- Confirmation avant suppression d'une donnée.
- Accès à l'admin réservé (à renforcer avec authentification si besoin).
- Règles de sécurité Firebase pour limiter l'accès aux données.

## Déploiement (admin)

### Technologies à vérifier
- **Node.js** (version 16 ou plus récente)
- **npm** (installé avec Node.js)
- **Connexion internet** (pour installer les dépendances et accéder à Firebase)

### Actions à effectuer dans le terminal
1. Ouvrir un terminal dans le dossier du projet.
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer le projet en mode développement :
   ```bash
   npm run dev
   ```
   > Le site sera accessible à l'adresse indiquée dans le terminal (souvent http://localhost:5173).

### Autres actions nécessaires
- Vérifier que le fichier `src/firebase.js` contient la bonne configuration Firebase.
- Accéder à l'admin via `/admin` dans le navigateur.
- Pour mettre en ligne :
   ```bash
   npm run build
   ```
   Puis héberger le dossier `dist/` sur Vercel, Netlify, Firebase Hosting, etc.

**Résumé** :
- Installer Node.js et npm si besoin
- `npm install` puis `npm run dev`
- Accès admin via `/admin`
- Les données sont stockées et sécurisées avec Firebase
