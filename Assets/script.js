// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Puts current date and time into website
var today = dayjs();
var currentHour = dayjs().hour();
var time = dayjs().format('hh:mm:ss');
$('#currentDay').text(today.format('MMM D, YYYY, hh:mm:ss'));



  $(".row").each(function() {
    //Breaking th
    var hour = parseInt($(this).attr("id"));

    var goodbye = localStorage.getItem(hour);

    if (currentHour < hour) {
      
    $(this).removeClass("past present").addClass("future");
    } else if (currentHour > hour) {
      
    $(this).removeClass("future present").addClass("past");  
    } else {
      
    $(this).removeClass("past future").addClass("present");
    }


    $(this).children(".description").text(goodbye);

    $(this).children(".saveBtn").click(function (event) {

      event.stopPropagation();
  
      var goodbye = $(this).siblings(".description").val();
  
        console.log(goodbye);
  
      localStorage.setItem(hour, goodbye);
  
    });
    })


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

// $(function addLabel() {

//   if (time < hour) {
//     $("div").addClass("past");
//   } if (time === hour) {
//     $("div").addClass("present");
//   } if (time > hour) {
//     $("div").addClass("future");
//   }
// });

  // if time > hour then past
  // if time = hour then present
  // if time < hour then future

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// }));
