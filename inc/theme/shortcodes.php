<?php
/**
 * Theme Shortcodes
 *
 * @link https://codex.wordpress.org/Shortcode_API
 *
 * @package Solid Syntax
 * @since 0.0.1
 */

/**
 * Year Shortcode
 * For displaying the current year in footer.
 *
 * @return string
 */
function solid_syntax_year_shortcode() {
	return gmdate( 'Y' );
}
add_shortcode( 'year', 'origin_year_shortcode' );
