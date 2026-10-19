// JavaScript Assessment 1: Task 2 - Event Handling

//No need for globals here

function resetBoxes (){
    "use strict";
    let blueIn = document.getElementById("blueIn");
    let blueBottom = document.getElementById("blueBottom");
    let red = document.getElementById("red");
    let green = document.getElementById("green");

    blueIn.style.display = "none";
    blueIn.classList.remove("offset");

    blueBottom.style.display = "none";
    blueIn.classList.remove("blueRight", "blueLeft");

    red.classList.remove("redRight");

    green.classList.remove("greenOn");
}

function init() {//Last button function here
alert("Don't forget to use strict in Function Name here");
}





function showBlueInside() {//first button
    "use strict";
    resetBoxes();
}

function init(){
    "use strict";
    document.getElementById("btn1").addEventListener("click", showBlueInside);
    //document.getElementById("btn2").addEventListener("click", showBlueBottom);
    //document.getElementById("btn3").addEventListener("click", showBlueRightOfRed);
    //document.getElementById("btn4").addEventListener("click", showRedRightOfBlue);
    //document.getElementById("btn5").addEventListener("click", showBlueOffsetInRed);
   //document.getElementById("btn6").addEventListener("click", showGreen);
}

window.onload = init;