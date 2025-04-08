// SLC Weather Summary
let weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5781770&units=imperial&APPID=6f3bf18df5dd39d2e4dbbdffb43ff880';
let weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', weatherURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    //document.getElementById("desc").innerHTML = weatherData.weather[0].description;
    document.getElementById("temp").innerHTML = weatherData.main.temp;
    document.getElementById("hum").innerHTML = weatherData.main.humidity;
    document.getElementById("speed").innerHTML = weatherData.wind.speed;

    //Wind Direction
    var deg = weatherData.wind.deg;
    if (deg > 11.25 && deg < 33.75){
    var windDirection = "NNE";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 33.75 && deg <= 56.25){
    var windDirection = "ENE";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 56.25 && deg <= 78.75){
    var windDirection = "E";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 78.75 && deg <= 101.25){
    var windDirection = "ESE";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 101.25 && deg <= 123.75){
    var windDirection = "ESE";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 123.75 && deg <= 146.25){
    var windDirection = "SE";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 146.25 && deg <= 168.75){
    var windDirection = "SSE";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 168.75 && deg <= 191.25){
    var windDirection = "S";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 191.25 && deg <= 213.75){
    var windDirection = "SSW";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 213.75 && deg <= 236.25){
    var windDirection = "SW";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 236.25 && deg <= 258.75){
    var windDirection = "WSW";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 258.75 && deg <= 281.25){
    var windDirection = "W";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 281.25 && deg <= 303.75){
    var windDirection = "WNW";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 303.75 && deg <= 326.25){
    var windDirection = "NW";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else if (deg > 326.25 && deg <= 348.75){
    var windDirection = "NNW";
    document.getElementById('output3').innerHTML = windDirection;
    }
    else{
    var windDirection = "N";
    document.getElementById('output3').innerHTML = windDirection; 
    }

    //Wind Chill
    var tempF = weatherData.main.temp;
    var speed = weatherData.wind.speed;
    var chilly = (35.74 + (.6215 * tempF) - (35.75 * (Math.pow(speed,.16))) + ((.4275 * tempF) * (Math.pow(speed,.16))));
    var windChill = Math.round(chilly*100)/100;
    document.getElementById('output2').innerHTML = windChill;

    //Current 
    var current = weatherData.weather[0].description;
    if (current.includes("thunderstorm")){
        var currentWeather = "Thunderstorm";
        var img = document.createElement("img");
        img.src = "images/storm.png";
        var src = document.getElementById("currentImage"); 
        src.appendChild(img);
        document.getElementById('output4').innerHTML = currentWeather;
    }
    else if (current.includes("drizzle")){
        var currentWeather = "Overcast";
        var img = document.createElement("img");
        img.src = "images/overcast.png";
        var src = document.getElementById("currentImage"); 
        src.appendChild(img);
        document.getElementById('output4').innerHTML = currentWeather;
    }
    else if (current.includes("rain")){
        var currentWeather = "Rain";
        var img = document.createElement("img");
        img.src = "images/rain.png";
        var src = document.getElementById("currentImage"); 
        src.appendChild(img);
        document.getElementById('output4').innerHTML = currentWeather;
    }
    else if (current.includes("snow" || "sleet")){
        var currentWeather = "Snow";
        var img = document.createElement("img");
        img.src = "images/snow.png";
        var src = document.getElementById("currentImage"); 
        src.appendChild(img);
        document.getElementById('output4').innerHTML = currentWeather;
    }
    else if (current.includes("clouds")){
        var currentWeather = "Partly Cloudy";
        var img = document.createElement("img");
        img.src = "images/few-clouds.png";
        var src = document.getElementById("currentImage"); 
        src.appendChild(img);
        document.getElementById('output4').innerHTML = currentWeather;
    }
    else {
        var currentWeather = "Clear";
        var img = document.createElement("img");
        img.src = "images/clear.png";
        var src = document.getElementById("currentImage"); 
        src.appendChild(img);
        document.getElementById('output4').innerHTML = currentWeather;
    }
}