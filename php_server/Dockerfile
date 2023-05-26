FROM php:8.0-apache

WORKDIR /var/www/html

COPY . .

RUN apt-get update && \
    apt-get install -y libmariadb-dev\
    libpq-dev \
    && docker-php-ext-install mysqli pdo pdo_mysql && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
	
RUN echo "ServerName localhost" >> /etc/apache2/conf-available/server-name.conf && \
    a2enconf server-name && \
    rm /etc/apache2/sites-enabled/000-default.conf

RUN service apache2 restart

EXPOSE 80

CMD ["apache2-foreground"]