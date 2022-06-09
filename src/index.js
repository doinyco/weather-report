'use strict';
// ************** Code I've added ******************************************

let data = 0;

document.getElementById("root").innerText=data;

function increment(){
    data = data + 1;
    document.getElementById("root").innerText=data;
    changeColor(data);  
}

function decrement(){
    data=data-1;
    document.getElementById("root").innerText=data;
    changeColor(data);
}

const changeColor = (data) => {
    if (data <= 49) {
        document.getElementById("root").style.color = "#008080";
    } else if (data <= 59) {
        document.getElementById("root").style.color = "#008000";
    } else if (data <= 69) {
        document.getElementById("root").style.color = "#FFFF00";
    } else if (data <= 79) {
        document.getElementById("root").style.color = "#FFA500";
    } else {
        document.getElementById("root").style.color = "#FF0000";
    }
}

// ****************************************************************************

const addTemperature = (event) => {
    let newTemp = 1;
    // const totalCount = document.getElementById("tempdisplay");
    // let count = 0;
    // totalCount.innerHTML = count;
}

const temperatureUpButton = (event) => {
    const upButton = document.querySelector("#upButton");
    upButton.addEventListener("click", handleIncrement);
}

const temperatureDownButton = (event) => {
    const downButton = document.querySelector("#downButton");
    downButton.addEventListener("click", addTemperature);
}
