function RenderBoilPage() {
    console.log("hej");

    wrapper.innerHTML = `
    <header>
      <img id="title"> 
    </header>
    <div id="eggIcon">
      <img id="eggPic"> 
      <div id="yolk"></div>
    </div>

    <div>
        <div class="optionDiv">
            <p> How would you like your egg? </p>
            <div id="soft" class="option">Soft</div>
            <div id="medium" class="option">Medium</div>
            <div id="hard" class="option">Hard</div>
        </div>

        <div class="optionDiv">
            <p> What is the size of the egg? </p>
            <div id="s" class="option">S</div>
            <div id="m" class="option">M</div>
            <div id="l" class="option">L</div>
        </div>

        <div class="optionDiv">
            <p> Add egg to hot or cold water? </p>
            <div id="hot" class="option">Hot</div>
            <div id="cold" class="option">Cold</div>
        </div>

        </div>
    <button id="startTimer"> Lets start boil some eggs! </button>
  `;


    wrapper.querySelector("#eggPic").src = "/images/eggOutline.png";
    wrapper.querySelector("#title").src = "/images/title.png";

    let chosenOpt = [];

    let option = wrapper.querySelectorAll(".option");

    option.forEach(opt => {
        opt.addEventListener("click", (event) => {

            event.target.classList.toggle("chosen");
            let parent = event.target.parentElement;
            let childs = parent.querySelectorAll("div");

            childs.forEach(child => {
                if (child.classList == "option chosen") {
                    chosenOpt.push(child.textContent);
                }
            })
        })
    })

    wrapper.querySelector("#startTimer").addEventListener("click", () => {
        StartTimer(chosenOpt)
    })
}

function StartTimer(opt) {
    console.log(opt);
}