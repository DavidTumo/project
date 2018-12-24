var LivingCreature = require("./class.js")
module.exports = class Gishatich extends LivingCreature {
    constructor(x,y,index){
        super(x,y,index);
        this.energy=11;
    }
    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewDirections();
       return super.chooseCell(character);
    }
    mult(){
        var rand = this.chooseCell(0);
        var empty = rand[Math.floor((Math.random()*rand.length))];
        if(empty && this.energy>=12){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3;
            var newgsh = new Gishatich(newX,newY,3);
            gishatichArr.push(newgsh)
            gishatichCnvac++
        }
    }
    move(){
        var rand = this.chooseCell(0);
        var empty = rand[Math.floor((Math.random()*rand.length))];
        this.energy-=2
        if(empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
        }
    }

    eat(){
        var rand = this.chooseCell(2);
        var food = rand[Math.floor((Math.random()*rand.length))];
        if(food){
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            for(var i in xotakerArr){
                if(xotakerArr[i].x == newX && xotakerArr[i].y == newY ){
                    xotakerArr.splice(i,1)
                    xotakerKeran++

                }
            }
        
            this.x = newX
            this.y = newY
            this.energy +=4
        }
    }
    die(){
       if(this.energy<=0){
        matrix[this.y][this.x] = 0;
        for(var i in gishatichArr){
            if(gishatichArr[i].x == this.x && gishatichArr[i].y == this.y ){
                gishatichArr.splice(i,1)
                gishatichSatkec++
            }
        }
       }
    }
    
 }