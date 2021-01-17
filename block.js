class Block{
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,50,75,options);
        
        World.add(world, this.body);
    }
    display(){
       
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("blue");
        rect(0,0,50,75);
        pop();
    }
}