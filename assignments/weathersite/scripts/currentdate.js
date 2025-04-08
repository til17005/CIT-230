var today = new Date();
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                
document.getElementById("thisDay").innerHTML = day[today.getDay()] + ', ' + today.getDate() + ' ' + month[today.getMonth()] + ' ' +today.getFullYear();

//For five day
if(window.location.href.indexOf("sodasprings") || ("preston") || ("fishhaven") > -1) {
    document.getElementById("fiveDay1").innerHTML = day[today.getDay()] ;
    document.getElementById("fiveDay2").innerHTML = day[today.getDay()+1];
    document.getElementById("fiveDay3").innerHTML = day[today.getDay()+2];
    document.getElementById("fiveDay4").innerHTML = day[today.getDay()+3];
    document.getElementById("fiveDay5").innerHTML = day[today.getDay()+4];
}