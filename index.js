const sketchPad = document.querySelector(".sketchPad");
const container = document.getElementById("container");

//make a grid based on 2 values
function makeRows(rows, cols) {
    sketchPad.style.setProperty('--grid-rows', rows);
    sketchPad.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    sketchPad.appendChild(cell).className = "grid-item";
  };
};

makeRows(10, 10);
