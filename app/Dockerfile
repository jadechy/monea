FROM node:22

WORKDIR /app

# Copier seulement package*.json en premier
COPY package*.json ./
RUN npm ci --silent --no-audit --no-fund
COPY . . 
EXPOSE 3000

# Installer les dépendances et lancer vite en une seule commande
CMD ["sh", "-c", "npm run dev"]
