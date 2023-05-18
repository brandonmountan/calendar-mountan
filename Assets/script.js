// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Puts current date and time into website
var today = dayjs();
var time = dayjs().format('hh:mm:ss');
$('#currentDay').text(today.format('MMM D, YYYY, hh:mm:ss'));




var userInput = document.querySelectorAll(".description");
var saveButton = document.querySelectorAll(".saveBtn");




// console.log(userInput);
// console.log(saveButton);

// renderLastSaved();

// function renderLastSaved () {

//   var goodbye = localStorage.getItem("hello");

//   for (let i = 0; i < userInput.length; i++) {

//     userInput[i].textContent = goodbye;

//   };
//   console.log(goodbye);
// };

$(function testing() {

    saveButton.onclick(function(event) {
      event.preventDefault();   
      console.log(event.target);
      // var hello = $(userInput).val();
      // console.log(hello);
      // localStorage.setItem("hello", hello);

    // function renderLastSaved() {
    //   for (let i = 0; i < userInput.length; i++) {

    //       userInput[i].textContent = goodbye;

    //       localStorage.setItem("goodbye", goodbye);

    //       console.log(goodbye);

    //   }
    //   // console.log(goodbye);
    //   // for (let i = 0; i < saveButton.length; i++) {

    //   //   saveButton[i].event = hey;

    //   // }

    // }
    //   var goodbye = localStorage.getItem("goodbye");

    //   renderLastSaved();
    // })
});
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
