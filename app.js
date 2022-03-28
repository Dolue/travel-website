var menuToggleIcon = document.getElementById('menu-toggle-icon');
var navMobile = document.getElementById('nav');
var headerElement = document.getElementById('header');
var navLinks = document.querySelectorAll('.nav-mobile .list-link');

var toggleMenu = () => {
  navMobile.classList.toggle('active');
  headerElement.classList.toggle('active');
}

menuToggleIcon.addEventListener('click', toggleMenu);

var headerScrollEvent = () => {
  if(this.scrollY >= 30){
    headerElement.classList.add('active-scroll');
  }else{
    headerElement.classList.remove('active-scroll');
  }
}

window.addEventListener('scroll', headerScrollEvent);

navLinks.forEach(link => link.addEventListener('click',()=> {
  navMobile.classList.remove('active');
  headerElement.classList.remove('active');


  let current = document.getElementsByClassName('current');
  current[0].className = current[0].className.replace(' current', "");
  link.className += " current";

}));

const sr = ScrollReveal({
  distance: '25px',
  duration: 2500
});

sr.reveal(`.image-left, .popular-destinations-data, .plan-trip-data`, {
  origin: 'left'
})

sr.reveal('.image-center', {
  origin: 'bottom'
})

sr.reveal(`.image-right, .showcase-data`,{
  origin: 'right'
})

sr.reveal('.beach-data-wrapper', {
  origin: 'bottom'
  //Interval: 250
}) 

sr.reveal('.newsletter-container', {
  origin: 'top'
})

sr.reveal(`.footer-container-inner > div, .footer-seperator, .copyright`, {
  origin: 'bottom'
  //interval: 250
})