var weather = "summer";
function setup() {
createCanvas(40*side,40*side);
background('#acacac');
}
var socket = io();
var side =20;
function drawWeather(w){
    weather=w
    var p =document.getElementById("seasons")
    console.log(weather);
    if(weather=="summer"){
       p.innerText="Summer"
    }
    else if(weather=="autumn"){
        p.innerText="Autumn"
        }
    else if(weather=="winter"){
        p.innerText="Winter"
    }
    else if(weather=="spring"){
        p.innerText="Spring"
    }
}

function drawMatrix(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x <matrix.length; x++) {

            if (matrix[y][x] == 1) {
                if(weather=="summer"){
                    fill("green");
                }
                else if(weather=="autumn"){
                    fill("lightgreen");
                }
                else if(weather=="winter"){
                    fill("white");
                }
                else if(weather=="spring"){
                    fill("darkgreen");
                }
               
            }

            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side);

        }
    }
}

socket.on("matrix",drawMatrix)
socket.on("weather",drawWeather)
socket.on("weather",function(w){
    Weather = w;
})
