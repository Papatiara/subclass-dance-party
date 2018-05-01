var SambaDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="dancer samba-dancer"></span>');
};
SambaDancer.prototype = Object.create( Dancer.prototype );
SambaDancer.prototype.constructor = SambaDancer;

SambaDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('pulse');
};
