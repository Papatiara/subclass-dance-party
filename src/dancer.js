var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
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
    borderColor: this.colors[ this.randomizeColor() ]
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
  if ( !$('body').hasClass('lineUp') ) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};

Dancer.prototype.lineUp = function() {
  this.step();
};