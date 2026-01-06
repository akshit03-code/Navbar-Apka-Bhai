let boxes = document.querySelectorAll(".box");
let button = document.getElementById("btn");

let colors = ["red", "blue", "green", "yellow", "purple"];

button.addEventListener("click", function () {

  // reset all boxes
  boxes.forEach(box => box.style.backgroundColor = "lightgray");

  // random box
  let randomBoxIndex = Math.floor(Math.random() * boxes.length);

  // random color
  let randomColorIndex = Math.floor(Math.random() * colors.length);

  boxes[randomBoxIndex].style.backgroundColor = colors[randomColorIndex];
});
