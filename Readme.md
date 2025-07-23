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
NUXT_PUBLIC_BASE_URL=http://localhost:8080
```

##### ➤ Backend

Créer un fichier `.env.dev.local` à la racine du backend à partir de `.env.dev.local.sample`.

Variables nécessaires :

```env
GOOGLE_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
```

Les variables sont à récupérer sur : google cloud [https://cloud.google.com/gcp?&gad_campaignid=20535123993]

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
| @ Mailer       | [http://localhost:8025/](http://localhost:8025/)       |
| @ Matomo       | [http://localhost:8080/](http://localhost:8080/)       |

--

## Production

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
NUXT_PUBLIC_API_URL=
NUXT_PUBLIC_BASE_URL=
NUXT_PUBLIC_MATOMO_URL=
```

##### ➤ Backend

Créer un fichier `.env.dev.local` à la racine du backend à partir de `.env.dev.local.sample`.

Variables nécessaires :

```env
GOOGLE_CLIENT_ID=
```

Les variables sont à récupérer sur : google cloud [https://cloud.google.com/gcp?&gad_campaignid=20535123993]

### 2. 🐳 Lancer les services Docker

Bien sûr ! Voici une rédaction claire et professionnelle pour la section `### 2. 🐳 Lancer les services Docker` de ton README :

---

### 2. 🐳 Lancer les services Docker

Avant de lancer les services, il est nécessaire de créer les fichiers de **secrets** qui seront utilisés par Docker et Symfony.

#### 📁 1. Créer le dossier `secrets`

Ce dossier contiendra les fichiers sensibles (identifiants, mots de passe, certificats TLS, etc.).

```bash
mkdir secrets
```

#### 🗝️ 2. Créer les fichiers de secrets requis

Voici la liste des fichiers à créer dans le dossier `secrets/` :

| Nom du fichier            | Description                                          |
| ------------------------- | ---------------------------------------------------- |
| `google_client.txt`       | Le **client ID** Google OAuth                        |
| `jwt_passphrase.txt`      | Le **passphrase** utilisé pour signer les tokens JWT |
| `mailpit_auth.txt`        | Identifiants pour accéder à l’interface Mailpit      |
| `mailpit_tls_cert.pem`    | Certificat TLS pour sécuriser Mailpit                |
| `mailpit_tls_key.pem`     | Clé privée TLS pour Mailpit                          |
| `mysql_root_password.txt` | Mot de passe du compte **root** de MySQL             |
| `mysql_password.txt`      | Mot de passe de l’utilisateur MySQL standard         |

> 💡 Assure-toi que chaque fichier ne contient **que la valeur brute**, sans espaces ni lignes vides, et surtout **sans espace à la fin**.

Dans la racine du projet, exécute :

```bash
docker compose -f docker-compose.prod.yaml up -d --build
```

Cette commande va :

- Lancer la base de données MySQL

- Lancer l'API Symfony

- Lancer le frontend

### 🔗 Accès rapides

| Service accessible |
| ------------------ | ------------------------------------------------------ |
| 🖥️ Frontend        | [https://monea.life/](https://monea.life/)             |
| @ Mailer           | [https://monea.life/mailer](https://monea.life/mailer) |
| @ Matomo           | [https://monea.life/matomo](https://monea.life/matomo) |

#### Par Cécile LECERF et Jade Chi Yen
