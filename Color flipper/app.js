const btnElement = document.getElementById("btn");
const colorId = document.querySelector(".colorId");

let colors = ["Blue", "Green", "Orange", "Red", "Violet", "Yellow"];


btnElement.addEventListener("click", () => {
    let color = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[color];
    colorId.textContent = colors[color];
});
