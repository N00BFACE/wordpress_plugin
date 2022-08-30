<?php
/**
 * Plugin Name:       Pageblock
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pageblock
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function create_block_pageblock_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_pageblock_block_init' );


function pageblock_menu() {
	add_menu_page( 
		'Pageblock', 
		'Pageblock', 
		'manage_options', 
		'pageblock', 
		'pageblock_settings_page', 
		'dashicons-admin-generic',
		'20.1'
	);
}
add_action( 'admin_menu', 'pageblock_menu' );

function pageblock_settings_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	?>
	<h1>Pageblock Settings</h1>
	<?php
}

function staff_menu_page() {
	add_submenu_page( 'pageblock', 'Staff', 'Staff', 'manage_options', 'staff', 'staff_settings_page' );
}
add_action( 'admin_menu', 'staff_menu_page' );

function staff_settings_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	?>
	<div class="wrap">
		<h3>Staff Settings</h3>
		<div>
			<div class="add_staff">
				<h4>Add New Staff</h4>
				<form method="post">
					<?php settings_fields( 'pageblock_settings_group' ); ?>
					<?php do_settings_sections( 'pageblock_settings_group' ); ?>
					<table>
						<style>
							th {
								padding: 10px;
							}
							td {
								padding: 10px;
							}
							td input {
								width: 100%;
							}
							td textarea {
								width: 100%;
								height: 100px;
							}
						</style>
						<tr class="card">
							<th>Full Name</th>
							<td><input type="text" name="fullname" placeholder="Staff Name" value="<?php echo esc_attr( get_option('fullname') ); ?>" required /></td>
						</tr>
						<tr class="card">
							<th>Position</th>
							<td><input type="text" name="position" placeholder="Staff Position" value="<?php echo esc_attr( get_option('position') ); ?>" required /></td>
						</tr>
						<tr class="card">
							<th>Email</th>
							<td><input type="email" name="email" placeholder="Staff Email" value="<?php echo esc_attr( get_option('email') ); ?>" required /></td>
						</tr>
						<tr class="card">
							<th>Image</th>
							<td><input type="file" name="image" placeholder="Staff Image" value="<?php echo esc_attr( get_option('image') ); ?>" required accept="image/png, image/jpeg" /></td>
						</tr>
						<tr class="card">
							<th>Description</th>
							<td><textarea name="description" placeholder="Staff Description" value="<?php echo esc_attr( get_option('description') ); ?>" required ></textarea></td>
						</tr>
						<tr class="card">
							<th>Since</th>
							<td><input type="date" name="since" value="<?php echo esc_attr( get_option('since') ); ?>" required /></td>
						</tr>
					</table>
					<?php submit_button('Add Staff'); ?>
				</form>
			</div>
			<div class="staff_list">
				<h3>Staff List</h3>
				<table class="wp-list-table widefat fixed striped pages">
					<thead>
						<tr>
							<th>S.N.</th>
							<th>Name</th>
							<th>Position</th>
							<th>Email</th>
							<th>Edit / View</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						<?php
							global $wpdb;
							$table_name = $wpdb->prefix . 'staff_table';
							$results = $wpdb->get_results( "SELECT * FROM $table_name" );
							$i = 1;
							foreach ( $results as $result ) {
								echo '<tr>';
								echo '<td>' . $i++ . '</td>';
								echo '<td>' . $result->name . '</td>';
								echo '<td>' . $result->position . '</td>';
								echo '<td>' . $result->email . '</td>';
								echo '<td><a href="?page=pageblock&edit=' . $result->id . '">Edit</a> / <a href="?page=pageblock&view=' . $result->id . '">View</a></td>';
								echo '<td><a href="?page=pageblock&delete=' . $result->id . '">Delete</a></td>';
								echo '</tr>';
							}
						?>	
					</tbody>
				</table>
			</div>
		</div>
	<?php
}

require_once( plugin_dir_path( __FILE__ ) . 'wp_staff_table.php' );

function contact_form_menu_page() {
	add_submenu_page( 'pageblock', 'Contact Form', 'Contact Form', 'manage_options', 'contact_form', 'contact_form_settings_page' );
}
add_action( 'admin_menu', 'contact_form_menu_page' );

function contact_form_settings_page() {
	?>
	<h1>Hello Nice Day For Fishin Aint It?</h1>
	<?php
}

function wp_insert_data() {
	global $wpdb;
	$table_name = $wpdb->prefix . 'staff_table';
	if(isset($_POST['fullname'])) {
		$wpdb->insert( 
			$table_name, 
			array( 
				'name' => $_POST['fullname'], 
				'position' => $_POST['position'], 
				'email' => $_POST['email'], 
				'image' => $_POST['image'],
				'description' => $_POST['description'] ,
				'since' => $_POST['since'],
			)
		);
	};
}
add_action( 'admin_init', 'wp_insert_data' );

function staff_api_init() {
	register_rest_route( 'pageblock/v1', '/staff_table', array(
		'methods' => 'GET',
		'callback' => 'staff_table_api_handler'
	) );
}
add_action( 'rest_api_init', 'staff_api_init' );

function staff_table_api_handler() {
	global $wpdb;
	$table_name = $wpdb->prefix . 'staff_table';
	$results = $wpdb->get_results( "SELECT * FROM $table_name" );
	return $results;
}