
const gridContainer = document.querySelector("#grid-Container");
const resettaa = document.querySelector("#resetta");

window.addEventListener("load", setDefaultGrid);
resettaa.addEventListener("click", () => { location.reload() });
function setDefaultGrid() {
    sizegriglia(16);
    griglia(16);
  }
  function sizegriglia(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }
function griglia (size){
for (let i = 0; i < size * size; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList = "grid-div";
    gridDiv.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridDiv);

}
}

function changeColor(e) {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}