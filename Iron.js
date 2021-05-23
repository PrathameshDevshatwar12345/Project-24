class Iron {
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'friction':3.0,
            'density':30.0,
            'isStatic':false
        }

        this.width=width;
        this.height=height;

        this.body=Bodies.rectangle(x,y,50,50,options);

        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(5);
        stroke("yellow");
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}