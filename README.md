# 💸 MONEA

**MONEA** est une application web de gestion de budget collaboratif.  
Elle permet à plusieurs utilisateurs de suivre, catégoriser et planifier leurs dépenses au sein de groupes partagés.

---

## 🚀 Initialisation du projet

Ce projet est basé sur **Docker** et comporte deux parties :

- le **frontend** (Vue),
- le **backend** (API Symfony + MySQL).

---

### 1. 🔧 Configuration des variables d’environnement

#### ➤ Frontend

Créer un fichier `.env` à la racine du frontend à partir de `.env.sample`.

Exemple :

```env
VITE_API_URL=http://localhost:8000
```

#### ➤ Backend

Créer un fichier `.env.local` à la racine du backend à partir de `.env.local.sample`.

Variables nécessaires :

```env
MYSQL_ROOT_PASSWORD=your_root_password
MYSQL_DATABASE=your_database
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password
PMA_HOST=db

DATABASE_URL="mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@db:3306/${MYSQL_DATABASE}?serverVersion=8.0"

JWT_SECRET_KEY=your_jwt_private_key
JWT_PUBLIC_KEY=your_jwt_public_key
JWT_PASSPHRASE=your_passphrase

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 2. 🐳 Lancer les services Docker

Dans la racine du projet, exécute :

```bash
docker compose up -d --build
```

Cette commande va :

- Lancer la base de données MySQL

- Démarrer PhpMyAdmin

- Lancer l'API Symfony

- Lancer le frontend

## 🔗 Accès rapides

| Service        | URL                                                    |
| -------------- | ------------------------------------------------------ |
| 📊 PhpMyAdmin  | [http://localhost:8081/](http://localhost:8081/)       |
| 🧪 Swagger API | [http://localhost:8000/api](http://localhost:8000/api) |
| 🖥️ Frontend    | [http://localhost:5173/](http://localhost:5173/)       |

## 🛠️ Technologies utilisées

- ⚙️ Symfony (API Platform)
- 🎨 Vue
- 🐬 MySQL
- 🐳 Docker / Docker Compose
- 🔐 JWT Auth + OAuth Google Login
