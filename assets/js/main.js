 var teachers = [{
     name: "David Lac",
     university: "UC Davis",
     degree: "Bachelor's of Science",
     subjects: "Math, Biology, Chemistry",
     profile: "./assets/img/profiles/david-lac.jpg",
     bio: ""
 }];


 $(".button-collapse").sideNav();


 $(document).ready(function() {
     $('.parallax').parallax();
     $('.modal').modal();
     $('select').material_select();
     $('.scrollspy').scrollSpy({ scrollOffset: 55 });
 });

 var animateHTML1 = function () {
  var elems,
    windowHeight
  var init = function () {
    elems = document.getElementsByClassName('hiddenRight')
    windowHeight = window.innerHeight
    _addEventHandlers()
  }
  var _addEventHandlers = function () {
    window.addEventListener('scroll', _checkPosition)
    window.addEventListener('resize', init)
  }
  var _checkPosition = function () {
    for (var i = 0; i < elems.length; i++) {
      var posFromTop = elems[i].getBoundingClientRect().top
      if (posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace('hiddenRight', 'fadeRight')
      }
    }
  }
  return {
    init: init
  }
}

 var animateHTML2 = function () {
  var elems,
    windowHeight
  var init = function () {
    elems = document.getElementsByClassName('hiddenLeft')
    windowHeight = window.innerHeight
    _addEventHandlers()
  }
  var _addEventHandlers = function () {
    window.addEventListener('scroll', _checkPosition)
    window.addEventListener('resize', init)
  }
  var _checkPosition = function () {
    for (var i = 0; i < elems.length; i++) {
      var posFromTop = elems[i].getBoundingClientRect().top
      if (posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace('hiddenLeft', 'fadeLeft')
      }
    }
  }
  return {
    init: init
  }
}

animateHTML1().init();
animateHTML2().init()