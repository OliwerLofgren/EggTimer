"use strict";
let main = document.querySelector("main");
let wrapper = document.querySelector("#wrapper");

document.addEventListener("DOMContentLoaded", function () {
  const looseCookedButton = document.getElementById("loose_cooked");
  const hardCookedButton = document.getElementById("hard_cooked");
  const timerDisplay = document.getElementById("timer");
  let countdown; // Variable to store the timer ID
  let secondsRemaining; // Variable to store the remaining seconds

  function startTimer(minutes) {
    // Clear any previous timers
    clearTimeout(countdown);

    // Calculate the total seconds based on the provided minutes
    secondsRemaining = minutes * 60;

    // Function to update the timer display
    function updateTimer() {
      if (secondsRemaining <= 0) {
        // If time is up, display "Go get your egg!"
        timerDisplay.textContent = "Go get your egg!";
      } else {
        // Calculate and display the remaining minutes and seconds
        const minutes = Math.floor(secondsRemaining / 60);
        const seconds = secondsRemaining % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""
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

  looseCookedButton.addEventListener("click", function () {
    // Start a timer for 5 minutes when the button is clicked
    startTimer(7);
  });

  hardCookedButton.addEventListener("click", function () {
    // Start a timer for 8 minutes when the button is clicked
    startTimer(9);
  });
});

function renderStartPage(params) {

  basicLayout();
  wrapper.innerHTML += `
    <button onclick="RenderBoilPage()">Lets boil some eggs!</button>
  `;

  wrapper.querySelector("#eggPic").src = "/images/eggOutline.png";
  wrapper.querySelector("#title").src = "/images/title.png";
}

renderStartPage()

