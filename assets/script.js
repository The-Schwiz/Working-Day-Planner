const currentDayEl = $('#currentDay');
const currentTime = dayjs().startOf('hour');

const nineAmEl = $('#hour-9');
const tenAmEl = $('#hour-10');
const elevenAmEl = $('#hour-11');
const twelvePmEl = $('#hour-12');
const onePmEl = $('#hour-13');
const twoPmEl = $('#hour-14');
const threePmEl = $('#hour-15');
const fourPmEl = $('#hour-16');
const fivePmEl = $('#hour-17');

// Do we need this?:
// const pastEl = isBefore(currentTime);
// const presentEl = currentTime;
// const futureEl = isAfter(currentTime);

//Displays date and time in header
function displayDateAndTime() {
  const rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDayEl.text(rightNow);
}

// Working through adding style based on if time is past present or future
function compareToCurrentTime () {
const currentTime = dayjs().startOf('hour');

// Should I set each of these to store a 24 hr time value?
const nineAmEl = "09:00:00"
const tenAmEl = "10:00:00"
const elevenAmEl = "11:00:00";
const twelvePmEl = "12:00:00";
const onePmEl = "13:00:00";
const twoPmEl = "14:00:00";
const threePmEl = "15:00:00";
const fourPmEl = "16:00:00";
const fivePmEl = "17:00:00";

// Or should I store these in array with key/value pair?

}
 
//Example of comparing times:
// if (projectDate.isBefore(today)) {
//   rowEl.addClass('project-late');
// } else if (projectDate.isSame(today)) {
//   rowEl.addClass('project-today');
// }

compareToCurrentTime ();
displayDateAndTime();
setInterval(displayDateAndTime, 1000);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  

  // TODO: Add code to display the current date in the header of the page.
});
