#!/bin/sh
PHP_INI_SCAN_DIR='/var/www/u2446872/data/php-bin-php80/slovolet.ru:'
PHPRC='/var/www/u2446872/data/php-bin-php80'
export PHP_INI_SCAN_DIR
export PHPRC
exec /opt/php/8.0/bin/php-cgi
