
const gridContainer = document.querySelector("#grid-Container");
const resettaa = document.querySelector("#resetta");
const resettasize = document.querySelector("#resettasize");

window.addEventListener("load", setDefaultGrid);
resettaa.addEventListener("click", () => { location.reload() });
resettasize.addEventListener("click", sizereset);

function setDefaultGrid() {
    sizegriglia(16);
    griglia(16);
}
function sizegriglia(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}
function griglia(size) {
    for (let i = 0; i < size * size; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList = "grid-div";
        gridDiv.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(gridDiv);

    }
}
function sizereset() {
    let nuovosize = prompt("insert a new size here");
    if (nuovosize !== null) {
        nuovosize = parseInt(nuovosize);
        if (nuovosize < 1 || nuovosize > 128 || Number.isNaN(nuovosize)) {
            alert = "insert a number from 1-128";
            sizereset();
        }
        else {
            clean();
            sizegriglia(nuovosize);
            griglia(nuovosize);

        }
    }
}
function clean() {
    const array = Array.from(gridContainer.childNodes);
    array.forEach((element) => {
        gridContainer.removeChild(element);
    });
}
function changeColor(e) {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}
