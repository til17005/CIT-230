//Static in Weather Summary
var tempF = 76;
var speed = 5;
var chilly = (35.74 + (.6215 * tempF) - (35.75 * (Math.pow(speed,.16))) + ((.4275 * tempF) * (Math.pow(speed,.16))));
var windChill = Math.round(chilly*100)/100;
document.getElementById('output2').innerHTML = windChill;