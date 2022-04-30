import 'lightgallery.js'

window.addEventListener('load', function() {
	if (document.getElementById('gallery-container')) {
		lightGallery(document.getElementById('gallery-container'))
	}
})