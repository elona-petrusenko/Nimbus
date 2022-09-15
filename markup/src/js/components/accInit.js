import 'Plugins/accPlugin';
import 'Plugins/responsiveHelper';

export default function initAccordion() {
	jQuery('.accordion').slideAccordion({
		opener: '.opener',
		slider: '.slide',
		animSpeed: 300
	});

	jQuery('.footer-accordion').slideAccordion({
		opener: '.opener',
		slider: '.slide',
		animSpeed: 300
	});

	ResponsiveHelper.addRange({
		'..1365': {
			on: function() {
				jQuery('.header-accordion').slideAccordion({
					opener: '.opener',
					slider: '.slide',
					animSpeed: 300,
					activeClass: 'acc-active'
				});
			},
			off: function() {
				jQuery('.header-accordion').slideAccordion('destroy');
			}
		}
	});
}
