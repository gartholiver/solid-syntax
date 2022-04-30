<?php
/**
 * WordPress Enqueue Scripts Hook
 * Adds customizations to theme with wp_enqueue_scripts hook.
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
 *
 * @package Solid Syntax
 * @since 0.0.1
 */

/**
 * Theme function to implement customizations.
 *
 * @return void
 */
function solid_syntax_wp_enqueue_scripts() {

	// Reusable variables.
	$assets  = get_template_directory_uri() . '/assets';
	$version = '0.0.1';

	// Add Theme styles.
	wp_enqueue_style( 'solid-syntax-utilities', "$assets/css/tailwind.css", array(), $version, 'all' );
	wp_enqueue_style( 'solid-syntax-theme', "$assets/css/theme.css", array(), $version, 'all' );

	// Add Theme scripts.
	wp_enqueue_script( 'solid-syntax-scripts', "$assets/js/theme.js", array(), $version, true );
}

// Add theme function with hook.
add_action( 'wp_enqueue_scripts', 'solid_syntax_wp_enqueue_scripts' );
