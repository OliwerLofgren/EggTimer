"use strict";
let main = document.querySelector("main");
let wrapper = document.querySelector("#wrapper");

document.addEventListener("DOMContentLoaded", function () {
  const timerDisplay = document.getElementById("timer");
  let countdown; // Variable to store the timer ID
  let secondsRemaining; // Variable to store the remaining seconds

  // Define the timer durations for different options
  const timerDurations = {
    Soft_Small: 6 * 60, // 6 minutes
    Soft_Medium: 6 * 60 + 43, // 6 minutes 43 seconds
    Soft_Large: 7 * 60 + 28, // 7 minutes 28 seconds

    Half_Small: 6 * 60 + 49, // 6 minutes 49 seconds
    Half_Medium: 7 * 60 + 43, // 7 minutes 43 seconds
    Half_Large: 8 * 60 + 35, // 8 minutes 35 seconds

    Hard_Small: 8 * 60 + 45, // 8 minutes 45 seconds
    Hard_Medium: 10 * 60, // 10 minutes
    Hard_Large: 11 * 60, // 11 minutes
  };

  function startTimer(option) {
    // Clear any previous timers
    clearTimeout(countdown);

    // Get the timer duration based on the selected option
    const duration = timerDurations[option];

    if (duration === undefined) {
      // Handle invalid options
      timerDisplay.textContent = "Invalid option!";
      return;
    }

    // Calculate the total seconds based on the selected duration
    secondsRemaining = duration;

    // Function to update the timer display
    function updateTimer() {
      if (secondsRemaining <= 0) {
        // If time is up, display "Go get your egg!"
        timerDisplay.textContent = "Go get your egg!";
      } else {
        // Calculate and display the remaining minutes and seconds
        const minutes = Math.floor(secondsRemaining / 60);
        const seconds = secondsRemaining % 60;
        timerDisplay.textContent = `${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;

        // Decrement the remaining seconds
        secondsRemaining--;

        // Schedule the next update in 1 second
        countdown = setTimeout(updateTimer, 1000);
      }
    }

    // Initial call to updateTimer to set the initial display and start the timer
    updateTimer();
  }
  // document.getElementById("startTimer").addEventListener("click", function () {
  //   startTimer("id");
  // });
});

function renderStartPage(params) {
  basicLayout();
  wrapper.innerHTML += `
    <button onclick="RenderBoilPage()">Lets boil some eggs!</button>
  `;

  wrapper.querySelector("#eggPic").src = "/images/eggOutline.png";
  wrapper.querySelector("#title").src = "/images/title.png";
}

renderStartPage();
