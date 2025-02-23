# Film App - React Native

📌 **Description**

Cette application mobile, développée avec React Native, permet aux utilisateurs de consulter la liste des films tendance et de rechercher des films spécifiques en utilisant l'API TMDB (The Movie Database). L'application affiche une interface simple et intuitive pour une navigation fluide entre les films.

---

## 🚀 Fonctionnalités

### 👥 **Utilisateur**
- 🏠 Affichage de la liste des films tendance
- 🔍 Barre de recherche pour trouver un film spécifique
- 📽️ Affichage des détails d'un film (titre, synopsis, date de sortie, etc.)

---

## 🛠 **Installation**

Suivez ces étapes pour installer et exécuter le projet localement.

### 1️⃣ **Cloner le dépôt**

```bash
git clone https://github.com/ton-repo/film-app.git
cd film-app
```

### 2️⃣ **Installer les dépendances**
```bash
npm install
```

### 3️⃣ **Créer un fichier de configuration**
- Créez un fichier `.env` à la racine du projet.
- Ajoutez votre clé API TMDB dans ce fichier :

```env
TMDB_API_KEY=Votre_Clef_API_TMDB
```

### 4️⃣ **Lancer l'application**
```bash
npm run android  # Pour Android
npm run ios      # Pour iOS
```

---

## 🛠 **Technologies utilisées**

- 🎯 React Native
- 🔌 API TMDB (The Movie Database)
- 📱 Expo (pour faciliter le développement mobile)
- 🎨 React Navigation (pour la gestion de la navigation)

---

## 🛠 **Fonctionnement de l'application**

1. **Page d'accueil** : Affiche les films tendances récupérés via l'API TMDB.
2. **Barre de recherche** : Permet de rechercher un film spécifique en utilisant le nom du film.
3. **Page de détails** : Affiche les informations détaillées sur un film sélectionné, y compris l'affiche, le synopsis et la date de sortie.

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Forker le projet
2. Créer une branche
```bash
git checkout -b feature-ma-fonctionnalité
```
3. Committer vos modifications
```bash
git commit -m "Ajout d'une fonctionnalité"
```
4. Pousser la branche
```bash
git push origin feature-ma-fonctionnalité
```
5. Ouvrir une Pull Request

---

💻 Développé avec ❤️ en React Native.
```

---

### Explications :

- Vous pouvez personnaliser le lien de votre dépôt GitHub dans la section "Cloner le dépôt".
- Remplacez `"Votre_Clef_API_TMDB"` par votre clé d'API TMDB que vous obtenez en vous inscrivant sur [TMDB API](https://www.themoviedb.org/documentation/api).
  
Il vous suffit de copier ce contenu dans un fichier `README.md` et de l'ajouter à votre projet.