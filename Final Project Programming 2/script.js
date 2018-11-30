var matrix = [];
matrix =fillMatrix(40,40)
console.log(matrix)
function fillMatrix(n,m){
  var matrix = []
  for(var i=0;i<n;i++){
    matrix.push([])
    for(var j =0;j<m;j++){
      
      matrix[i].push(0)
    }
  }
  return matrix
}
for(var g=0;g<200;g++){
  var x = Math.floor(Math.random()*30)
  var y =Math.floor(Math.random()*30)
  matrix[y][x]=1
}
for(var h=0;h<30;h++){
  var x = Math.floor(Math.random()*30)
  var y =Math.floor(Math.random()*30)
  matrix[y][x]=2
}
for(var h=0;h<90;h++){
  var x = Math.floor(Math.random()*30)
  var y =Math.floor(Math.random()*30)
  matrix[y][x]=3
}
for(var h=0;h<20;h++){
  var x = Math.floor(Math.random()*30)
  var y =Math.floor(Math.random()*30)
  matrix[y][x]=4
}
for(var h=0;h<40;h++){
  var x = Math.floor(Math.random()*30)
  var y =Math.floor(Math.random()*30)
  matrix[y][x]=5
}


var side = 20;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var venomArr = []; //amenaker
var mortiraArr = [];

function setup() {
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




    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
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
}


