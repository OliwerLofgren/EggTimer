"use strict";
let main = document.querySelector("main");
let wrapper = document.querySelector("#wrapper");

function renderStartPage(params) {
  basicLayout();
  wrapper.innerHTML += `
    <button onclick="RenderBoilPage()">Lets boil some eggs!</button>
  `;

  wrapper.querySelector("#eggPic").src = "/images/eggOutline.png";
  wrapper.querySelector("#title").src = "/images/title.png";
}

renderStartPage();
