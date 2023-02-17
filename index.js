const sketchPad = document.querySelector(".sketchPad");

//make a grid based on 1 values
function makeRows(e) {
  for (c = 0; c < (e); c++) {
    let col = document.createElement('div');
    col.setAttribute("style","display: flex; flex-direction: row; flex-grow:1;");
    sketchPad.appendChild(col);
    for (i = 0; i < (e) ; i++) {
      let cell = document.createElement("div");
      cell.setAttribute("style","aspect-ratio:1/1;");
      col.appendChild(cell).className = "grid-item";
    }
  };
};

sketchPad.addEventListener("mouseover", function(event) {
  event.target.style.backgroundColor = "black";
});

makeRows(50);

// //make a grid based on 2 values
// function makeRows(rows, cols) {
//     sketchPad.style.setProperty('--grid-rows', rows);
//     sketchPad.style.setProperty('--grid-cols', cols);
//   for (c = 0; c < (rows * cols); c++) {
//     let cell = document.createElement("div");
//     sketchPad.appendChild(cell).className = "grid-item";
//   };
// };

// makeRows(10, 10);
