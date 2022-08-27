<?php
function wp_table_create() {

    global $wpdb;

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
    )";

    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

    dbDelta( $wp_query );
}
add_action( 'admin_init', 'wp_table_create' );
