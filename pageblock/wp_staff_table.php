<?php
function wp_table_create() {

    global $wpdb;
    $charset_collate = $wpdb->get_charset_collate();
    $table_name = $wpdb->prefix . 'staff_table';

    $wp_query="CREATE TABLE $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name varchar(55) NOT NULL,
        position tinytext NOT NULL,
        email varchar(55) NOT NULL,
        image varchar(55) NOT NULL,
        description text NOT NULL,
        since date NOT NULL,
        PRIMARY KEY (id)
    ) $charset_collate;";

    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

    dbDelta( $wp_query );
}
add_action( 'admin_init', 'wp_table_create' );

register_activation_hook( __FILE__, 'wp_table_create' );