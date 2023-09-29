"use strict";
let main = document.querySelector("main");
let wrapper = document.querySelector("#wrapper");

document.addEventListener("DOMContentLoaded", function () {
  const timerDisplay = document.getElementById("timer");
  let countdown; // Variable to store the timer ID
  let secondsRemaining; // Variable to store the remaining seconds

  // Define the timer durations for different options
  const timerDurations = {
    soft_small_hot: 6 * 60, // 6 minutes
    soft_medium_hot: 6 * 60 + 43, // 6 minutes 43 seconds
    soft_large_hot: 7 * 60 + 28, // 7 minutes 28 seconds

    medium_small_hot: 6 * 60 + 49, // 6 minutes 49 seconds
    medium_medium_hot: 7 * 60 + 43, // 7 minutes 43 seconds
    medium_large_hot: 8 * 60 + 35, // 8 minutes 35 seconds

    hard_small_hot: 8 * 60 + 45, // 8 minutes 45 seconds
    hard_medium_hot: 10 * 60, // 10 minutes
    hard_large_hot: 11 * 60, // 11 minutes
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

  // Example: Add event listeners for different options/buttons
  document
    .getElementById("loose_cooked")
    .addEventListener("click", function () {
      // Start the timer for the "Soft, Large, Hot water" option
      startTimer("soft_small_hot");
    });

  document.getElementById("hard_cooked").addEventListener("click", function () {
    // Start the timer for the "Soft, Large, Cold water" option
    startTimer("hard_large_hot");
  });

  // Add more event listeners for other options/buttons as needed
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
