const apiKey ="92754b32543ad7c575f8b61fa4d3bcf0";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=matric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
  const response=await fetch(apiurl + city + `&appid=${apiKey}`);
  var data =await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "ºF";
  document.querySelector(".humidity").innerHTML=data.humidity + "%";
  document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

  
}
searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);

})

