import ready, { HTML } from './utils';
import initMobileNav from './components/burgerMobile';
import initTabs from './components/tabsInit';
import initAccordion from './components/accInit';
import initTooltip from './components/tooltip';
import initSlickCarousel from './components/slick';

ready(() => {
  HTML.classList.add('is-loaded');
  initMobileNav();
  initTabs();
  initAccordion();
  initSlickCarousel();
  initTooltip();
});
