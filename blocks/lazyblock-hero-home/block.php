<?php
/**
 * Example Block Template.
 *
 * @package Solid Syntax
 *
 * @var array  $attributes Block attributes.
 * @var array  $block Block data.
 * @var string $context Preview context [editor,frontend].
 */

$context = Timber::context();

$context['attributes'] = $attributes;
$context['block']      = $block;
$context['context']    = $context;

Timber::render( array( 'templates/blocks/hero-home.twig' ), $context );
