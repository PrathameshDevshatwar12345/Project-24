class Stone {
    constructor(x,y) {
        var options={
            'restituiton':0.8,
            'friction':0.9,
            'density':12.0,
            'isStatic':false
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=70;
        this.height=70;

        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(5);
        stroke("black");
        fill("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}