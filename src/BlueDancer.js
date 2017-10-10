var BlueDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  //this.$node.css({'border-color': 'blue'});
  this.$node.addClass('lakitu');
  this.$node.prepend('<img id="lakitu" src= "https://www.mariowiki.com/images/thumb/e/ec/Lakitu-NSMBU.png/200px-Lakitu-NSMBU.png" />');
  //this.$node.addClass(blueDancer);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
    
};

BlueDancer.prototype = Object.create(Dancer.prototype);
BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
};

