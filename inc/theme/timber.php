<?php
/**
 * Timber Filters
 *
 * @link https://timber.github.io/docs/guides/filters/
 *
 * @package Solid Syntax
 * @since 0.0.1
 */

/**
 * Timber Context
 *
 * @param string $context context['this'] Being the Twig's {{ this }}.
 *
 * @return array
 */
function solid_syntax_timber_context( $context ) {
	$context['primary_menu'] = new Timber\Menu( 'primary' );

	return $context;
}
add_filter( 'timber/context', 'solid_syntax_timber_context' );

/**
 * This is where you can add your own functions to twig.
 *
 * @param string $twig Get extension.
 */
function solid_syntax_timber_twig( $twig ) {
	// Add extensions to Twig.
	$twig->addExtension( new Twig\Extension\StringLoaderExtension() );

	// Add functions to Twig.
	$twig->addFunction( new Timber\Twig_Function( 'get_posts', 'solid_syntax_get_posts' ) );
	$twig->addFunction( new Timber\Twig_Function( 'get_image', 'solid_syntax_get_image' ) );

	return $twig;
}
add_filter( 'timber/twig', 'solid_syntax_timber_twig' );
