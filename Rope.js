class Rope {

    constructor(body1,body2,offsetX,offsetY) {

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.body1 = body1;
        this.body2 = body2;
        this.rope = Constraint.create(options);
        //this.rope = Bodies.rectangle(body1,body2,pointB,options);
        World.add(world,this.rope);
    }

    display() {
        
        var pos = this.body1.position;
        var pos1x = this.body2.position.x + this.offsetX;
        var pos1y = this.body2.position.y + this.offsetY;

        line(pos.x,pos.y,pos1x,pos1y);
    }

}