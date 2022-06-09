'use strict';
// ************** Code I've added ******************************************

let data = 0;
let header = 'Weather Report';

document.getElementById('root').innerText = data;
document.getElementById('topHeader').innerText = header;

function increment() {
  data = data + 1;
  document.getElementById('root').innerText = data;
  changeColor(data);
}

function decrement() {
  data = data - 1;
  document.getElementById('root').innerText = data;
  changeColor(data);
}

function cityname() {
  let city = document.getElementById('cityName').value;
  let headerWithCity = `Weather Report for City of ${city}`;
  console.log(headerWithCity);
  document.getElementById('topHeader').innerText = headerWithCity;
}

const changeColor = (data) => {
  if (data <= 49) {
    document.getElementById('root').style.color = '#008080';
  } else if (data <= 59) {
    document.getElementById('root').style.color = '#008000';
  } else if (data <= 69) {
    document.getElementById('root').style.color = '#FFFF00';
  } else if (data <= 79) {
    document.getElementById('root').style.color = '#FFA500';
  } else {
    document.getElementById('root').style.color = '#FF0000';
  }
};
