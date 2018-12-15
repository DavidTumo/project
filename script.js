
function setup() {

createCanvas(40*side,40*side);
background('#acacac');
}
var socket = io();
var side =20;

function drawMatrix(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x <matrix.length; x++) {

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
}
socket.on("matrix",drawMatrix)