// Create an array of bad movies
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json").then((req)=>{
    return req.json()
}).then((data)=>{
    console.log(data)
    const badMovies = data.filter((movie)=>{
        return movie.rating <4
    })
    console.log(badMovies)
})



// Creat an array of bad movies since year 2000
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json").then((req)=>{
    return req.json()
}).then((data)=>{
    console.log(data)
    const badMoviesSince_2000= data.filter((movie)=>{
        return movie.rating <4 && movie.year >=2000
    })
    console.log(badMoviesSince_2000)
})



// Promise that resolves after set time
function promiseAfter(resolveAfter){
    const time = resolveAfter * 1000
    const resolveAfterPromise = new Promise((resolve)=>{
        setTimeout(()=>resolve(),time)
    })
    return resolveAfterPromise
}

promiseAfter(3).then(()=>{
    console.log("I am called asynchronously");
})


// Rewrite time


function getCurrentLocation(){
    const getCurrentLocationPromise = new Promise((success,error)=>{
        if(!navigator.geolocation) {
            return error();
          } else {
            return navigator.geolocation.getCurrentPosition(success);
          }
    })

    return getCurrentLocationPromise
}

getCurrentLocation().then((position)=>{
    console.log(position)
}).catch((error)=>{
    console.log(error)
})


function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(latitude,longitude)
  }

  function error() {
      console.log(error)
  }


  function fetchingAfterPromise(fetchingTime){
    const time = fetchingTime * 1000
    const fetchPromise = new Promise((resolve)=>{
        
        setTimeout(()=>{resolve(
            fetch("https://data.police.uk/api/crime-categories"))
        },time)
    })
    return fetchPromise
}


fetchingAfterPromise(5).then((req)=>{
    return req.json()
}).then((data)=>{
    console.log(data)
})

function delay(delayTime) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, delayTime*1000);
    });
  }

async function fetchingAsyncAwait(waitingTime) {
    console.log('calling');
    const waiting = await delay(waitingTime);
    const fetching = await fetch("https://data.police.uk/api/crime-categories")
    const data = await fetching.json()
    console.log(data);
  }
  
  fetchingAsyncAwait(6);