// For setting up the current date
var current = moment();
$("#currentDay").text(current.format("dddd, MMMM Do YYYY, h:mm:ss a"));

var currentHr = current.format("HH"); // Take the current hour in 24-hour format, will be useful later

// For color coding the time blocks 
function ccBlockset(hour){

    // For the before noon
    for(var i=9;i<13;i++){
        if(hour>i){
            document.getElementById(i).setAttribute("class","description col-md-10 past");
        }else if(hour<i){
            document.getElementById(i).setAttribute("class","description col-md-10 future");
        }else if(hour==i){
            document.getElementById(i).setAttribute("class","description col-md-10 present");
        }
    }

    // For afternoon
    for(var i=1;i<8;i++){
        if(hour>i+12){
            document.getElementById(i).setAttribute("class","description col-md-10 past");
        }else if(hour<i+12){
            document.getElementById(i).setAttribute("class","description col-md-10 future");
        }else if(hour==i+12){
            document.getElementById(i).setAttribute("class","description col-md-10 present");
        }
    }
}

timeTicking();
ccBlockset(currentHr);

// I had extra time a functional clock was set up
function timeTicking(){
    var setTime = setInterval(function() {
        current = moment();
        $("#currentDay").text(current.format("dddd, MMMM Do YYYY, h:mm:ss a"));
      }, 1000);
}