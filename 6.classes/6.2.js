


class Rectangle{
   constructor(topLeftXPos,topLeftYPos,width,length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
   }
   collides(otherRectangle){
       let topLeftXPos1 = otherRectangle.topLeftXPos;
       let topLeftYPos1 = otherRectangle.topLeftYPos;
       let width1 = otherRectangle.width;
       let length1 = otherRectangle.length;
       
       let topLeftXPos2 = this.topLeftXPos;
        let topLeftYPos2 = this.topLeftYPos;
        let width2 = this.width;
        let length2 = this.length;

        if(
            (topLeftXPos1 >= topLeftXPos2+width2) ||
            (topLeftXPos1+width1 <= topLeftXPos2) ||
            (topLeftYPos1 >= topLeftYPos2+length2)||
            (topLeftYPos1+length1 <= topLeftYPos2)
        ){
            return false
        }else{
            return true
        }
   }
}


let rect = new Rectangle(3,2,2,5)
console.log(new Rectangle(3,4,4,4).collides(rect))//true
console.log(new Rectangle(10,10,2,2).collides(rect))//false