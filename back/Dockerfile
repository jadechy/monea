# Étape 1 : Récupérer Composer depuis une image officielle
FROM composer:latest as composer

# Étape 2 : Image principale PHP allégée
FROM php:8.2-fpm-alpine

ARG TIMEZONE=Europe/Paris

# Install des dépendances système
RUN apk add --no-cache \
    bash \
    git \
    unzip \
    icu-dev \
    libzip-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    oniguruma-dev \
    libpng-dev \
    libxml2-dev \
    libxslt-dev \  
    ffmpeg \
    tzdata \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install \
        pdo \
        pdo_mysql \
        zip \
        xsl \
        gd \
        intl \
        opcache \
        exif \
        mbstring \
    && cp /usr/share/zoneinfo/${TIMEZONE} /etc/localtime \
    && echo "${TIMEZONE}" > /etc/timezone \
    && rm -rf /var/cache/apk/* \ 
    && echo 'alias sf="php bin/console"' >> ~/.bashrc

# Copier la config PHP
COPY php.ini /usr/local/etc/php/conf.d/docker-php-config.ini

# Copier Composer depuis le 1er stage
COPY --from=composer /usr/bin/composer /usr/local/bin/composer

# Répertoire de travail
WORKDIR /var/www/html

# Copier uniquement le nécessaire
COPY . .

# Préparation des dossiers nécessaires
RUN mkdir -p var/log \
    && chown -R www-data:www-data var/log

# Script d’entrée
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
