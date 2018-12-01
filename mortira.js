class Mortira  {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 20;
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
        if(empty && this.energy>=30){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5;
            var newmor = new Mortira(newX,newY,5);
            mortiraArr.push(newmor)
        }
    }
    move(){
        var empty = random(this.chooseCell2(0))
        this.energy-=4
        if(empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
        }
    }

    eat(){
        var food = random(this.chooseCell2(4));     
        if(food){
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            for(var i in venomArr){
                if(venomArr[i].x == newX && venomArr[i].y == newY ){
                    venomArr.splice(i,1)

                }
            }
        
            this.x = newX
            this.y = newY
            this.energy +=5      
        }
    }
    die(){
       if(this.energy<=0){
        matrix[this.y][this.x] = 0;
        for(var i in mortiraArr){
            if(mortiraArr[i].x == this.x && mortiraArr[i].y == this.y ){
                mortiraArr.splice(i,1)

            }
        }
       }
    }
    
 }