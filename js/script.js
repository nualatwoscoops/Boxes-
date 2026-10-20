function resetBoxes() {
  'use strict';
  let blueIn = document.getElementById("blueIn");
  let blueBottom = document.getElementById("blueBottom");
  let red = document.getElementById("red");
  let green = document.getElementById("green");

  blueIn.style.display = "none";
  blueIn.classList.remove("offset");

  blueBottom.style.display = "none";
  blueIn.classList.remove("offset");

  red.classList.remove("offset");

  green.classList.remove("offset");
}

function showBlueRightOfRed() {
  'use strict';
  resetBoxes();
  let showBlueRightOfRed = document.getElementById("blueBottom");
  blueBottom.style.display = "block";
  blueBottom.classList.add("blueRight")
}

function showBlueBottom() {
  'use strict';
  resetBoxes();
  let blueBottom = document.getElementById("blueBottom");
  blueBottom.style.display = "block";
}

function showBlueInside() {
  'use strict';
  resetBoxes();
  let blueIn = document.getElementById("blueIn");
  blueIn.style.display = "block";
}

function init() {
  'use strict';
  document.getElementById("btn1").addEventListener("click", showBlueInside);
  document.getElementById("btn2").addEventListener("click", showBlueBottom);
  document.getElementById("btn3").addEventListener("click", showBlueRightOfRed);
 // document.getElementById("btn4").addEventListener("click", showRedRightOfBlue);
  //document.getElementById("btn5").addEventListener("click", showBlueOffsetInRed);
  //document.getElementById("btn6").addEventListener("click", showGreen);
}

window.onload = init;