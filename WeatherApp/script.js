const apiKey = "714566762c499c08f722db10e0dc999e";
const input=document.getElementById('input');
const search=document.getElementById('search');
const weatherIcon=document.querySelector('.weather-icon');
let data = "";

async function cheakWeather(apiUrl) {
  const response = await fetch(apiUrl);
  if(response.status == 404){
    document.querySelector('.error').style.display="block";
  }
  data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity +" %";
  document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

  if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png";
  }else  if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png";
  }else  if(data.weather[0].main=="Rain"){
   weatherIcon.setAttribute('src',"images/rain.png");
  }else  if(data.weather[0].main=="Drizzle"){
    weatherIcon.setAttribute('src',"images/drizzle.png");
  }else  if(data.weather[0].main=="Mist"){
    weatherIcon.setAttribute('src',"images/mist.png");
  }
}



search.addEventListener('click',()=>{
    const city=input.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    cheakWeather(apiUrl);

})

