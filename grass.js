var LivingCreature = require("./class.js")
module.exports = class Grass extends LivingCreature {
    mult() {
        
        var rand = this.chooseCell(0);
        var empty = rand[Math.floor((Math.random()*rand.length))];
        this.multiply++
        var count = 3
        if(Weather=="summer"){
            count=4
        }
        else if(Weather=="autumn"){
            count=6
        }
        else if(Weather=="winter"){
            count=10
        }
        else if(Weather=="spring"){
            count=2
        }
        if (empty && this.multiply > count) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1;
            var neGr = new Grass(newX, newY, 1);
            grassArr.push(neGr)
            xotClec++
        }
    }

}
