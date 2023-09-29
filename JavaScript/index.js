function RenderBoilPage() {
    basicLayout();
    wrapper.innerHTML += `
    <div>
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
    <button id="startTimer"> Lets start boil some eggs! </button>
  `;

    wrapper.querySelector("#eggPic").src = "/images/eggOutline.png";
    wrapper.querySelector("#title").src = "/images/title.png";

    let chosenOpt = {};

    let option = wrapper.querySelectorAll(".optionDiv");

    option.forEach((opt) => {
        opt.addEventListener("click", (event) => {
            event.target.classList.toggle("chosen");

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
        if (chosenOpt.liking && chosenOpt.size && chosenOpt.temp !== "") {
            console.log(document.querySelectorAll(".chosen"));
            let chosen = document.querySelectorAll(".chosen");
            if (chosen.length !== 3) {
                console.log("Too many or too little");
                console.log(chosenOpt);
                popUp("You can only chose one of each option!");
            }
            StartTimer(chosenOpt);
        } else {
            console.log("Too many or too little");
            console.log(chosenOpt);
            popUp("You can only chose one of each option!");
        }
    });
}

function StartTimer(opt) {
    basicLayout();

    let divDom;
    divDom = `${opt.liking}_${opt.size}`;

    wrapper.innerHTML += `
        <div id="timer">
            <p id="funFact"></p>
            <p id="feedback"></p>
            <div id="clock"> 00:00 </div>
            <button id="stopButton">Stop</button>
        </div>
    `;
    wrapper.querySelector("#eggIcon").classList.add("wiggle");

    wrapper.querySelector("#eggPic").src = "/images/eggOutline.png";
    wrapper.querySelector("#title").src = "/images/title.png";

    document.querySelector("#funFact").textContent = "Fun fact";
    timer_function(divDom);

    const funFact = wrapper.querySelector("#funFact");
    displayNextFact(funFact, true);
}

const funFact = document.querySelector("#funFact");

let i = 0;

function displayNextFact(funFact, opt) {
    if (opt == true) {

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
                setTimeout(displayNextFact, 3000); // Change the delay time (in milliseconds) as needed
            }, 1000); // This timeout should match the transition duration
        } else {
            i = 0;
            displayNextFact();
            console.log("gör om");
        }
    }
}

function timer_function(option) {
    // Clear any previous timers

    const timerDisplay = document.getElementById("clock");
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

    // Get the timer duration based on the selected option
    clearTimeout(countdown);
    const duration = timerDurations[option];

    document.getElementById("clock").textContent = "Timer stopped";
    function stopTimer() {
        clearTimeout(countdown);
        wrapper.querySelector("#eggIcon").classList.remove("wiggle");
        document.getElementById("funFact").textContent = "";

        popUp("Timer has stopped");
        let opt = false;
        displayNextFact(opt);
    }

    // Add click event listener to the "Stop" button
    wrapper.querySelector("#stopButton").addEventListener("click", stopTimer);
    // Calculate the total seconds based on the selected duration
    secondsRemaining = duration;

    // Function to update the timer display
    function updateTimer() {
        if (secondsRemaining <= 0) {
            // If time is up, display "Go get your egg!"
            // timerDisplay.textContent = "Go get your egg!";
            popUp("Go and get you egg!");
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
