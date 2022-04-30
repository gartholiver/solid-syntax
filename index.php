<?php
/**
 * The default template for showing post listing and/or home page.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#home-page-display
 *
 * @package Solid Syntax
 * @since 0.0.1
 */

$context          = Timber::context();
$context['posts'] = new Timber\PostQuery();
$templates        = array( 'index.twig' );

$queried_obj = get_queried_object();
$query       = $wp_query->query;

$details = (object) array(
	'title' => 'News',
	'cat'   => isset( $query['cat'] ) ? $query['cat'] : '',
	'cats'  => get_categories(),
	'tag'   => isset( $query['tag'] ) ? $query['tag'] : '',
	'tags'  => get_tags(),
	'srch'  => isset( $query['s'] ) ? $query['s'] : '',
);

$context['details'] = $details;

Timber::render( $templates, $context );
