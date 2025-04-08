let templeURL = 'https://til17005.github.io/assignments/templesite/data/temple.json';
let request = new XMLHttpRequest();

request.open('GET', templeURL, true);
request.send();

request.onload = function () {
    let close = JSON.parse(request.responseText);
    console.log(close);

    if (window.location.href.includes ("slc.html")) {
        document.getElementById("slc0").innerHTML = close.temples[0].closures[0];
        document.getElementById("slc1").innerHTML = close.temples[0].closures[1];
        document.getElementById("slc2").innerHTML = close.temples[0].closures[2];
        document.getElementById("slc3").innerHTML = close.temples[0].closures[3];
        document.getElementById("slc4").innerHTML = close.temples[0].closures[4];
        document.getElementById("slc5").innerHTML = close.temples[0].closures[5];
        document.getElementById("slc6").innerHTML = close.temples[0].closures[6];
        document.getElementById("slc7").innerHTML = close.temples[0].closures[7];
        document.getElementById("slc8").innerHTML = close.temples[0].closures[8];
        document.getElementById("slc9").innerHTML = close.temples[0].closures[9];
        document.getElementById("slc10").innerHTML = close.temples[0].closures[10];
    }
    else if (window.location.href.includes ("payson.html")) {
        document.getElementById("pay0").innerHTML = close.temples[1].closures[0];
        document.getElementById("pay1").innerHTML = close.temples[1].closures[1];
        document.getElementById("pay2").innerHTML = close.temples[1].closures[2];
        document.getElementById("pay3").innerHTML = close.temples[1].closures[3];
        document.getElementById("pay4").innerHTML = close.temples[1].closures[4];
        document.getElementById("pay5").innerHTML = close.temples[1].closures[5];
        document.getElementById("pay6").innerHTML = close.temples[1].closures[6];
        document.getElementById("pay7").innerHTML = close.temples[1].closures[7];
        document.getElementById("pay8").innerHTML = close.temples[1].closures[8];
        document.getElementById("pay9").innerHTML = close.temples[1].closures[9];
        document.getElementById("pay10").innerHTML = close.temples[1].closures[10];
    }
    else if (window.location.href.includes ("timp.html")) {
        document.getElementById("timp0").innerHTML = close.temples[2].closures[0];
        document.getElementById("timp1").innerHTML = close.temples[2].closures[1];
        document.getElementById("timp2").innerHTML = close.temples[2].closures[2];
        document.getElementById("timp3").innerHTML = close.temples[2].closures[3];
        document.getElementById("timp4").innerHTML = close.temples[2].closures[4];
        document.getElementById("timp5").innerHTML = close.temples[2].closures[5];
        document.getElementById("timp6").innerHTML = close.temples[2].closures[6];
        document.getElementById("timp7").innerHTML = close.temples[2].closures[7];
        document.getElementById("timp8").innerHTML = close.temples[2].closures[8];
        document.getElementById("timp9").innerHTML = close.temples[2].closures[9];
        document.getElementById("timp10").innerHTML = close.temples[2].closures[10];
        document.getElementById("timp11").innerHTML = close.temples[2].closures[11];
    }
    else if (window.location.href.includes ("jordan.html")) {
        document.getElementById("jor0").innerHTML = close.temples[3].closures[0];
        document.getElementById("jor1").innerHTML = close.temples[3].closures[1];
        document.getElementById("jor2").innerHTML = close.temples[3].closures[2];
        document.getElementById("jor3").innerHTML = close.temples[3].closures[3];
        document.getElementById("jor4").innerHTML = close.temples[3].closures[4];
        document.getElementById("jor5").innerHTML = close.temples[3].closures[5];
        document.getElementById("jor6").innerHTML = close.temples[3].closures[6];
        document.getElementById("jor7").innerHTML = close.temples[3].closures[7];
        document.getElementById("jor8").innerHTML = close.temples[3].closures[8];
        document.getElementById("jor9").innerHTML = close.temples[3].closures[9];
        document.getElementById("jor10").innerHTML = close.temples[3].closures[10];
        document.getElementById("jor11").innerHTML = close.temples[3].closures[11];
        document.getElementById("jor12").innerHTML = close.temples[3].closures[12];
    }
}