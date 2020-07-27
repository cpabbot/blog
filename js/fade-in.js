(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.scroll-fade');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
        
        // console.log(i + ": " + positionFromTop + " - " + windowHeight);
        if (positionFromTop - windowHeight <= -100) {
          element.classList.add('fade-in');
          element.classList.remove('scroll-fade');
        }
      }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();
  })();