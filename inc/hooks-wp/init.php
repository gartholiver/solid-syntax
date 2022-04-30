<?php
/**
 * Initialization Hook
 * Adds customizations to theme with init hook.
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 *
 * @package Solid Syntax
 * @since 0.0.1
 */

/**
 * Theme function to implement customizations.
 *
 * @return void
 */
function origin_init() {
	/**
	 * Register navigation menus.
	 */
	register_nav_menus(
		array(
			'primary' => __( 'Primary', 'solid-syntax' ),
		)
	);
}

// Add theme function with hook.
add_action( 'init', 'origin_init' );
