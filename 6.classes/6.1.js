const prompt = require('prompt-sync')();


class Circle {
    constructor(xPos,yPos,radius){
        this.xPos = xPos,
        this.yPos = yPos,
        this.radius = radius
    }
    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface() {
        return 2*Math.PI*Math.pow(this.radius,2);
    }
}

let rond = new Circle(5,2,2);

console.log(rond.surface);

rond.move(9,8);

console.log(rond.xPos,rond.yPos);
