let weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=6f3bf18df5dd39d2e4dbbdffb43ff880';
let weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', weatherURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById("desc").innerHTML = weatherData.weather[0].description;
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

let weatherURL5 = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=6f3bf18df5dd39d2e4dbbdffb43ff880';
let weatherRequest5 = new XMLHttpRequest();

weatherRequest5.open('GET', weatherURL5, true);
weatherRequest5.send();

weatherRequest5.onload = function () {
    let weatherData5 = JSON.parse(weatherRequest5.responseText);
    console.log(weatherData5);

    /*
    document.getElementById('day1').innerHTML = weatherData5.list[6].main.temp_max;
    document.getElementById('day2').innerHTML = weatherData5.list[14].main.temp_max;
    document.getElementById('day3').innerHTML = weatherData5.list[22].main.temp_max;
    document.getElementById('day4').innerHTML = weatherData5.list[30].main.temp_max;
    document.getElementById('day5').innerHTML = weatherData5.list[38].main.temp_max;
    */

    for (var i = 0; i <= 7; i++) {
        if (weatherData5.list[i].dt_txt.includes ("15:00:00")) {
            document.getElementById('day1').innerHTML = weatherData5.list[i].main.temp_max;
            var icon = weatherData5.list[i].weather[0].icon;
            var img = document.createElement("img");
            img.src = "https://openweathermap.org/img/w/"+icon+".png";
            var src = document.getElementById("icon1"); 
            src.appendChild(img);
        }
    }

    for (var i = 8; i <= 15; i++) {
        if (weatherData5.list[i].dt_txt.includes('15:00:00')) {
            document.getElementById('day2').innerHTML = weatherData5.list[i].main.temp_max;
            var icon = weatherData5.list[i].weather[0].icon;
            var img = document.createElement("img");
            img.src = "https://openweathermap.org/img/w/"+icon+".png";
            var src = document.getElementById("icon2"); 
            src.appendChild(img);
        }
    }

    for (var i = 16; i <= 23; i++) {
        if (weatherData5.list[i].dt_txt.includes('15:00:00')) {
            document.getElementById('day3').innerHTML = weatherData5.list[i].main.temp_max;
            var icon = weatherData5.list[i].weather[0].icon;
            var img = document.createElement("img");
            img.src = "https://openweathermap.org/img/w/"+icon+".png";
            var src = document.getElementById("icon3"); 
            src.appendChild(img);
        }
    }

    for (var i = 24; i <= 31; i++) {
        if (weatherData5.list[i].dt_txt.includes('15:00:00')) {
            document.getElementById('day4').innerHTML = weatherData5.list[i].main.temp_max;
            var icon = weatherData5.list[i].weather[0].icon;
            var img = document.createElement("img");
            img.src = "https://openweathermap.org/img/w/"+icon+".png";
            var src = document.getElementById("icon4"); 
            src.appendChild(img);
        }
    }

    for (var i = 32; i <= 39; i++) {
        if (weatherData5.list[i].dt_txt.includes('15:00:00')) {
            document.getElementById('day5').innerHTML = weatherData5.list[i].main.temp_max;
            var icon = weatherData5.list[i].weather[0].icon;
            var img = document.createElement("img");
            img.src = "https://openweathermap.org/img/w/"+icon+".png";
            var src = document.getElementById("icon5"); 
            src.appendChild(img);
        }
    }
}