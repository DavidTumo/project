var LivingCreature = require("./class.js")
module.exports = class Grass extends LivingCreature {
    mult() {
        var rand = this.chooseCell(0);
        var empty = rand[Math.floor((Math.random()*rand.length))];
        this.multiply++
        if (empty && this.multiply > 2) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1;
            var neGr = new Grass(newX, newY, 1);
            grassArr.push(neGr)
        }
    }

}