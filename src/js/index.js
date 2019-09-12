import getBreakpoint  from './breakpoints.js'
import debounce from 'lodash/debounce';

document.addEventListener('DOMContentLoaded', () => {
  console.log('document is ready now!');
});

window.addEventListener('resize', debounce(() => {
  console.log('breakpoint is: ', getBreakpoint(window.innerWidth));
}, 250));
