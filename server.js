var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(8080);

matrix = [];
matrix = fillMatrix(40, 40)
function fillMatrix(n, m) {
    var matrix = []
    for (var i = 0; i < n; i++) {
        matrix.push([])
        for (var j = 0; j < m; j++) {

            matrix[i].push(0)
        }
    }
    return matrix
}
for (var g = 0; g < 200; g++) {
    var x = Math.floor(Math.random() * 40)
    var y = Math.floor(Math.random() * 40)
    matrix[y][x] = 1
}
for (var h = 0; h < 30; h++) {
    var x = Math.floor(Math.random() * 40)
    var y = Math.floor(Math.random() * 40)
    matrix[y][x] = 2
}
for (var h = 0; h < 90; h++) {
    var x = Math.floor(Math.random() * 40)
    var y = Math.floor(Math.random() * 40)
    matrix[y][x] = 3
}
for (var h = 0; h < 20; h++) {
    var x = Math.floor(Math.random() * 40)
    var y = Math.floor(Math.random() * 40)
    matrix[y][x] = 4
}
for (var h = 0; h < 40; h++) {
    var x = Math.floor(Math.random() * 40)
    var y = Math.floor(Math.random() * 40)
    matrix[y][x] = 5
}
var Grass = require("./grass.js")
var Xotaker = require("./xotaker.js")
var Gishatich = require("./gishatich.js")
var Venom = require("./venom.js")
var Mortira = require("./mortira.js")

grassArr = [];
xotakerArr = [];
gishatichArr = [];
venomArr = []; //amenaker
mortiraArr = [];

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1)
            grassArr.push(gr)

        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y);
            xotakerArr.push(xt);

        }
        else if (matrix[y][x] == 3) {
            var gsh = new Gishatich(x, y);
            gishatichArr.push(gsh);

        }
        else if (matrix[y][x] == 4) {
            var ven = new Venom(x, y);
            venomArr.push(ven);

        }
        else if (matrix[y][x] == 5) {
            var mor = new Mortira(x, y);
            mortiraArr.push(mor);

        }
    }

}

var arajin = false;
io.on('connection', function (socket) {
    if (!arajin) {
        setInterval(drawServerayin, 275);
        arajin = true;
    }

})


function drawServerayin() {
    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].mult()
        xotakerArr[i].move()
        xotakerArr[i].eat()
        xotakerArr[i].die()
    }

    for (var i in gishatichArr) {
        gishatichArr[i].mult()
        gishatichArr[i].move()
        gishatichArr[i].eat()
        gishatichArr[i].die()
    }

    for (var i in venomArr) {
        venomArr[i].move()
        venomArr[i].eat()
        venomArr[i].mult()
        venomArr[i].die()
    }
    for (var i in mortiraArr) {
        mortiraArr[i].move()
        mortiraArr[i].eat()
        mortiraArr[i].mult()
        mortiraArr[i].die()
    }
    io.sockets.emit("matrix", matrix)

}
var weatherinit = 0
Weather = "summer"
function sendWeather() {
    weatherinit++
    if (weatherinit == 6) {
        weatherinit = 1
    }
    else if (weatherinit == 5) {
        Weather = "spring"
    }
    else if (weatherinit == 4) {
        Weather = "winter"
    }
    else if (weatherinit == 3) {
        Weather = "autumn"
    }
    else if (weatherinit == 2) {
        Weather = "summer"
    }

    io.sockets.emit("weather", Weather)
}

setInterval(sendWeather, 2000);

