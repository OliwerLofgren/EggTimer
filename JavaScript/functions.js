function popUp() {
    document.querySelector("#popUpWindow").innerHTML = `
    <p id="prompt"></p>
`;

    document.querySelector("#popUp").classList.remove("hidden");
    document.querySelector("#prompt").textContent = "You can only chose one of each option!";
    let button = document.createElement("button");
    button.textContent = "OK";
    button.classList.add("OK");
    document.querySelector("#popUpWindow").append(button);
    document.querySelector(".OK").addEventListener("click", e => { document.querySelector("#popUp").classList.add("hidden") });
}