var Lakitu = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  //this.$node.css({'border-color': 'blue'});
  this.$node.addClass('characters');
  this.$node.addClass('lakitu');
  this.$node.prepend('<img class="characterImages" src= "https://www.mariowiki.com/images/thumb/e/ec/Lakitu-NSMBU.png/200px-Lakitu-NSMBU.png" />');
  //this.$node.addClass(Lakitu);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
    
};

Lakitu.prototype = Object.create(Dancer.prototype);
Lakitu.prototype.constructor = Lakitu;

Lakitu.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
  var left = this.$node[0].style.left;
  this.$node[0].style.left = (Number(left.slice(0, left.length - 2))) - 10 + 'px';

};

