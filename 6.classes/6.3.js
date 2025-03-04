

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

 function newRect(){
    let rect = new Rectangle(
        Math. trunc((Math.random()*250)*(Math.random() >= 0.5 ? 1 : -1)),
        Math. trunc((Math.random()*250)*(Math.random() >= 0.5 ? 1 : -1)),
        Math. trunc((Math.random()*15)*(Math.random() >= 0.5 ? 1 : -1)),
        Math. trunc((Math.random()*15)*(Math.random() >= 0.5 ? 1 : -1))
    )
    return rect
 }

 let rectArr = [];

 for(let i=0; i <= 999; i++){
    let rectangle = newRect();
    rectArr.push(rectangle);
    //console.log(i)
 }

 for(let j=1;j<=rectArr.length;j++){
    //console.log(j)
    for(let k=j;k<rectArr.length;k++){
        if(rectArr[j].collides(rectArr[k]) === false){
            console.log("rectangle "+j+" touche rectangle "+k);
        }else{
            console.log("can't touch this!!!!!!")
        }
        
    }
 }