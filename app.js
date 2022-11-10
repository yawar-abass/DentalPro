const toggle = document.querySelector('.toggleMenu');
const navigation = document.querySelector('.navigation');
function toggleMenu(x) {
  x.classList.toggle("change");
  navigation.classList.toggle('active');

}

const togglebtn = () => {
  navigation.classList.toggle('active');
  toggle.classList.toggle("change");
}


var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});