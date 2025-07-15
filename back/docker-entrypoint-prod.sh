#!/bin/sh
set -ex

# Installer les dépendances
 

# Attendre que le dossier bin existe
if [ ! -f bin/console ]; then
  echo "Erreur : bin/console introuvable après composer install"
  ls -al
  exit 1
fi


if [ -f .env.prod ]; then
  export $(grep -v '^#' .env.prod | xargs)
fi

if [ -z "$JWT_PASSPHRASE" ]; then
  echo "Erreur : JWT_PASSPHRASE n'est pas défini"
  exit 1
fi

echo "JWT_PASSPHRASE=${JWT_PASSPHRASE}"

if [ ! -f config/jwt/private.pem ]; then
  mkdir -p config/jwt
  openssl genrsa -out config/jwt/private.pem -aes256 -passout pass:"$JWT_PASSPHRASE" 4096
  openssl rsa -pubout -in config/jwt/private.pem -passin pass:"$JWT_PASSPHRASE" -out config/jwt/public.pem
  chmod 600 config/jwt/private.pem
  chmod 644 config/jwt/public.pem
  echo "JWT_PASSPHRASE=${JWT_PASSPHRASE}"
  echo "Clés JWT générées"
fi
chown -R www-data:www-data config/jwt

echo "MYSQL_PASSWORD_FILE=${MYSQL_PASSWORD_FILE:-non défini}"
echo "JWT setup terminé"

mkdir -p var/cache var/log
chown -R www-data:www-data var

composer install --no-interaction --prefer-dist
composer require doctrine/doctrine-fixtures-bundle
php bin/console doctrine:migrations:migrate --no-interaction || true
php bin/console doctrine:fixtures:load --no-interaction || true
chown -R www-data:www-data var

# Lancer php-fpm en foreground
exec php-fpm
