'use strict';

let data = 32;
let header = 'Weather Report';

document.getElementById('root').innerText = data;
document.getElementById('topHeader').innerText = header;

function cityname() {
  let city = document.getElementById('cityName').value;
  let headerWithCity = `Weather Report for City of ${city}`;
  console.log(headerWithCity);
  document.getElementById('topHeader').innerText = headerWithCity;

//   const axios = require('axios');
  const API = 'http://127.0.0.1:5000/location';
  axios
    .get(`${API}`, {
      params: {
        q: city,
      },
    })
    .then((response) => {
      console.log(response.data[0].lat);
    })
    .catch((response) => {
      console.log('error in API call');
      console.log(response);
    });
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

const increment = () => {
  data = data + 1;
  document.getElementById('root').innerText = data;
  changeColor(data);
  addingLandscape();
}

function decrement() {
  data = data - 1;
  document.getElementById('root').innerText = data;
  changeColor(data);
  addingLandscape();
}

function addingLandscape() {
  setLandscape(data);
}

const setLandscape = (data) => {
  if (data <= 59) {
    document.getElementById('landscape').innerText =
      '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (data <= 69) {
    document.getElementById('landscape').innerText = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (data <= 79) {
    document.getElementById('landscape').innerText = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else {
    document.getElementById('landscape').innerText = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  }
};
