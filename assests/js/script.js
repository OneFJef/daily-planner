const container$ = $(".container");
const testInput$ = $(".testInput");
const t09$ = $("#t09");
const t10$ = $("#t10");
const t11$ = $("#t11");
const t12$ = $("#t12");
const t13$ = $("#t13");
const t14$ = $("#t14");
const t15$ = $("#t15");
const t16$ = $("#t16");
const t17$ = $("#t17");

const timeSlots = [09, 10, 11, 12, 13, 14, 15, 16, 17];
const timeIDs = [t09$, t10$, t11$, t12$, t13$, t14$, t15$, t16$, t17$];

// Get current day "day of the week, Month, day of the month".
let currentDay = moment().format("dddd, MMMM Do");

// Set date at the top of the page.
$("#currentDay").text(currentDay);

for (let i = 0; i < timeSlots.length; i++) {
  if (timeSlots[i] < moment().hour()) {
    timeIDs[i].addClass("past");
  } else if (timeSlots[i] == moment().hour()) {
    timeIDs[i].addClass("present");
  } else if (timeSlots[i] > moment().hour()) {
    timeIDs[i].addClass("future");
  }
}

// Pushs stored data to the text areas.
function callStoredText() {
  t09$.text(localStorage.getItem("0900"));
  t10$.text(localStorage.getItem("1000"));
  t11$.text(localStorage.getItem("1100"));
  t12$.text(localStorage.getItem("1200"));
  t13$.text(localStorage.getItem("1300"));
  t14$.text(localStorage.getItem("1400"));
  t15$.text(localStorage.getItem("1500"));
  t16$.text(localStorage.getItem("1600"));
  t17$.text(localStorage.getItem("1700"));
}

// Saves content of planner to local storage.
container$.on("click", ".btn", function (e) {
  localStorage.setItem("0900", t09$.val());
  localStorage.setItem("1000", t10$.val());
  localStorage.setItem("1100", t11$.val());
  localStorage.setItem("1200", t12$.val());
  localStorage.setItem("1300", t13$.val());
  localStorage.setItem("1400", t14$.val());
  localStorage.setItem("1500", t15$.val());
  localStorage.setItem("1600", t16$.val());
  localStorage.setItem("1700", t17$.val());
});

// Places stored data in text areas when page is loaded.
callStoredText();
