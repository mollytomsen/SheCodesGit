//feature 3
let now = new Date();
let h6 = document.querySelector("h6");

let days = ["Sunday","Monday","Tuesday","Wednesay","Thursday","Friday","Saturday"];
let day = days[now.getDay()];

let hour = now.getHours();
let minute = now.getMinutes();

h6.innerHTML=`${day} ${hour}:${minute}`;


//feature 2 


// Feature 3 
function tempC (event) {
    event.preventDefault();
    let temp= document.querySelector("#temperature");
    temp.innerHTML= temperature;
}
let c = document.querySelector("#celsius");
c.addEventListener("click", tempC);

function tempF (event) {
    event.preventDefault();
    let temp= document.querySelector("#temperature");
    let temperature = temp.innerHTML;
    temperature = Number(temperature);
    temp.innerHTML= Math.round((temperature * 9)/5+32);
}
let f = document.querySelector("#fahrenheit");
f.addEventListener("click", tempF);



let form=document.querySelector("#searchLocation");
form.addEventListener("search", searchTemp);

function search(city){
  let apiKey = "77b82d46a971b0d1c87b4abc0b7129cf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function searchTemp(event){
  event.preventDefault();
  let city = document.querySelector("#searchLocation").value;
  search(city);
}

function clickButton(){
  navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
  let apiKey = "77b82d46a971b0d1c87b4abc0b7129cf";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}
function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temp=document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `${response.data.name}`;
  temp.innerHTML= `${temperature}°c`;
  let feelsLike = document.querySelector("#feels-like");
  let feelsLikeElement = Math.round(response.data.main.feels_like);
  feelsLike.innerHTML = `Feels like : ${feelsLikeElement}°c`;
  let humidity = document.querySelector("#humidity");
  let humidityElement = Math.round(response.data.main.humidity);
  humidity.innerHTML = `Humidity : ${humidityElement}%`;
  let wind = document.querySelector("#wind");
  let windElement = Math.round(response.data.wind.speed);
  wind.innerHTML = `Wind Speed : ${windElement}mph`;
  let lowTemp = document.querySelector("#lowTemp");
  let lowTempElement = Math.round(response.data.main.temp_min);
  lowTemp.innerHTML = `${lowTempElement}°c `;
  let highTemp = document.querySelector("#highTemp");
  let highTempElement = Math.round(response.data.main.temp_max);
  highTemp.innerHTML = ` ${highTempElement}°c`;
  let description = document.querySelector("#description");
  let descriptionElement = (response.data.weather[0].description);
  descriptionElement = descriptionElement.toUpperCase();
  description.innerHTML = `${descriptionElement}`;
}
let button=document.querySelector("#current-button");
button.addEventListener("click", clickButton);



search("London");

