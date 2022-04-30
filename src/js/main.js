// Import and Initialize Alpine.js
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import collapse from '@alpinejs/collapse'

window.Alpine = Alpine

Alpine.plugin(intersect)
Alpine.plugin(collapse)

Alpine.start()

// Import and setup Theme utilities
import Origin from './classes/Origin'
window.Origin = new Origin()

// Import all other dependencies
import lax from 'lax.js'
import SmoothScroll from './classes/SmoothScroll'
import GFormLabels from './classes/GFormLabels'


// On content load event:
document.addEventListener('DOMContentLoaded', () => {
	// Smooth Scroll
	let path = window.location.pathname

	if (document.querySelector('a[href^="#"]')) {
		let scrollable = new SmoothScroll('a[href^="#"]')
		scrollable.mount()
	}

	if (document.querySelector('a[href^="' + path + '#"]')) {
		let innerScrollable = new SmoothScroll('a[href^="' + path + '#"]')
		innerScrollable.mount()
	}

	// Parallax
	lax.init()
	lax.addDriver('scrollY', () => window.scrollY)

	lax.addElements('.drift', {
		scrollY: {
			translateY: [
				["elInY", "elOutY"],
				{
					1023: [0, 0],
					1024: ['-elHeight/4', 'elHeight/4'],
				},
			]
		}
	})

	lax.addElements('.drift-a-little', {
		scrollY: {
			translateY: [
				["elInY", "elOutY"],
				{
					1023: [0, 0],
					1024: ['elHeight/8', '-elHeight/8'],
				},
			]
		}
	})

	if (typeof jQuery !== 'undefined' && jQuery('.gform_wrapper').length) {
		window.$ = jQuery
		const glables = new GFormLabels()

		$(document).on('gform_post_render', function(event, form_id, current_page) {
			glables.setEvents()
		})
	}

	if (
		document.body.classList.contains('single-components') ||
		document.body.classList.contains('single-chassis') ||
		document.body.classList.contains('single-post')
	) {
		addScrollDown()

		window.addEventListener('resize', function() {
			addScrollDown()
		})
	}

})

function addScrollDown() {
	let aside = document.querySelector('aside').offsetHeight
	let main = document.querySelector('main').offsetHeight
	let header = document.querySelector('header').offsetHeight
	
	let asideCheck = aside + header > window.innerHeight
	let mainCheck = main + header > window.innerHeight

	let scrollDown = document.querySelector('.scroll-down')
	
	if (asideCheck || mainCheck) {
		scrollDown.style.display = 'block'
	} else {
		scrollDown.style.display = 'none'
	}
}