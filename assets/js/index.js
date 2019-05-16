function redirect(event){
    window.location.href = "mailto:chazz567@gmail.com";
    event.preventDefault();
}

document.getElementById('verzendenknop').addEventListener('click', redirect);

function animatie(introText){
  introText = document.getElementById('text');
  introText.classList.add('animation');
}

window.addEventListener('load', animatie);

var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.container');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {

    for (let i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0){
            elems[i].classList.add('animation-3');
          }
        }
    }
  return {
    init: init
  };
};
animateHTML().init();
