describe('Lakitu', function() {

  var lakitu, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    lakitu = new Lakitu(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(lakitu.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(lakitu.$node, 'toggle');
    lakitu.step();
    expect(lakitu.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(lakitu, 'step');
      expect(lakitu.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(lakitu.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(lakitu.step.callCount).to.be.equal(2);
    });
  });
});
