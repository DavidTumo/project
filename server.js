var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

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
for (var g = 0; g <= 200; g++) {
    var x = Math.floor(Math.random() * 40)
    var y = Math.floor(Math.random() * 40)
    matrix[y][x] = 1
}
for (var h = 0; h <= 30; h++) {
    var x = Math.floor(Math.random() * 40)
    var y = Math.floor(Math.random() * 40)
    matrix[y][x] = 2
}
for (var h = 0; h <= 90; h++) {
    var x = Math.floor(Math.random() * 40)
    var y = Math.floor(Math.random() * 40)
    matrix[y][x] = 3
}
for (var h = 0; h <= 20; h++) {
    var x = Math.floor(Math.random() * 40)
    var y = Math.floor(Math.random() * 40)
    matrix[y][x] = 4
}
for (var h = 0; h <= 40; h++) {
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
    if (weatherinit%4== 0) {
        Weather = "spring"
    }
    else if (weatherinit%4 == 3) {
        Weather = "winter"
    }
    else if (weatherinit%4 == 2) {
        Weather = "autumn"
    }
    else if (weatherinit%4 == 1) {
        Weather = "summer"
    }

    io.sockets.emit("weather", Weather)
}
setInterval(sendWeather, 2000);
var fs = require('fs');
xotakerCnvac = 30;
gishatichCnvac = 90;
venomCnvac = 20;
mortiraCnvac = 40;
xotClec = 200;

xotakerSatkec = 0;
gishatichSatkec = 0;
venomSatkec = 0;
mortiraSatkec = 0;

xotakerKeran = 0;
gishatichKeran = 0;
venomKeran = 0;
mortiraKeran = 0;
xotKeran = 0;
var obj = {"info": []};
function main(){
    var file = "Statistics.json"
    obj.info.pop()
    obj.info.push({"Ծնված խոտակերների քանակը":xotakerCnvac, 
    "Ծնված գիշատիչների քանակը":gishatichCnvac,
     "Ծնված Վենոմների քանակը":venomCnvac,
    "Ծնված Մորտիրաներ քանակը":mortiraCnvac, 
    "Ծլած խոտերի քանակը":xotClec,
    "Սատկած խոտակերների քանակը":xotakerSatkec, 
    "Սատկած գիշատիչների քանակը":gishatichSatkec,
    "Սատկած Վենոմների քանակը":venomSatkec,
    "Սատկած Մորտիրաներ քանակը":mortiraSatkec,
    "Կերված խոտակերների քանակը":xotakerKeran, 
    "Կերված գիշատիչների քանակը":gishatichKeran,
    "Կերված Վենոմների քանակը":venomKeran,
    "Կերված խոտերի քանակը":xotKeran,
    "Խոտակեր կա": xotakerArr.length,
    "Գիշատիչ կա": gishatichArr.length,
    "Վենոմ կա": venomArr.length,
    "Մորտիրա կա": mortiraArr.length,
    "Խոտ կա": grassArr.length,});
    fs.writeFileSync(file, JSON.stringify(obj));
}
setInterval(main, 5000);

