$(document).ready(function() {

  $('.addDancerButton').on('click', function(event) {

    var danceClass = $(this).data('dancer-maker-function-name');
    var dancer = new window[danceClass](
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    
    dancer.setColor();
    dancer.setPosition();
    dancer.step();

    $('body').append(dancer.$node);


    if ( event.target = $('#masse') ) {
      let bacchanalianFiends = 0;
      while ( bacchanalianFiends < 100 ) {
        bacchanalianFiends++;

        let dancer = new window[danceClass](
          $('body').height() * Math.random(),
          $('body').width() * Math.random(),
          Math.random() * 1000
        );
        
        dancer.setColor();
        dancer.setPosition();
        dancer.step();

        $('body').append(dancer.$node);
      }
    }


  });

});