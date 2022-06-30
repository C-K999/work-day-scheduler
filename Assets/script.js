var current = moment();
$("#currentDay").text(current.format("dddd, MMMM Do YYYY, h:mm:ss a"));

timeTicking();

function timeTicking(){
    var setTime = setInterval(function() {
        current = moment();
        $("#currentDay").text(current.format("dddd, MMMM Do YYYY, h:mm:ss a"));
      }, 1000);
}

$( function() {
    $( "#container" ).sortable();
  } );