"use strict";
let main = document.querySelector("main");
let wrapper = document.querySelector("#wrapper");

function renderStartPage(params) {
  basicLayout();
  wrapper.innerHTML += `
    <button onclick="RenderBoilPage()">Start</button>
    <div id="info"> ? </div>
  `;

  wrapper.querySelector("#eggPic").src = "/images/eggOutline.png";
  wrapper.querySelector("#title").src = "/images/title.png";
  wrapper.querySelector("#info").addEventListener("click", () => {
    let info;
    info = "How to use Eggcellent Countdown";
    popUp(info);
  })

  wrapper.querySelector("#eggIcon").style.position = "relative";
  wrapper.querySelector("#eggIcon").style.bottom = "70px";
  wrapper.style.justifyContent = "space-between";
}

renderStartPage();
