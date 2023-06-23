const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnElement = document.getElementById("btn");
const colorId = document.querySelector(".colorId");

btnElement.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    colorId.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
