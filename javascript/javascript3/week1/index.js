// Find a cool api

fetch("https://data.police.uk/api/crimes-street-dates").then(req=>req.json()).then(data=>console.log(data))
fetch ("https://data.police.uk/api/crime-categories").then(req=>req.json()).then(data=>console.log(data))
fetch("https://data.police.uk/api/forces").then(req=>req.json()).then(data=>console.log(data))

// Weather app

const weatherApi = document.getElementById("weatherApi")

fetch("https://api.openweathermap.org/data/2.5/weather?q=lund&units=metric&appid=39382841bd71e88e97dcbd5ef59e4b77").then(req=>req.json()).then(data=>console.groupCollapsed(data))


fetch("https://api.openweathermap.org/data/2.5/weather?q=lund&units=metric&appid=39382841bd71e88e97dcbd5ef59e4b77").then(req=>req.json()).then(data=>displayWeather(data))

// displayWeather


function displayWeather(data){
    const windDirection = degToCard(data.wind.deg)

    const rise = `${data.sys.sunrise}`
    const sunRise = new Date(parseInt(rise)*1000).toLocaleTimeString()
    const currentWeatherCountainer = document.createElement("div")
    currentWeatherCountainer.innerHTML=`
    <h1>${data.name} ${data.sys.country}</h1>
    <div>
        <div>${data.weather[0].description}
        <div>Temp  ${data.main.temp}</div>
        <div>Feels like ${data.main.feels_like}</div>
        <div>Wind speed ${data.wind.speed} m/s</div>
        <div>Wind dircetion ${windDirection}</div>
        <div> Sun rise ${data.sys.sunrise}</div>
        <div> Sun set ${data.sys.sunset}</div>
        <div>${sunRise}</div>
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



  // 


  const displayPhotoButton = document.getElementById("displayPhotoButton")
  const displayphotosDiv = document.getElementById("displayphotos")


const displayPhotos =()=>{
  displayphotosDiv.innerHTML=""
    const searchPhotosText = document.getElementById("searchPhotosText").value
    const numberPhotos = document.getElementById("numberPhotos").value

    console.log("Hi")
    console.log(searchPhotosText )
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchPhotosText}&limit=${numberPhotos}&api_key=3csuTHYk0NlyppD4zd9SufgVEJoNErvW`)
    .then((req)=>{
        console.log(req)
        return req.json()
    }).then((info)=>{
        console.log(info)
        console.log(info.data)
        console.log(info.data[0].images.downsized_still.url)
        info.data.map((image)=>{
            console.log(image)
            const imageDiv = document.createElement("div")
            imageDiv.innerHTML = `<img src=${image.images.downsized_medium.url}>`
            displayphotosDiv.append(imageDiv)
            
        })
       
    }) 
    
}


displayPhotoButton.addEventListener("click",displayPhotos)


function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }