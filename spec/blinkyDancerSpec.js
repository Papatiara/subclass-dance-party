describe('blinkyDancer', function() {

  var blinkyDancer, sambaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkingDancer(10, 20, timeBetweenSteps);
    sambaDancer = new SambaDancer(10, 20, timeBetweenSteps);
  });
  
  it('samba butterflies should have a jQuery $node object', function() {
    expect(sambaDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('samba butterflies should be fierce!', function() {
    expect(sambaDancer.sambaFerocity).to.equal(64);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('should have a "clear" method', function() {
    expect(sambaDancer).to.have.property('clear');
  });

  it('should have a "closest neighbor" method', function() {
    expect(sambaDancer).to.have.property('neighbors');
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    xit('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
