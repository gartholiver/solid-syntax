export default function(Glide, Components, Events) {
	let Component = {
		mount() {
			this.setVisibleClasses()
		},

		setVisibleClasses() {
			const active = Components.Html.slides[Glide.index]

			// Add visible class to active slide
			active.classList.add('glide__slide--visible')

			// Add visible classes to next 2 siblings
			var next = active.nextElementSibling
			if (next) {
				next.classList.add('glide__slide--visible')

				for (let i = 0; i < 2; i++) {
					next = next.nextElementSibling
					if (next) next.classList.add('glide__slide--visible')
				}
			}

			// Add visible classes to previous sibling
			var prev = active.previousElementSibling
			if (prev) prev.classList.remove('glide__slide--visible')
		}
	}

	let sliderProgression = () => {
		let container = document.querySelector('.page-slider')
		let count = container.dataset.count
		let percentage = ((Glide.index + 1) / count) * 100

		container.querySelector('.progress').style.width = percentage + '%'
	}

	Events.on('run', () => {
		Component.setVisibleClasses()
		sliderProgression()
	})

	Events.on('mount.after', () => {
		Component.setVisibleClasses()
		sliderProgression()
	})

	

	return Component
}