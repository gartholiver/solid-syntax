<?php
/**
 * Theme specific functions to simplify template building.
 *
 * @package Solid Syntax
 * @since 0.0.1
 */

/**
 * Solid Syntax Get Posts Function
 * Returns array of Timber posts
 *
 * @param string $post_type The name of the post type to be queried.
 * @param int    $posts_per_page The number of posts to query.
 * @param string $post_category The category array.
 *
 * @return string
 */
function solid_syntax_get_posts( $post_type, $posts_per_page, $post_category = array() ) {
	$args = array(
		'post_type'      => $post_type,
		'posts_per_page' => $posts_per_page,
	);

	if ( ! empty( $post_category ) ) {
		$args['tax_query'] = array( // phpcs:ignore
			array(
				'taxonomy' => $post_category[0],
				'field'    => 'term_id',
				'terms'    => $post_category[1],
			),
		);
	}

	return new Timber\PostQuery( $args );
}

/**
 * Solid Syntax Get Image Function
 * Renders an image based on attachment ID
 *
 * @param int    $attachment_id Image attachment ID.
 * @param string $size Image size.
 * @param string $classes A string of CSS classes to add to image.
 *
 * @return string
 */
function solid_syntax_get_image( $attachment_id = 0, $size = 'large', $classes = '' ) {
	return wp_get_attachment_image(
		$attachment_id,
		$size,
		false,
		array(
			'class' => $classes,
		)
	);
}
