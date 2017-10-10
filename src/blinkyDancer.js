var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = this.step;

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    
};

// return blinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldToggle();
  console.log('12:', this.$node);
  var x = this;
  var tog = function() {
    console.log('15:', x.$node);
    console.log('x:',x);
    x.$node.toggle();
    setTimeout(function() { tog(); }, timeBetweenSteps);
  };
  tog();
  tog();
  };

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.constructor = makeBlinkyDancer;

/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //makeDancer.call(this);
  var blinkyDancer = makeDancer.call(this, top, left, timeBetweenSteps);


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

};
*/

