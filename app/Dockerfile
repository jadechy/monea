FROM node:22-alpine

WORKDIR /app

# Copier seulement package*.json en premier
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 3000

# Installer les dépendances et lancer vite en une seule commande
CMD ["npm run dev"]