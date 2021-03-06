var dancers = [];
var musicIsPlaying = false;

$(document).ready(function() {

  $('.addDancerButton').on('click', function(event) {
    event.preventDefault();

    if ( !musicIsPlaying ) {
      $('#weep-day').trigger('play');
      musicIsPlaying = true;  
    }

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
  
  $('#raptor').raptorize({
    // 'delayTime': 5000,
    'enterOn': 'click'
  });
  
  $(document).on('click', '#endParty', function(event) {
    Dancer.prototype.clearAll();
  });

});
