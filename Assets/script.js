// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Puts current date and time into website
// var date = new Date();
// var day = date.getDate();
// var month = date.getMonth() + 1;
// var year = date.getFullYear();
// var currentDate = `${month}-${day}-${year}`;
// console.log(currentDate);
// $('#currentDay').text(currentDate);                                                                                                                                                    c
var now = dayjs();
console.log(now);
dayjs(now).format('MM-DD-YYYYTHH:mm:ss-0-05:00');
$('#currentDay').text(now);


var userInput = document.getElementsByClassName("description");
var saveButton = document.querySelector(".saveBtn");

// console.log(userInput);

// function renderLastSaved () {

//   var description = localStorage.getItem("description");

//   userInput.textContent = description;

//   console.log(description);

// }

$(function testing() {

    $(saveButton).click(function() {      
      var hello = $(userInput).val();
      console.log(hello);
      localStorage.getItem("userInput", userInput);
      localStorage.setItem("userInput", userInput);
    })
})

// $(saveButton.addEventListener("click", function(event) {
//     // event.preventDefault();
//     console.log(event);

//     var description = localStorage.getItem("description");
//     userInput.textContent = description;
//     console.log(description);

//     if (description === "") {
//       alert("test");
//       localStorage.setItem("description", description);
//       renderLastSaved();
//     } else {
//       alert("hello");
//     }


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// }));
