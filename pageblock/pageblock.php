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

add_action( 'admin_menu', 'pageblock_menu' );
add_action( 'admin_menu', 'staff_menu_page' );
add_action( 'admin_menu', 'features_menu_page' );

function pageblock_menu() {
	add_menu_page( 'Pageblock', 'Pageblock', 'manage_options', 'pageblock', 'pageblock_settings_page', 'dashicons-admin-page');
}

function staff_menu_page() {
	add_submenu_page( 'pageblock', 'Staff', 'Staff', 'manage_options', 'staff', 'staff_settings_page' );
}

function features_menu_page() {
	add_submenu_page( 'pageblock', 'Features', 'Features', 'manage_options', 'features', 'features_settings_page' );
}

function pageblock_settings_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	?>
	<h1>Pageblock Settings</h1>
	<?php
}

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
				<form method="post" class="form">
					<?php settings_fields( 'pageblock_settings_group' ); ?>
					<?php do_settings_sections( 'pageblock_settings_group' ); ?>
					<table class="card">
						<tr>
							<th>Full Name</th>
							<td><input type="text" name="fullname" value="<?php echo esc_attr( get_option('fullname') ); ?>" /></td>
						</tr>
						<tr>
							<th>Position</th>
							<td><input type="text" name="position" value="<?php echo esc_attr( get_option('position') ); ?>" /></td>
						</tr>
						<tr>
							<th>Email</th>
							<td><input type="email" name="email" value="<?php echo esc_attr( get_option('email') ); ?>" /></td>
						</tr>
						<tr>
							<th>Image</th>
							<td><input type="file" name="image" value="<?php echo esc_attr( get_option('image') ); ?>" /></td>
						</tr>
						<tr>
							<th>Description</th>
							<td><input type="text" name="description" value="<?php echo esc_attr( get_option('description') ); ?>" /></td>
						</tr>
						<tr>
							<th>Since</th>
							<td><input type="date" name="since" value="<?php echo esc_attr( get_option('since') ); ?>" /></td>
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
							foreach ( $results as $result ) {
								echo '<tr>';
								echo '<td>' . $result->staff_name . '</td>';
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

function features_settings_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	?>
	<h1>Features Settings</h1>
	<div>
		<div class="add_feature">
			<h4>Add New Feature</h4>
			<form method="post" class="form">
				<?php settings_fields( 'pageblock_settings_group' ); ?>
				<?php do_settings_sections( 'pageblock_settings_group' ); ?>
				<table class="card">
					<tr>
						<th>Feature</th>
						<td><input type="text" name="feature" value="<?php echo esc_attr( get_option('feature') ); ?>" /></td>
					</tr>
					<tr>
						<th>Description</th>
						<td><input type="text" name="description" value="<?php echo esc_attr( get_option('description') ); ?>" /></td>
					</tr>
				</table>
				<?php submit_button('Add Feature'); ?>
			</form>
		</div>
		<div class="feature_list">
			<h3>Feature List</h3>
			<table class="wp-list-table widefat fixed striped pages">
				<thead>
					<tr>
						<th>Feature</th>
						<th>Description</th>
						<th>Edit / View</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					<?php
						global $wpdb;
						$table_name = $wpdb->prefix . 'feature_table';
						$results = $wpdb->get_results( "SELECT * FROM $table_name" );
						foreach ( $results as $result ) {
							echo '<tr>';
							echo '<td>' . $result->feature . '</td>';
							echo '<td>' . $result->description . '</td>';
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

function wp_insert_data() {
	global $wpdb;
	$table_name = $wpdb->prefix . 'staff_table';
	if(isset($_POST['fullname'])) {
		$wpdb->insert( 
			$table_name, 
			array( 
				'staff_name' => $_POST['fullname'], 
				'position' => $_POST['position'], 
				'email' => $_POST['email'], 
				'image' => $_POST['image'], 
				'description' => $_POST['description'] ,
				'since' => $_POST['since']
			)
		);
	};
}
add_action( 'admin_init', 'wp_insert_data' );