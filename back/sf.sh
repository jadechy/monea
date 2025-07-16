#!/bin/bash
set -e

# Charger le mot de passe depuis le secret
if [ -f /run/secrets/mysql_password ]; then
  export MYSQL_PASSWORD=$(cat /run/secrets/mysql_password)
else
  echo "Erreur : le secret mysql_password est manquant"
  exit 1
fi

# Définir l’URL complète de la base
export DATABASE_URL="mysql://${DATABASE_USER:-app_user}:${MYSQL_PASSWORD}@${DATABASE_HOST:-db}:${DATABASE_PORT:-3306}/${DATABASE_NAME:-app_db}"

# Exécuter la commande Symfony avec la bonne variable d’environnement
exec php bin/console "$@"
