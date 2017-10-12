$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      ( Math.random() * 1000 ) + 300
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpDancers').on('click', function(event) {
    var dancersOnFloor = $('.dancer');
    var bodyWidth = $('body').width();
    var widthBetween = bodyWidth / dancersOnFloor.length;
    var midLine = $('body').height() / 2;
    //here we need to divide bodyWidth by number of items
    // then insert new ones at each stop
    for (var i = 0; i < dancersOnFloor.length; i++) {
      dancersOnFloor[i].style.left = widthBetween * (i) + 'px';
      dancersOnFloor[i].style.top = midLine + 'px';
    }

  });

  $('.lakitu').hover(function(event) {
  }, function(event) { console.log(2)});;

  $('.collisions').on('click', function(event) {
    for (var i = 0; i < dancers.length - 1; i++) { 
      for (var j = i + 1; j < dancers.length; j++) {
        var dancerOne = dancers[i].$node[0].style;
        var dancerOneLeft = Number(dancerOne.left.slice(0, dancerOne.left.length - 2));
        var dancerOneTop = Number(dancerOne.top.slice(0, dancerOne.top.length - 2));

        var dancerTwo = dancers[j].$node[0].style;
        var dancerTwoLeft = Number(dancerTwo.left.slice(0, dancerTwo.left.length - 2));
        var dancerTwoTop = Number(dancerTwo.top.slice(0, dancerTwo.top.length - 2));
        
        var leftDif = Math.abs(dancerOneLeft - dancerTwoLeft);
        var topDif = Math.abs(dancerOneTop - dancerTwoTop);
        var distance = Math.sqrt(topDif * topDif + leftDif * leftDif);
 
        if (distance < 150) {
          console.log('too close!');
          dancers[i].$node.toggle();
          dancers[j].$node.toggle();
        }
      }
    }  
  });
});

