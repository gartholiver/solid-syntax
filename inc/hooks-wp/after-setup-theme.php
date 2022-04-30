<?php
/**
 * Post Theme Setup Hook
 * Adds customizations to theme with after_setup_theme hook.
 *
 * @link https://developer.wordpress.org/reference/hooks/after_setup_theme/
 *
 * @package Solid Syntax
 * @since 0.0.1
 */

/**
 * Theme function to implement customizations.
 *
 * @return void
 */
function solid_syntax_after_theme_setup() {

	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'title-tag' );
}

// Add theme function with hook.
add_action( 'init', 'solid_syntax_after_theme_setup' );
