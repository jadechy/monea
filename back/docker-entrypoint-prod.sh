#!/bin/sh
set -ex
echo "=== Initialisation du conteneur backend ==="

if [ -f .env.prod ]; then
  export $(grep -v '^#' .env.prod | xargs)
fi
# Installer les dépendances
 if [ -f /run/secrets/mysql_password ]; then
  export MYSQL_PASSWORD=$(cat /run/secrets/mysql_password)
else
  echo "Erreur : le secret mysql_password est manquant"
  exit 1
fi
echo "==========="
echo "${MYSQL_PASSWORD}"
export DATABASE_URL="mysql://${MYSQL_USER:-app_user}:${MYSQL_PASSWORD}@${MYSQL_HOST:-db}:${MYSQL_PORT:-3306}/${MYSQL_DATABASE:-app_db}"
echo "DATABASE_URL=$DATABASE_URL"


# Attendre que le dossier bin existe
if [ ! -f bin/console ]; then
  echo "Erreur : bin/console introuvable après composer install"
  ls -al
  exit 1
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

echo "MYSQL_PASSWORD=${MYSQL_PASSWORD:-non défini}"
echo "JWT setup terminé"

mkdir -p var/cache var/log
chown -R www-data:www-data var

composer install --no-interaction --prefer-dist
composer require doctrine/doctrine-fixtures-bundle
php bin/console doctrine:migrations:migrate --no-interaction || true
php bin/console doctrine:fixtures:load --no-interaction || true
chown -R www-data:www-data var
chown -R www-data:www-data /var/www/html/public/uploads
chmod -R 775 /var/www/html/public/uploads
chmod +x /var/www/html/sf.sh
# Lancer php-fpm en foreground
exec php-fpm
