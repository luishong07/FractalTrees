class Leaf {
    constructor(){
        this.pos = createVector(random(width), random(height - 100));
        this.reached = false;
    }
    show(){
        noStroke();
        ellipse(this.pos.x, this.pos.y, 10, 10);
        if(this.reached){
            fill(255,0,0);

        }else{
            fill(0,255,0)
        }
    }
}