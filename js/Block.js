class Block{
    constructor(x,y,width,height) {
        var options = {
            restitution:0.4,
            density:0.5,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(0);
        fill(255,0,0);
        rect(0,0,this.width,this.height);
        pop();
    }
}