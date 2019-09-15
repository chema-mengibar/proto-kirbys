import getBreakpoint  from './breakpoints.js'
import debounce from 'lodash/debounce';


function openNavigation(){
  document.getElementById("nav").classList.toggle('open');
  document.getElementById("nav-trigger").classList.toggle('open');
  console.log('nav change state')
}



document.addEventListener('DOMContentLoaded', () => {
  console.log('document is ready now!');

  document.getElementById("nav-trigger").addEventListener('click', openNavigation, false);

});

window.addEventListener('resize', debounce(() => {
  console.log('breakpoint is: ', getBreakpoint(window.innerWidth));
}, 250));


/*
// Scroll avoid
https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
 */


