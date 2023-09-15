const apikey = "23200021846118acb15b52394ebbbdac";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiBase="https://api.openweathermap.org/data/2.5/";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");




async function checkweather(city)
{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status== "404")
    {
     document.querySelector(".error").style.display = "block";
     document.querySelector(".weather").style.display = "none";
    }
    else
    {
        var data = await response.json();

        console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";



    if(data.weather[0].main == 'Clouds')
    {
         weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == 'Rain')
    {
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == 'Clear')
    {
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == 'Drizzle')
    {
        weatherIcon.src = "drizzle.png"
    }   
    else if(data.weather[0].main == 'Mist')
    {
        weatherIcon.src = "mist.png";
    }
    else if(data.weather[0].main == 'Snow')
    {
        weatherIcon.src = "snow.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}
    

}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})




async function getdata(long,lati)
{
    const response = await fetch(`${apiBase}weather?lat=${lati}&lon=${long}&units=metric&appid=${apikey}`);

   
        var data = await response.json();

        console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";



    if(data.weather[0].main == 'Clouds')
    {
         weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == 'Rain')
    {
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == 'Clear')
    {
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == 'Drizzle')
    {
        weatherIcon.src = "drizzle.png"
    }   
    else if(data.weather[0].main == 'Mist')
    {
        weatherIcon.src = "mist.png";
    }
    else if(data.weather[0].main == 'Snow')
    {
        weatherIcon.src = "snow.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}



async function geoLocation(position)
{
    const Result = await getdata(position.coords.latitude,position.coords.longitude);
    console.log(Result);
} 

function failedToGet()
{
alert("Permission denied please enter manually");
}



addEventListener("load",()=>
{
    
    navigator.geolocation.getCurrentPosition(geoLocation,failedToGet);
})

