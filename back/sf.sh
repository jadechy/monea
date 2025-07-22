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
export DATABASE_URL="mysql://${MYSQL_USER:-app_user}:${MYSQL_PASSWORD}@${MYSQL_HOST:-db}:${MYSQL_PORT:-3306}/${MYSQL_DATABASE:-app_db}"

# Exécuter la commande Symfony avec la bonne variable d’environnement
exec php bin/console "$@"
