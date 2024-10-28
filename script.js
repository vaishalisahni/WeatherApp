// const API_KEY="51213c60f7e99503f881c734bcae8c85";
// let latitude=40.7128;
// let longitude=-74.0060;
// const searchedCity="delhi";
// let weatherData={};
// // fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${APIkey}`)
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${API_KEY}&units=metric`)
// .then((resp)=>resp.json())
// .then((data)=>weatherData=data);
// console.log(weatherData);

const inputbox=document.getElementById("input-box");
const searchBtn=document.getElementById("search-btn");
const weatherImg=document.getElementById("weather-img");

const temp=document.getElementById("temperature");
const cityName=document.getElementById("city-name");
const humidity=document.getElementById("humid");
const windSpeed=document.getElementById("wind-speed");

const locationNotFound=document.querySelector(".location-not-found");
const weatherBody=document.querySelector(".weather");

async function checkWeather(city)
{
    const API_KEY="5af85b8fe528e0175931d85b5aa6bf0e";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const weather_data=await fetch(`${url}`).then((response) =>
        response.json()).then((data)=>data);

    if(weather_data.cod==='404'){
        locationNotFound.style.display="flex";
        weatherBody.style.display="none";
        console.log("error");
        return;
    }
    locationNotFound.style.display="none";
    weatherBody.style.display="flex";

    console.log(weather_data);
    temp.innerText=`${Math.round(weather_data.main.temp)}°C`;
    cityName.innerText=`${weather_data.name}`;
    humidity.innerText=`${weather_data.main.humidity}%`;
    windSpeed.innerText=`${weather_data.wind.speed} Km/H`;
    const iconCode = weather_data.weather[0].icon;
    weatherImg.src=`https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    // const weatherCondition = weather_data.weather[0].main;
    // const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    // console.log("Weather Condition:", weatherCondition);
    // console.log("Icon Code:", iconCode);
    // console.log("Icon URL:", iconUrl);




    // switch(weather_data.weather[0].main){
    //     case 'Clouds':
    //         weatherImg.src="/assets/clouds.png";
    //         break;
    //     case 'Clear':
    //         weatherImg.src="/assets/clear.png";  
    //         break;  
    //     case 'Rain':
    //         weatherImg.src="/assets/rain.png";
    //         break;
    //     case 'Mist':
    //         weatherImg.src="/assets/mist.png";
    //         break;
    //     case 'Snow':
    //         weatherImg.src="/assets/snow.png";
    //         break;
        // case 'Drizzle':
        //     weatherImg.src="assets\drizzle.png";
        //     break;
        
    // }

}
searchBtn.addEventListener('click',function handleSubmit(event){
    event.preventDefault()
    const city = inputbox.value.trim();
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
    checkWeather(city);
    
})





