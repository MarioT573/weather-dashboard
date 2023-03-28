var startBtn = document.getElementById('startBtn');
var wrapperEl = document.getElementById('wrapper')

function GetInfo() {
    const cityInput = document.getElementById("cityInput");
  
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityInput.value+'&appid=03c9f747d082d258ab70c3e6fa82b314')
  .then(response => response.json())
  .then(data=>{
    wrapperEl.setAttribute('class', 'wrapper');
    document.getElementById("day1Min").innerHTML = "Min: " + ((data.list[0].main.temp_min)-273.15).toFixed(1) +"°";
    document.getElementById("day1Max").innerHTML = "Max: " + ((data.list[0].main.temp_max)-273.15).toFixed(1) +"°";
    document.getElementById("img1").src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";

    document.getElementById("day2Min").innerHTML = "Min: " + ((data.list[8].main.temp_min)-273.15).toFixed(1) +"°";
    document.getElementById("day2Max").innerHTML = "Max: " + ((data.list[8].main.temp_max)-273.15).toFixed(1) +"°";
    document.getElementById("img2").src = "http://openweathermap.org/img/wn/" + data.list[8].weather[0].icon + ".png";

    document.getElementById("day3Min").innerHTML = "Min: " + ((data.list[16].main.temp_min)-273.15).toFixed(1) +"°";
    document.getElementById("day3Max").innerHTML = "Max: " + ((data.list[16].main.temp_max)-273.15).toFixed(1) +"°";
    document.getElementById("img3").src = "http://openweathermap.org/img/wn/" + data.list[16].weather[0].icon + ".png";

    document.getElementById("day4Min").innerHTML = "Min: " + ((data.list[24].main.temp_min)-273.15).toFixed(1) +"°";
    document.getElementById("day4Max").innerHTML = "Max: " + ((data.list[24].main.temp_max)-273.15).toFixed(1) +"°";
    document.getElementById("img4").src = "http://openweathermap.org/img/wn/" + data.list[24].weather[0].icon + ".png";

    document.getElementById("day5Min").innerHTML = "Min: " + ((data.list[32].main.temp_min)-273.15).toFixed(1) +"°";
    document.getElementById("day5Max").innerHTML = "Max: " + ((data.list[32].main.temp_max)-273.15).toFixed(1) +"°";
    document.getElementById("img5").src = "http://openweathermap.org/img/wn/" + data.list[32].weather[0].icon + ".png";
  })
  .catch(err => alert("Unable to Load"))
}

startBtn.onclick = GetInfo;