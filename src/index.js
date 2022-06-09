'use strict';

let data = 32;

document.getElementById("root").innerText=data;

function increment(){
    data = data + 1;
    document.getElementById("root").innerText=data;
    changeColor(data); 
    addingLandscape();

}

function decrement(){
    data=data-1;
    document.getElementById("root").innerText=data;
    changeColor(data);
    addingLandscape();
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

function addingLandscape () {
   setLandscape(data);
}

const setLandscape = (data) => {
    if (data <= 59) {
        document.getElementById("landscape").innerText = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    } else if (data <= 69) {
        document.getElementById("landscape").innerText = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (data <= 79) {
        document.getElementById("landscape").innerText = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else {
        document.getElementById("landscape").innerText = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }
}


