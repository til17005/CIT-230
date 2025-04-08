var today = new Date();
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                
document.getElementById("thisDay").innerHTML = day[today.getDay()] + ', ' + today.getDate() + ' ' + month[today.getMonth()] + ' ' +today.getFullYear();