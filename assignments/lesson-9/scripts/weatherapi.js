let weatherURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=6f3bf18df5dd39d2e4dbbdffb43ff880';
let weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', weatherURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById("temp").innerHTML = weatherData.main.temp;
}