class Monster{
    constructor(x,y,radius) {
        var options = {
            density: 1,
            friction:1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image1 = loadImage("images/Monster-01.png");
        this.image2 = loadImage("images/Monster-02.png");
        this.radius  = radius;
        World.add(world,this.body);
    }
    display() {
        if(this.body.speed < 3) {
            var pos = this.body.position
            push();
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image1,0,0,this.radius+75,this.radius+100);
            pop();
        }
        else{
            var pos = this.body.position
            push();
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image2,0,0,this.radius+75,this.radius+100);
            pop();

            textSize(50);
            strokeWeight(2)
            stroke(255,0,0)
            text("YOU KILLED THE MONSTER !!!",width/2,400)
        }
    }
}