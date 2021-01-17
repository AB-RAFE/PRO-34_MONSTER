class Hero{
    constructor(x,y,radius) {
        var options = {
            density: 1,
            friction:1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("images/Superhero-01.png");
        this.radius  = radius;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius+75,this.radius);
        pop();
    }
}