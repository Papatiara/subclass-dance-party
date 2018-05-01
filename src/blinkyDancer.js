var BlinkingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span class="dancer blinking-dancer"></span>');
};
BlinkingDancer.prototype = Object.create( Dancer.prototype );
BlinkingDancer.prototype.constructor = BlinkingDancer;

BlinkingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
