# 💸 MONEA

**MONEA** est une application web de gestion de budget collaboratif.  
Elle permet à plusieurs utilisateurs de suivre, catégoriser et planifier leurs dépenses au sein de groupes partagés.

---

### 🛠️ Technologies utilisées

- ⚙️ Symfony (API Platform)
- 🎨 Nuxt
- 🐬 MySQL
- 🐳 Docker / Docker Compose
- 🔐 JWT Auth + OAuth Google Login

---

## Développement

###🚀 Initialisation du projet

Ce projet est basé sur **Docker** et comporte deux parties :

- le **frontend** (Nuxt) dans /app,
- le **backend** (API Symfony + MySQL) avec un reverse-prxy (Nginx) dans /back et /nginx.

---

#### 1. 🔧 Configuration des variables d’environnement

##### ➤ Frontend

Créer un fichier `.env` à la racine du frontend à partir de `.env.sample`.

Exemple :

```env
NUXT_PUBLIC_API_URL=http://localhost:8000
NUXT_PUBLIC_BASE_URL=http://localhost:3000
```

##### ➤ Backend

Créer un fichier `.env.local` à la racine du backend à partir de `.env.local.sample`.

Variables nécessaires :

```env
GOOGLE_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password
PMA_HOST=db

DATABASE_URL="mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@db:3306/${MYSQL_DATABASE}?serverVersion=8.0"

JWT_PASSPHRASE=your_passphrase

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

MAILER_DSN=
```

### 2. 🐳 Lancer les services Docker

Dans la racine du projet, exécute :

```bash
docker compose up -d --build
```

Cette commande va :

- Lancer la base de données MySQL

- Démarrer PhpMyAdmin

- Lancer l'API Symfony

- Lancer le frontend

### 🔗 Accès rapides

| Service        | URL                                                    |
| -------------- | ------------------------------------------------------ |
| 📊 PhpMyAdmin  | [http://localhost:8081/](http://localhost:8081/)       |
| 🧪 Swagger API | [http://localhost:8000/api](http://localhost:8000/api) |
| 🖥️ Frontend    | [http://localhost:3000/](http://localhost:3000/)       |

#### Par Cécile LECERF et Jade Chi Yen
