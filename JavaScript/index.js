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

    option.forEach(opt => {
        opt.addEventListener("click", (event) => {

            event.target.classList.toggle("chosen");

            let parent = event.target.parentElement;
            let childs = parent.querySelectorAll("div");

            childs.forEach(child => {
                if (child.classList == "option chosen") {

                    if (child.textContent === "Soft" || child.textContent === "Half" || child.textContent === "Hard") {
                        chosenOpt.liking = child.textContent
                    }

                    if (child.textContent === "Small" || child.textContent === "Medium" || child.textContent === "Large") {
                        chosenOpt.size = child.textContent
                    }

                    // if (child.textContent === "Hot" || child.textContent === "Cold") {
                    //     chosenOpt.temp = child.textContent
                    // }
                }
            })
        })
    })

    wrapper.querySelector("#startTimer").addEventListener("click", () => {
        if (chosenOpt.liking && chosenOpt.size && chosenOpt.temp !== "") {

            console.log(document.querySelectorAll(".chosen"));
            let chosen = document.querySelectorAll(".chosen");
            if (chosen.length !== 3) {
                console.log("Too many or too little");
                console.log(chosenOpt);
                popUp();
            }
            StartTimer(chosenOpt)
        } else {
            console.log("Too many or too little");
            console.log(chosenOpt);
            popUp();
        }
    })
}

function StartTimer(opt) {
    basicLayout();

    wrapper.innerHTML += `
    <div id="timer" >
            <div> Time left </div>
            <div id="clock"> 00:00 </div>
            <button onclick="stopTimer()">Stop</button>
    </div>
  `;

    let divDom;
    divDom = `${opt.liking}_${opt.size}`;

    console.log(divDom);

    console.log(opt);
    wrapper.querySelector("#eggPic").src = "/images/eggOutline.png";
    wrapper.querySelector("#title").src = "/images/title.png";
    startTimer();

}

let seconds = 0;
let minutes = 0;
let timer;

function startTimer() {
    timer = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function incrementTimer() {

    let userTime = document.querySelector("#clock").value;

    seconds++;
    if (seconds == userTime) {
        console.log("done");
        clearInterval(timer);
        resetTimer()
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    document.getElementById("clock").innerText =
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);
}