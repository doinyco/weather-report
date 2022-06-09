'use strict';
const totalCount = document.getElementById("tempdisplay");
    let count = 0;
    totalCount.innerHTML = count;

const handleIncrement = () => {
    count++;
    totalCount.innerHTML = count;
}

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
