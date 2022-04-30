export default function(Glide, Components, Events) {
	let Component = {
		mount() {
			this.setVisibleClasses()
		},

		setVisibleClasses() {
			const active = Components.Html.slides[Glide.index]

			let perView = Glide.settings.perView;

			// Add visible class to active slide
			active.classList.add('glide__slide--visible')

			// Add visible classes to next siblings
			var next = active.nextElementSibling
			if (next) {
				next.classList.add('glide__slide--visible')

				for (let i = 0; i < perView - 2; i++) {
					next = next.nextElementSibling
					if (next) next.classList.add('glide__slide--visible')
				}
			}

			// Add visible classes to previous siblings
			var prev = active.previousElementSibling
			if (prev) {
				prev.classList.remove('glide__slide--visible')

				for (let i = 0; i < 2 - 1; i++) {
					prev = prev.previousElementSibling
					if (prev) prev.classList.add('glide__slide--visible')
				}
			}
		}
	}

	Events.on('run', () => {
		Component.setVisibleClasses()
	})

	Events.on(['resize', 'translate.jump'], () => {
		const glideEl = Components.Html.root

		// Remove visible classes
		glideEl.querySelectorAll('.glide__slide--visible').forEach(slide => {
			slide.classList.remove('glide__slide--visible')
		})

		Component.setVisibleClasses()
	})

	return Component
}