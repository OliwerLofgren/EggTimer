function RenderBoilPage() {
  basicLayout();
  wrapper.innerHTML += `
    <div id="box">
        <div class="optionDiv">
            <p> How would you like your egg? </p>
            <div id="soft" class="option">Soft</div>
            <div id="half" class="option">Half</div>
            <div id="hard" class="option">Hard</div>
        </div>

        <div class="optionDiv">
            <p> What is the size of the egg? </p>
            <div id="s" class="option">Small</div>
            <div id="m" class="option">Medium</div>
            <div id="l" class="option">Large</div>
        </div>

        </div>
    <button id="startTimer"> Start boiling </button>
  `;

  wrapper.querySelector("#eggPic").src = "/images/eggOutline.png";
  wrapper.querySelector("#title").src = "/images/NewTitle.png";

  let chosenOpt = {};

  let option = wrapper.querySelectorAll(".optionDiv");

  option.forEach((opt) => {
    opt.addEventListener("click", (event) => {
      if (
        event.target.classList == "optionDiv" ||
        event.target.localName === "p"
      ) {
      } else {
        event.target.classList.toggle("chosen");
      }

      let parent = event.target.parentElement;
      let childs = parent.querySelectorAll("div");

      childs.forEach((child) => {
        if (child.classList == "option chosen") {
          if (
            child.textContent === "Soft" ||
            child.textContent === "Half" ||
            child.textContent === "Hard"
          ) {
            chosenOpt.liking = child.textContent;
          }

          if (
            child.textContent === "Small" ||
            child.textContent === "Medium" ||
            child.textContent === "Large"
          ) {
            chosenOpt.size = child.textContent;
          }
        }
      });
    });
  });

  wrapper.querySelector("#startTimer").addEventListener("click", () => {
    if (chosenOpt.liking !== "" && chosenOpt.size !== "") {
      let chosen = document.querySelectorAll(".chosen");
      if (chosen.length !== 2) {
        popUp("You have to choose two options!");
      } else {
        StartTimer(chosenOpt);
      }
    } else {
      popUp("You have to choose two options!");
    }
  });
}

function StartTimer(opt) {
  basicLayout();

  let divDom;
  divDom = `${opt.liking}_${opt.size}`;

  wrapper.innerHTML += `
        <div id="timer">
            <p id="promp">Fun facts about eggs:</p>
            <p id="funFact"></p>
            <p id="feedback"></p>
            <div id="clock"> 00:00 </div>
        </div>
    `;
  wrapper.querySelector("#eggIcon").classList.add("wiggle");

  wrapper.querySelector("#eggPic").src = "/images/eggOutline.png";
  wrapper.querySelector("#title").src = "/images/NewTitle.png";

  wrapper.querySelector("#eggIcon").style.position = "relative";
  wrapper.querySelector("#eggIcon").style.bottom = "35px";

  displayNextFact(op);
  document.querySelector("#funFact").textContent = "Fun fact";
  timer_function(divDom);
}
let op = true;

let i = 0;

function displayNextFact(opt) {
  const funFact = wrapper.querySelector("#funFact");

  if (opt) {
    if (i < eggInfo.length) {
      // Apply a fade-out effect
      funFact.style.opacity = 0;

      // Wait for the fade-out transition to complete
      setTimeout(() => {
        funFact.textContent = eggInfo[i];

        // Apply a fade-in effect
        funFact.style.opacity = 1;
        funFact.style.transitionProperty = "opacity";
        funFact.style.transitionDuration = "2s";

        i++;
        setTimeout(displayNextFact, 3000);
      }, 1000);
    } else {
      i = 0;
      displayNextFact();
    }
  }
}

function timer_function(option) {
  const timerDisplay = document.getElementById("clock");
  let countdown; // Variable to store the timer ID
  let secondsRemaining; // Variable to store the remaining seconds

  // Define the timer durations for different options
  const timerDurations = {
    Soft_Small: 6 * 60, // 6 minutes
    // Soft_Small: 5, // 6 minutes
    Soft_Medium: 6 * 60 + 43, // 6 minutes 43 seconds
    Soft_Large: 7 * 60 + 28, // 7 minutes 28 seconds

    Half_Small: 6 * 60 + 49, // 6 minutes 49 seconds
    Half_Medium: 7 * 60 + 43, // 7 minutes 43 seconds
    Half_Large: 8 * 60 + 35, // 8 minutes 35 seconds

    // Hard_Small: 8 * 60 + 45, // 8 minutes 45 seconds
    Hard_Small: 50,
    Hard_Medium: 10 * 60, // 10 minutes
    Hard_Large: 11 * 60, // 11 minutes
  };

  // Get the timer duration based on the selected option
  clearTimeout(countdown);
  const duration = timerDurations[option];

  secondsRemaining = duration;

  // Function to update the timer display
  function updateTimer() {
    if (secondsRemaining <= 0) {
      popUp("The time is up!", "fun");
      wrapper.querySelector("#eggIcon").classList.remove("wiggle");
      displayNextFact(false);
      wrapper.querySelector("#promp").textContent = "";

      animateBubbles(false);
      // Remove the "bubbles" container from the DOM
      const bubblesContainer = document.getElementById("bubbles");
      if (bubblesContainer) {
        bubblesContainer.remove();
      }
    } else {
      // Calculate and display the remaining minutes and seconds
      const minutes = Math.floor(secondsRemaining / 60);
      const seconds = secondsRemaining % 60;

      timerDisplay.textContent = `${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds} `;

      // Check if the option does not include "Soft"
      const isSoftBoiled = option.includes("Soft");

      // Calculate the percentage of time remaining
      const percentageRemaining = (secondsRemaining / duration) * 100;

      // Update yolk color based on percentageRemaining and option
      const yolk = document.getElementById("yolk");
      if (!isSoftBoiled && percentageRemaining < 25) {
        // When there's less than 10% of time remaining and not "Soft," make yolk more orange
        yolk.style.backgroundColor = "#FFB969";
      } else {
        // Otherwise, keep it yellow
        yolk.style.backgroundColor = "rgb(255, 255, 129)";
      }

      // Decrement the remaining seconds
      secondsRemaining--;

      // Schedule the next update in 1 second
      countdown = setTimeout(updateTimer, 1000);
      animateBubbles(true);
    }
  }
  secondsRemaining = duration;

  updateTimer();
}

let bubbles;
let createBubbles = true; // Flag to control bubble creation

function createBubble(done) {
  if (!done) {
    clearInterval(bubbles);
  }

  const wrapper = document.getElementById("wrapper");
  if (createBubbles && wrapper) {
    // Create the bubbles container
    const bubblesContainer = document.createElement("div");
    bubblesContainer.id = "bubbles";

    wrapper.appendChild(bubblesContainer);

    // Create the bubble div
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 5 + 2}s`; // Random duration between 2 to 7 seconds
    bubblesContainer.appendChild(bubble);

    // Remove the bubble element once it reaches the top
    bubble.addEventListener("animationiteration", () => {
      bubble.remove();
    });
  }
}

function animateBubbles(done) {
  if (!done) {
    clearInterval(bubbles);
    createBubbles = false; // Set the flag to false when the timer is done
  } else {
    bubbles = setInterval(() => createBubble(false), 1000);
    createBubbles = true; // Set the flag to true when starting the animation
  }
}
