#!/bin/sh
set -e

# Installer les dépendances
composer install --no-interaction --prefer-dist

# Attendre que le dossier bin existe
if [ ! -f bin/console ]; then
  echo "Erreur : bin/console introuvable après composer install"
  ls -al
  exit 1
fi

# Migrations et fixtures (optionnel)
php bin/console doctrine:migrations:migrate --no-interaction || true
php bin/console doctrine:fixtures:load --no-interaction || true

# Lancer php-fpm en foreground
exec php-fpm
