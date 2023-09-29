function popUp(content) {
  document.querySelector("#popUpWindow").innerHTML = `
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
  });
}

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
