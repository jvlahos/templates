$(document).ready(function(){

    var wHeight, wWidth, midHeight, midWidth;
    function getWindowInfo(){
        wHeight = $(window).height();
        wWidth = $(window).width();
        midHeight = wHeight/2;
        midWidth = wWidth/2;
    }
    getWindowInfo();

    $(window).resize(debouncer(function(e){
        getWindowInfo();
    }));

    //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
    function debouncer( func , timeout ) {
       var timeoutID , timeout = timeout || 200;
       return function () {
          var scope = this , args = arguments;
          clearTimeout( timeoutID );
          timeoutID = setTimeout( function () {
              func.apply( scope , Array.prototype.slice.call( args ) );
          } , timeout );
       }
    }

    var sensitivity = 30;
    $(window).on('mousemove', function(e){
        var xDiff = ((midWidth - e.clientX)/midWidth)*sensitivity;
        var yDiff = ((midHeight - e.clientY)/midHeight)*sensitivity;
        $('body')
            .css('background-position-x', (50+xDiff)+"%")
            .css('background-position-y', (50+yDiff)+"%");
    });

});
