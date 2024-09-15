function makeRed() {
  document.body.style.backgroundColor = "red";
}

function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

const makeBlueButton = document.getElementById("make-blue");
// makeBlueButton.onclick = makeBlue();

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

const makePurpleButton = document.getElementById("make-purple");

// makePurpleButton.onclick = function makePurple() {
//   document.body.style.backgroundColor = "purple";
// };

// Conditional Change
function changeBackground(colorName) {
  if (colorName == "red") {
    document.body.style.backgroundColor = "red";
  } else if (colorName == "yellow") {
    document.body.style.backgroundColor = "yellow";
  } else if (colorName == "blue") {
    document.body.style.backgroundColor = "blue";
  } else if (colorName == "purple") {
    document.body.style.backgroundColor = "purple";
  }
}

// addEventListener
const makeTomatoButton = document.getElementById("make-tomato");
makeTomatoButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "tomato";
});

const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", makeGreen);

function makeGreen() {
  document.body.style.backgroundColor = "green";
}
