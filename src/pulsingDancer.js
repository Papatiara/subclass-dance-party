var PulsingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span class="dancer pulsing-dancer"><img src="bugs/ladybug2.webp" /></span>');
  this.translateX = 0;
  this.translateY = 0;
  this.sambaFerocity = 12;
};
PulsingDancer.prototype = Object.create( Dancer.prototype );
PulsingDancer.prototype.constructor = PulsingDancer;

PulsingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('pulse');

  this.translateX = Math.floor(Math.random() * (this.sambaFerocity - -this.sambaFerocity)) + -this.sambaFerocity;
  this.$node.css('transform', 'translate(' + this.translateX + 'px, ' + this.translateY + 'px)');  
};

