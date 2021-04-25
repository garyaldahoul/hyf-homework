// Weather app

const displayCurentWeatherButton = document.getElementById("displayCurentWeatherButton")
const weatherApi = document.getElementById("weatherApi")


function displayCurentWeather(){

    const city = document.getElementById("city").value
     localStorage.setItem("localCity", city);
     const localCity = localStorage.getItem("localCity")
    console.log(localCity)
    if(city===""){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localCity}&units=metric&appid=39382841bd71e88e97dcbd5ef59e4b77`).then(req=>req.json()).then(data=>displayWeather(data))
    }
    else{
        console.log(localCity)
        console.log(city)
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=39382841bd71e88e97dcbd5ef59e4b77`).then(req=>req.json()).then(data=>displayWeather(data))
}   }
fetch("https://api.openweathermap.org/data/2.5/weather?q=lund&units=metric&appid=39382841bd71e88e97dcbd5ef59e4b77").then(req=>req.json()).then(data=>console.groupCollapsed(data))



// displayWeather


const displayWeather = (data) => {
  weatherApi.innerHTML=""
    const iconCode = data.weather[0].icon
    const windDirection = degToCard(data.wind.deg)
    const rise = `${data.sys.sunrise}`
    const set = `${data.sys.sunset}`
    const sr = msToTime(rise)
    const sunSet = new Date(parseInt(set)*1000)
    const hourSet = sunSet.getHours();
    const minuteSet = sunSet.getMinutes()
    const sunRise = new Date(parseInt(rise)*1000)//.toLocaleTimeString()
    const hourSun = sunRise.getHours()
    const minuteSun = sunRise.getMinutes()
    const currentWeatherCountainer = document.createElement("div")
    currentWeatherCountainer.innerHTML=`
    <h1>${data.name} ${data.sys.country}</h1>
    <div>
        <div>${data.weather[0].description}</div>
        <div><img src=http://openweathermap.org/img/w/${iconCode}.png /></div>
        <div>Temp  ${data.main.temp}</div>
        <div>Feels like ${data.main.feels_like}</div>
        <div>Wind speed ${data.wind.speed} m/s</div>
        <div>Wind dircetion ${windDirection}</div>
        <div>Sun rise ${hourSun}:${minuteSun}</div>
        <div>Sun set ${hourSet}:${minuteSet}</div>

    </div> `
    weatherApi.append(currentWeatherCountainer)
}


function convertTime(unixTime){
    let dt = new Date(unixTime * 1000)
    let h = dt.getHours()
    let m = "0" + dt.getMinutes()
    let t = h + ":" + m.substr(-2)
    return t
}

const degToCard = function(deg){
    if (deg>11.25 && deg<=33.75){
      return "NNE";
    }else if (deg>33.75 && deg<=56.25){
      return "ENE";
    }else if (deg>56.25 && deg<=78.75){
      return "E";
    }else if (deg>78.75 && deg<=101.25){
      return "ESE";
    }else if (deg>101.25 && deg<=123.75){
      return "ESE";
    }else if (deg>123.75 && deg<=146.25){
      return "SE";
    }else if (deg>146.25 && deg<=168.75){
      return "SSE";
    }else if (deg>168.75 && deg<=191.25){
      return "S";
    }else if (deg>191.25 && deg<=213.75){
      return "SSW";
    }else if (deg>213.75 && deg<=236.25){
      return "SW";
    }else if (deg>236.25 && deg<=258.75){
      return "WSW";
    }else if (deg>258.75 && deg<=281.25){
      return "W";
    }else if (deg>281.25 && deg<=303.75){
      return "WNW";
    }else if (deg>303.75 && deg<=326.25){
      return "NW";
    }else if (deg>326.25 && deg<=348.75){
      return "NNW";
    }else{
      return "N"; 
    }
  }


displayCurentWeatherButton.addEventListener("click",displayCurentWeather)


function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
  console.log(msToTime(300000))


  function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      window.localStorage.setItem("latCity", latitude);
      window.localStorage.setItem("longCity", longitude);

     

      const latCity = window.localStorage.getItem("latCity")
      const longCity = window.localStorage.getItem("longCity")

      // console.log(latCity)
      // console.log(longCity)
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=39382841bd71e88e97dcbd5ef59e4b77`).then(req=>req.json()).then(data=>displayWeather(data))
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latCity}&lon=${longCity}&appid=39382841bd71e88e97dcbd5ef59e4b77`).then(req=>req.json()).then(data=>displayWeather(data))

      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }

  } 

  window.addEventListener("load",geoFindMe)