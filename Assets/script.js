
// Displays current date and time into website
var today = dayjs();
var currentHour = dayjs().hour();
var time = dayjs().format('hh:mm:ss');
$('#currentDay').text(today.format('MMM D, YYYY, hh:mm:ss'));


    //A function being called for every row class div (each time block)
$(".row").each(function() {
    //Using parse to make the id a number
  var hour = parseInt($(this).attr("id"));
    //Retrieving previously saved item from local storage
  var goodbye = localStorage.getItem(hour);
    //Loop to add/remove classes when comparing actual time to hour in calendar
  if (currentHour < hour) {
  $(this).removeClass("past present").addClass("future");
  } else if (currentHour > hour) {
  $(this).removeClass("future present").addClass("past");  
  } else {
  $(this).removeClass("past future").addClass("present");
  }

  $(this).children(".description").text(goodbye);
    //A function to save the user inputed text
  $(this).children(".saveBtn").click(function (event) {
    event.stopPropagation();
    var goodbye = $(this).siblings(".description").val();
    localStorage.setItem(hour, goodbye);
  });
})