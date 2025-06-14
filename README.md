# MONEA

Web app de gestion de budget collaboratif

## Initialisation

docker compose up -d

### FOR dev

cd app
npm install
cd ..
cd back
composer install
docker exec -it monea-backend-1 /bin/sh
php bin/console d:d:c
php bin/console d:m:m
php bin/console d:f:l

## Go to

- pma : http://localhost:8081/
- swagger : http://localhost:8000/api
- app : http://localhost:5173/
