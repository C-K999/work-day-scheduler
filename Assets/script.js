// Saving events
$(".saveBtn").click(function (event) {
    event.preventDefault();

    var desc = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id").split("-")[1];
    

    localStorage.setItem(hour, desc);

});

// Accessing local storage
$("#hour-08 .description").val(localStorage.getItem("08"));
$("#hour-09 .description").val(localStorage.getItem("09"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));
$("#hour-18 .description").val(localStorage.getItem("18"));
$("#hour-19 .description").val(localStorage.getItem("19"));

// For setting up the current date
var current = moment();
$("#currentDay").text(current.format("dddd, MMMM Do YYYY"));

var currentHr = current.format("HH"); // Take the current hour in 24-hour format, will be useful later

// For color coding the time blocks 
function ccBlockset(hour){

    // For the before noon
    for(var i=8;i<20;i++){
        if(hour>i){
            document.getElementById(i).setAttribute("class","description col-md-10 past");
        }else if(hour<i){
            document.getElementById(i).setAttribute("class","description col-md-10 future");
        }else if(hour==i){
            document.getElementById(i).setAttribute("class","description col-md-10 present");
        }
    }

}

// I had extra time a functional clock was set up
function timeTicking(){
    var setTime = setInterval(function() {
        current = moment();
        $("#currentDay").text(current.format("dddd, MMMM Do YYYY, h:mm:ss a"));
      }, 1000);
}

timeTicking();
ccBlockset(currentHr);