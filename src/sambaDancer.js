var SambaDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="dancer samba-dancer"></span>');
  this.translateX = 0;
  this.translateY = 0;
  this.sambaFerocity = 64;
};
SambaDancer.prototype = Object.create( Dancer.prototype );
SambaDancer.prototype.constructor = SambaDancer;

SambaDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('pulse');
  
  this.translateX = Math.floor(Math.random() * (this.sambaFerocity - -this.sambaFerocity)) + -this.sambaFerocity;
  this.translateY = Math.floor(Math.random() * (this.sambaFerocity - -this.sambaFerocity)) + -this.sambaFerocity;
  this.$node.css('transform', 'translate(' + this.translateX + 'px, ' + this.translateY + 'px)');  
};
