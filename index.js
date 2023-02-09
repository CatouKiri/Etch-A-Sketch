const sketchPad = document.querySelector(".sketchPad");


const container = document.getElementById("container");

function makeRows(rows, cols) {
    sketchPad.style.setProperty('--grid-rows', rows);
    sketchPad.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    sketchPad.appendChild(cell).className = "grid-item";
  };
};

makeRows(5, 5);
