<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'agrichemia' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'root' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'G[%=22-uiUYjlwd,U]Gp-sxp6hVvMY{7#6*U%G-3WxQ,H&M3IEe+WART{9$~8J_g' );
define( 'SECURE_AUTH_KEY',  '2d?%$ZxfI>j_MW8~f.owHRDTjm0.~L6Ewpze8?&nX$?zQbCX2HNXO.h9~}U/FYww' );
define( 'LOGGED_IN_KEY',    '=c#H5*9 MU9dbpXramYO8rUQ@up&iJkUSjUeM7am%z@M9gwFaN+~JZN0GlG1cZh+' );
define( 'NONCE_KEY',        ');&7D-GP/B4Nz19[%{(,NSQHCm9/jitsXJ^ _x0$xKYGc.sk,[r; =w8fRWGf6hA' );
define( 'AUTH_SALT',        'pS.K9e1`!~yJGnSr^Egt[XQTg;cIIXM{._eH4~^WRk&3=5kDc0m%60Hl*Ai<QTy1' );
define( 'SECURE_AUTH_SALT', 'zu6aZTQOaJ8HWIs*Dh3V!QGT0lxxm;ib!re<j/TxitZsApA~[*,?Zg|KQsKRa=G=' );
define( 'LOGGED_IN_SALT',   '$l4XnMj11e2IfotQ<,Pc#?$w+F|jlt^LX;Fg,DK+UR6&%6JuzGE?v,[28_-IqTby' );
define( 'NONCE_SALT',       'ZUrp.5kzst=_ixLwYP(<8 0HKO&~Dp_#:hS>gkR|d+ztA=P0TpV08L6O%{*-mKFZ' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
