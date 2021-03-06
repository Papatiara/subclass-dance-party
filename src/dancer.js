var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"><img src="bugs/sad.gif" /></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
  this.exists = true;
  this.linedUp = false;
  this.nearestNeighbor = {};
};

Dancer.prototype.init = function() {
  this.setColor();
  this.setPosition();
  this.step();

  $('body').append(this.$node);
};


Dancer.prototype.randomizeColor = function() {
  let min = Math.ceil(0);
  let max = Math.floor( this.colors.length );
  let seed = Math.floor(Math.random() * (max - min)) + min;
  return seed;
};

Dancer.prototype.setColor = function() {
  this.$node.css({
    // backgroundColor: this.colors[ this.randomizeColor() ],
    borderColor: this.colors[ this.randomizeColor() ],
    zIndex: this.randomizeColor()
  });
};

Dancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function() {

  if ( this.exists ) {
    this.setPosition();
    this.neighbors();

    if ( this.top < -150 || this.top > $(window).height() + 150 || this.left < -150 || this.left > $(window).width() + 150 ) {
      this.clear();
      console.log('One got away!!');
    }

    if ( !this.linedUp ) {
      setTimeout(this.step.bind(this), this.timeBetweenSteps);
    }

  }
};

Dancer.prototype.neighbors = function() {
  if ( dancers.length >= 2 ) {
    for ( let i = 0; i < dancers.length; i++ ) {
      let hero = dancers[i];
      let population = dancers.filter( function( dancer ) {
        return dancer !== dancers[i];
      });
      for ( let j = 0; j < population.length; j++ ) {
        let dancer = population[j];
        
        let heroTop = hero.top + hero.$node.height() / 2;
        let heroLeft = hero.left + hero.$node.width() / 2;

        let dancerTop = dancer.top + dancer.$node.height() / 2;
        let dancerLeft = dancer.left + dancer.$node.width() / 2;
        
        let distanceToHero = Math.sqrt( Math.pow((heroTop - dancerTop), 2) + Math.pow(( heroLeft - dancerLeft), 2) );

        if ( !hero.nearestNeighbor.is || hero.nearestNeighbor.distance > distanceToHero ) {
          hero.nearestNeighbor.is = dancer;
          hero.nearestNeighbor.distance = distanceToHero;
          dancer.nearestNeighbor.is = hero;
          dancer.nearestNeighbor.distance = distanceToHero;
        }
      }
    }
    if ( this.nearestNeighbor.is.exists ) {
      if ( this.nearestNeighbor.distance === this.nearestNeighbor.is.nearestNeighbor.distance ) {
        var teamColor = this.colors[ this.randomizeColor() ];
        this.$node.css('background-color', teamColor);
        this.nearestNeighbor.is.$node.css('background-color', teamColor);
      } else {
        this.$node.css('background-color', 'transparent');
      }
    }
  }
};

Dancer.prototype.lineUp = function() {
  if ( this.linedUp ) {
    this.linedUp = false;
  } else {
    this.linedUp = true;
  }
  this.step();
};

Dancer.prototype.clear = function() {
  this.$node.remove();
  this.exists = false;
  window.dancers = dancers.filter( function( dancer ) {
    return dancer.exists;
  });
  this.neighbors();
};

Dancer.prototype.clearAll = function() {
  $('#weep-day').trigger('pause');
  musicIsPlaying = false;
  $('#raptor').trigger('click');
  let dancers = window.dancers.slice(0);
  for ( let i = 0; i < dancers.length; i++ ) {
    dancers[i].clear();
  }
};

