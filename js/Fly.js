class Fly{
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stifness: 1,
            length: 300
        }
        this.fly = Constraint.create(options);
        this.pointB = pointB
        World.add(world,this.fly);
    }
    display() {
        var pointA = this.fly.bodyA.position;
        var pointB = this.pointB;

        push();
        stroke(48, 22, 8);
        strokeWeight(3);
        line(pointB.x, pointB.y, pointA.x, pointA.y);   
        pop();
    }
}