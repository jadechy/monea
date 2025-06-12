FROM php:8.2-fpm-buster
ARG TIMEZONE

# Copier la configuration PHP
COPY php.ini /usr/local/etc/php/conf.d/docker-php-config.ini

# Mise à jour et installation des dépendances requises
RUN apt-get update && apt-get install -y \
    gnupg \
    g++ \
    procps \
    openssl \
    git \
    unzip \
    zlib1g-dev \
    libzip-dev \
    libfreetype6-dev \
    libpng-dev \
    libjpeg-dev \
    libicu-dev  \
    libonig-dev \
    libxslt1-dev \
    acl \
    ffmpeg \  
    && echo 'alias sf="php bin/console"' >> ~/.bashrc

# Installation de Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Configuration de GD avec support pour JPEG et FreeType
RUN docker-php-ext-configure gd --with-jpeg --with-freetype 

# Installation des extensions PHP
RUN docker-php-ext-install \
    pdo pdo_mysql zip xsl gd intl opcache exif mbstring

# Configuration du fuseau horaire
RUN ln -snf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime && echo ${TIMEZONE} > /etc/timezone \
    && printf '[PHP]\ndate.timezone = "%s"\n' ${TIMEZONE} > /usr/local/etc/php/conf.d/tzone.ini \
    && date

# Installation de Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer 

WORKDIR /var/www/symfony