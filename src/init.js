$(document).ready(function() {

  var dancers = [];

  $('.addDancerButton').on('click', function(event) {
    event.preventDefault();

    let danceClass = $(this).data('dancer-maker-function-name');

    var createDancer = function(danceClass) {
      let dancer = new window[danceClass](
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );
      
      dancer.setColor();
      dancer.setPosition();
      dancer.step();

      $('body').append(dancer.$node);
      dancers.push( dancer );
    };
    createDancer(danceClass);

    if ( event.target.id === 'masse' ) {
      let bacchanalianFiends = 0;
      while ( bacchanalianFiends < 100 ) {
        bacchanalianFiends++;
        createDancer(danceClass);
      }
    }

  });

  $('#lineUp').on('click', function(event) {
    event.preventDefault();
    
    $('body').toggleClass('lineUp');
    
    for ( let i = 0; i < dancers.length; i++ ) {
      dancers[i].lineUp();
    }
    
  });

});