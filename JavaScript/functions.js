function basicLayout() {
    document.querySelector("#wrapper").innerHTML = `
        <header>
        <img id="title"> 
        </header>
        <div id="eggIcon">
            <img id="eggPic"> 
            <div id="yolk"></div>
        </div>

        <div id="popUp" class="hidden">
            <div id="popUpBackground"></div>
            <div id="popUpWindow">
                <p id="prompt"></p>
            </div>
        </div>
    `;
}

function popUp(content, fun) {
    let wrapper = document.querySelector("#wrapper");
    if (content === "How to use Eggcellent Countdown") {
        document.querySelector("#popUpWindow").innerHTML = `
            <p id="prompt"></p>
        `;

        document.querySelector("#popUp").classList.remove("hidden");
        document.querySelector(
            "#prompt"
        ).innerHTML = `How to use Eggcellent Countdown
            <p> <b>Step 1:</b> Find a medium sized pot and fill up with water </p>
            <p> <b>Step 2:</b> Put the pot with water on the stove and bring up to a boil.</p>
            <p> <b>Step 3:</b> Make your selection of your choises on the app.</p>
            <p> <b>Step 4:</b> Put the egg/eggs in the pot and start the timer.</p>
            `;

        let button = document.createElement("button");
        button.textContent = "OK";
        button.classList.add("OK");
        document.querySelector("#popUpWindow").append(button);
        document.querySelector(".OK").addEventListener("click", (e) => {
            document.querySelector("#popUp").classList.add("hidden");
        });
    } else {
        if (fun) {
            let wrapper = document.querySelector("#wrapper");
            wrapper.innerHTML = `
                <header>
                    <img id="title"> 
                </header>
                <div id="eggIcon">
                    <img id="eggPic"> 
                    <div id="yolk"></div>
                </div>


                <div id="timer">
                    <p id="promp">Fun facts about eggs:</p>
                    <p id="funFact"></p>
                    <p id="feedback"></p>
                    <button onclick="renderStartPage()"> Boil another </button>
                </div>

                <div id="popUp" class="hidden">
                    <div id="popUpBackground"></div>
                    <div id="popUpWindow">
                        <p id="prompt"></p>
                    </div>
                </div>
            `;

            wrapper.querySelector("#eggPic").src = "/images/eggOutline.png";
            wrapper.querySelector("#title").src = "/images/NewTitle.png";
        }
        wrapper.querySelector("#popUpWindow").innerHTML = `
        <p id="prompt"></p>
        `;

        document.querySelector("#popUp").classList.remove("hidden");
        document.querySelector("#prompt").textContent = content;
        let button = document.createElement("button");
        button.textContent = "OK";
        button.classList.add("OK");
        document.querySelector("#popUpWindow").append(button);
        document.querySelector(".OK").addEventListener("click", (e) => {
            document.querySelector("#popUp").classList.add("hidden");
            removeBubbles();
        });
        console.log(wrapper.querySelectorAll("#bubbles"));
    }
}
