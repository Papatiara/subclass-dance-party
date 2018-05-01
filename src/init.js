$(document).ready(function() {

  $('.addDancerButton').on('click', function(event) {

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

});