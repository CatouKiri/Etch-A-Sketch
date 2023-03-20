const sketchPad = document.querySelector(".sketchPad");

makeRows(30);

//make a grid based on 1 values
function makeRows(e) {
  for (c = 0; c < (e); c++) {
    let col = document.createElement('div');
    col.setAttribute("style","display: flex; flex-direction: row; flex-grow:1;");
    sketchPad.appendChild(col).className = "grid-row";
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


function updateProjectScore() {
  let output = document.querySelector("output");
  removeSketchPad();
  makeRows(output.textContent);
}


function removeSketchPad() {
  lastChild = sketchPad.lastChild;
  while (sketchPad.lastChild){
    sketchPad.removeChild(sketchPad.lastChild);
    console.log("entering");
  }
};