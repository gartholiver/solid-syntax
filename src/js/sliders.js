import Glide, { Controls, Breakpoints, Swipe } from '@glidejs/glide/dist/glide.modular.esm'
import 'lightgallery.js'
import GallerySlider from './classes/GallerySlider'
import PageSlider from './classes/PageSlider'

window.addEventListener('load', () => {
	if (document.querySelector('.testimonials')) {
		new Glide('.testimonials', {
			type: 'carousel',
		}).mount({ Controls, Swipe })
	}
	
	if (document.querySelector('.gallery')) {
		new Glide('.gallery', {
			type: 'carousel',
			perView: 4,
			gap: 20,
			peek: {
				before: 120,
				after: 120
			},
			breakpoints: {
				1280: {
					perView: 3,
					peek: {
						before: 100,
						after: 100
					},
				},
				1024: {
					perView: 2,
					gap: 15,
					peek: {
						before: 80,
						after: 80
					},
				},
				640: {
					perView: 1,
					gap: 10,
					peek: {
						before: 60,
						after: 60
					},
				}
			}
		}).mount({ Controls, Breakpoints, GallerySlider })
	
		if (document.querySelector('.gallery-container')) {
			lightGallery(document.querySelector('.gallery-container'), {
				selector: '.gallery-image'
			})
		}
	}

	if (document.querySelector('.page-slider')) {
		const pageSlider = new Glide('.page-slider', {
			type: 'carousel',
			perView: 2,
			gap: 20,
			breakpoints: {
				640: {
					perView: 1,
					gap: 10,
				}
			}
		})
		
		pageSlider.mount({ Controls, Breakpoints, PageSlider })
	}
})