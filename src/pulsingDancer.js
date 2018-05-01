var PulsingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span class="dancer pulsing-dancer"></span>');
};
PulsingDancer.prototype = Object.create( Dancer.prototype );
PulsingDancer.prototype.constructor = PulsingDancer;

PulsingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('pulse');
};
