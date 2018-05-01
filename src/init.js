var dancers = [];

$(document).ready(function() {

  $('.addDancerButton').on('click', function(event) {
    event.preventDefault();

    let danceClass = $(this).data('dancer-maker-function-name');

    var createDancer = function(danceClass) {
      let dancer = new window[danceClass](
        Math.floor( $('body').height() * Math.random() ),
        Math.floor( $('body').width() * Math.random() ),
        Math.random() * 1000
      );
      dancers.push( dancer );
      dancer.init();
      
      $(dancer.$node).on('click', function(event) {
        dancer.clear();
      });
      
    };
    createDancer(danceClass);

    if ( event.target.id === 'masse' ) {
      let bacchanalianFiends = 0;
      while ( bacchanalianFiends < 12 ) {
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
  
  $(document).on('mouseenter', '.samba-dancer', function(event) {
    event.preventDefault();
    $(this).addClass('scale');
  });
  $(document).on('mouseleave', '.samba-dancer', function(event) {
    event.preventDefault();
    $(this).removeClass('scale');
  });

});
