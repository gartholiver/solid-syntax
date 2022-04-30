export default class {
	constructor() {
		this.$clear = $('<span class="clearButton"><svg class="clearIcon" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.00002L13.7742 13.7742M1 13.7742L13.7742 1" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>')

		let selectors = [
			'.gform_wrapper input:not([type="hidden"])',
			'.gform_wrapper select',
			'.gform_wrapper textarea'
		]

		this.selectors = selectors.join(', ')

		$('.gform_wrapper select').each(function() {
			$(this).parent().addClass('select-ctn')
		})
	}

	setEvents() {
		const self = this

		$(this.selectors).each(function() {
			let $clear = self.$clear.clone()
			$(this).after($clear)

			$clear.on('click', () => {
				$(this).val('')
				self.moveLabel($(this), 'remove')
			})

			if ($(this).val() !== '') {
				self.moveLabel($(this))
			}
		})

		$(document).on('focus', this.selectors, function() {
			self.moveLabel($(this))
		})

		$(document).on('blur', this.selectors, function() {
			if (!self.checkPhone($(this)) || $(this).val() === '') {
				self.moveLabel($(this), 'remove')
			}
		})

		$('.gform_wrapper').each(function() {
			if ($(this).find('.gf_progressbar_wrapper').length) {
				$(this).addClass('has_progress_bar')
			}
		})
	}

	moveLabel($this, action = 'add') {
		if ($this.parent().hasClass('ginput_container')) {
			if (action === 'remove') {
				$this.parent().parent().removeClass('label_moved')
			} else {
				$this.parent().parent().addClass('label_moved')
			}
		} else {
			if (action === 'remove') {
				$this.parent().removeClass('label_moved')
			} else {
				$this.parent().addClass('label_moved')
			}
		}
	}

	checkPhone($field) {
		if ($field.attr('type') === 'tel') {
			let val = $field.val().replace(/\D/g,'')
			return val.length === 10
		} else {
			return true
		}
	}
}