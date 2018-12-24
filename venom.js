var LivingCreature = require("./class.js")
module.exports = class Venom extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 10;
        this.directions2 = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1]
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2]
        ];

    }
    getNewDirections2() {
        this.directions2 = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y - 1],   
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2]
        ];
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
        ];
    }
    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
    }
    chooseCell2(character) {
        this.getNewDirections2();
        var found = [];
        for (var i in this.directions2) {
            var x = this.directions2[i][0];
            var y = this.directions2[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions2[i]);
                }
            }
        }
        return found;
    }
    mult() {
        var rand = this.chooseCell(0);
        var empty = rand[Math.floor((Math.random()*rand.length))];
        if (empty && this.energy >= 25) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4;
            var newven = new Venom(newX, newY, 4);
            venomArr.push(newven)
            venomCnvac++
        }
    }
    move() {
        var rand = this.chooseCell(0);
        var empty = rand[Math.floor((Math.random()*rand.length))];
        this.energy -= 2
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var rand1 = this.chooseCell(1);
        var food1 = rand1[Math.floor((Math.random()*rand1.length))];
        var rand2 = this.chooseCell(2);
        var food2 = rand2[Math.floor((Math.random()*rand2.length))];
        var rand3 = this.chooseCell(3);
        var food3 = rand3[Math.floor((Math.random()*rand3.length))];
        if (food1) {
            var newX = food1[0]
            var newY = food1[1]
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                    xotKeran++
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
        else if (food2) {
            var newX = food2[0]
            var newY = food2[1]
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                    xotakerKeran++

                }
            }

            this.x = newX
            this.y = newY
            this.energy += 4
        }
        else if (food3) {
            var newX = food3[0]
            var newY = food3[1]
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
                    gishatichKeran++

                }
            }

            this.x = newX
            this.y = newY
            this.energy += 6
        }

    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in venomArr) {
                if (venomArr[i].x == this.x && venomArr[i].y == this.y) {
                    venomArr.splice(i, 1)
                    venomSatkec++
                }
            }
        }
    }

}