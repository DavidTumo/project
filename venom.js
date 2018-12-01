class Venom  {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 10;
        this.directions1 =[
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
         ];
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
    getNewDirections2(){
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
     getNewDirections1(){
                 this.directions1 =[
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
      chooseCell1(character) {
        this.getNewDirections1();
        var found = [];
         for (var i in this.directions1) {
            var x = this.directions1[i][0];
            var y = this.directions1[i][1];
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length)
         {
            if (matrix[y][x] == character) {
                found.push(this.directions1[i]);
            }
        }
        }
        return found;
    }
    chooseCell2(character) {
        this.getNewDirections2();
        var found = [];
         for (var i in this.directions2) {
            var x = this.directions2[i][0];
            var y = this.directions2[i][1];
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length)
         {
            if (matrix[y][x] == character) {
                found.push(this.directions2[i]);
            }
        }
        }
        return found;
    }
    mult(){
        var empty = random(this.chooseCell1(0))
        if(empty && this.energy>=25){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4;
            var newven = new Venom(newX,newY,4);
            venomArr.push(newven)
        }
    }
    move(){
        var empty = random(this.chooseCell1(0))
        this.energy-=2
        if(empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
        }
    }

    eat(){
        var food1 = random(this.chooseCell2(1));
        var food2 = random(this.chooseCell2(2));
        var food3 = random(this.chooseCell2(3));
        var food4 = random(this.chooseCell2(4));
        
        if(food1){
            var newX = food1[0]
            var newY = food1[1]
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            for(var i in grassArr){
                if(grassArr[i].x == newX && grassArr[i].y == newY ){
                    grassArr.splice(i,1)

                }
            }
        
            this.x = newX
            this.y = newY
            this.energy +=2
        }
        else if(food2){
            var newX = food2[0]
            var newY = food2[1]
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            for(var i in xotakerArr){
                if(xotakerArr[i].x == newX && xotakerArr[i].y == newY ){
                    xotakerArr.splice(i,1)

                }
            }
        
            this.x = newX
            this.y = newY
            this.energy +=4
        }
        else if(food3){
            var newX = food3[0]
            var newY = food3[1]
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            for(var i in gishatichArr){
                if(gishatichArr[i].x == newX && gishatichArr[i].y == newY ){
                    gishatichArr.splice(i,1)

                }
            }
        
            this.x = newX
            this.y = newY
            this.energy +=6
        }
  
}
    die(){
       if(this.energy<=0){
        matrix[this.y][this.x] = 0;
        for(var i in venomArr){
            if(venomArr[i].x == this.x && venomArr[i].y == this.y ){
                venomArr.splice(i,1)

            }
        }
       }
    }
    
 }