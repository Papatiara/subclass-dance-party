var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"><img src="bugs/sad.gif" /></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
  this.exists = true;
  this.linedUp = false;
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
    backgroundColor: this.colors[ this.randomizeColor() ],
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

    if ( this.top < -150 || this.top > $(window).height() + 150 || this.left < -150 || this.left > $(window).width() + 150 ) {
      this.clear();
    }

    if ( !this.linedUp ) {
      setTimeout(this.step.bind(this), this.timeBetweenSteps);
    }

  }

  // if ( !$('body').hasClass('lineUp') ) {

  //   setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //   this.setPosition();
    
  //   console.log(this.top);
  // }

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
  console.log('One got away!!');
  this.exists = false;
  this.$node.remove();
};

