var LowlyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span class="dancer lowly-dancer"><img src="bugs/worm.gif" /></span>');
  this.top = $(window).height() - 100;
  this.translateX = 0;
  this.translateY = 0;
  this.sambaFerocity = 5;
};
LowlyDancer.prototype = Object.create( Dancer.prototype );
LowlyDancer.prototype.constructor = LowlyDancer;

LowlyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.translateX = Math.floor(Math.random() * (this.sambaFerocity - -this.sambaFerocity)) + -this.sambaFerocity;
  this.$node.css('transform', 'translate(' + this.translateX + 'px, ' + this.translateY + 'px)');  
};

