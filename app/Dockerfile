FROM node:22-alpine

WORKDIR /app

# Copier seulement package*.json en premier
COPY package*.json ./

EXPOSE 3000

# Installer les dépendances et lancer vite en une seule commande
CMD ["sh", "-c", "npm install && npm run dev"]