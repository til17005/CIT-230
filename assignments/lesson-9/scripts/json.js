var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var townData = request.response;
    showTowns(townData);
}

function showTowns(jsonObj) {
    var town = jsonObj['towns'];
        
    for (var i = 0; i < town.length; i++) {

        if (town[i].name == "Preston" || town[i].name == "Soda Springs" || town[i].name == "Fish Haven") {

            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myImg = document.createElement("img");
            

            myH2.textContent = town[i].name;
            myPara1.textContent = town[i].motto;
            myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
            myPara3.textContent = 'Population: ' + town[i].currentPopulation;
            myPara4.textContent = 'Annual Rain Fall: ' + town[i].averageRainfall + '"';
            if (town[i].name == "Preston") {
                myImg.setAttribute("src", "images/prestonid.jpeg");
                myImg.setAttribute("width", "");
                myImg.setAttribute("height", "");
                myImg.setAttribute("alt", "Preston");
            }
            else if (town[i].name == "Soda Springs") {
                myImg.setAttribute("src", "images/sodaspringsid.jpeg");
                myImg.setAttribute("width", "");
                myImg.setAttribute("height", "");
                myImg.setAttribute("alt", "Soda Springs");
            }
            else if (town[i].name == "Fish Haven") {
                myImg.setAttribute("src", "images/fishhavenid.jpeg");
                myImg.setAttribute("width", "");
                myImg.setAttribute("height", "");
                myImg.setAttribute("alt", "Fish Haven");
            }

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            if (town[i].name == "Fish Haven") {
                var myBreak = document.createElement("br");
                myArticle.appendChild(myBreak);
            }
            myArticle.appendChild(myImg);            

            section.appendChild(myArticle);
        }
    }
}