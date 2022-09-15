import 'Plugins/burgerPlugin';
import 'Plugins/responsiveHelper';

export default function initMobileNav() {
	ResponsiveHelper.addRange({
		'..1365': {
			on: function() {
				jQuery('body').mobileNav({
					menuActiveClass: 'nav-active',
					menuOpener: '.header__nav-opener',
					menuDrop: '.header__nav-drop',
					hideOnClickOutside: true
				});
			},
			off: function() {
				jQuery('body').mobileNav('destroy');
			}
		}
	});
}