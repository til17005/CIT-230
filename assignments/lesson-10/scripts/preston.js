let weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=6f3bf18df5dd39d2e4dbbdffb43ff880';
let weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', weatherURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById("temp").innerHTML = weatherData.main.temp;
    document.getElementById("hum").innerHTML = weatherData.main.humidity;
    document.getElementById("speed").innerHTML = weatherData.wind.speed;
    document.getElementById("desc").innerHTML = weatherData.weather[0].description;

    //Wind Chill
    var tempF = weatherData.main.temp;
    var speed = weatherData.wind.speed;
    var chilly = (35.74 + (.6215 * tempF) - (35.75 * (Math.pow(speed,.16))) + ((.4275 * tempF) * (Math.pow(speed,.16))));
    var windChill = Math.round(chilly*100)/100;
    document.getElementById('output2').innerHTML = windChill;
}

let weatherURL5 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=6f3bf18df5dd39d2e4dbbdffb43ff880';
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