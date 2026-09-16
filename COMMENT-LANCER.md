# Comment relancer le projet "Suivi de candidatures"

## Structure du projet

```
suivi-candidatures/
├── backend/
│   ├── server.js       (API Express avec les 4 routes)
│   ├── database.js     (connexion SQLite + création table)
│   ├── candidatures.db (base de données)
│   └── package.json
└── frontend/
    ├── src/
    │   └── App.jsx      (interface React complète)
    └── package.json
```

## Étapes pour lancer le projet

### 1. Ouvrir le projet dans VS Code
Fichier → Ouvrir le dossier → sélectionner `suivi-candidatures`

### 2. Lancer le backend (terminal 1)
```
cd backend
node server.js
(npx nodemon server.js) Pour auto actualiser sans redémarer
```
Tu dois voir : `Serveur démarré sur http://localhost:3000`
→ Laisse ce terminal ouvert.

### 3. Lancer le frontend (terminal 2)
Ouvre un **nouveau** terminal (icône + dans VS Code) :
```
cd frontend
npm run dev
```
Tu dois voir une URL du type : `http://localhost:5173/`
→ Laisse ce terminal ouvert aussi.

### 4. Ouvrir l'application
Va sur **http://localhost:5173/** dans ton navigateur.

---

## Fonctionnalités déjà en place

- [x] API REST (GET, POST, PATCH, DELETE) connectée à une base SQLite
- [x] Affichage de la liste des candidatures
- [x] Formulaire d'ajout d'une candidature
- [x] Changement de statut via menu déroulant
- [x] Suppression d'une candidature
- [x] Projet versionné avec Git, poussé sur GitHub

## Ce qu'il reste à faire

- [ ] Filtre par statut
- [ ] Style CSS
- [ ] Tests unitaires
- [ ] Déploiement (frontend + backend)
- [ ] README complet pour GitHub

## Rappels utiles

- `git add .` puis `git commit -m "message"` puis `git push` pour sauvegarder tes changements sur GitHub
- Si erreur "git n'est pas reconnu" → redémarrer le terminal après une installation
- Toujours vérifier que les DEUX terminaux (backend + frontend) tournent en même temps
