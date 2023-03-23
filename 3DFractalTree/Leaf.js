class Leaf {
    constructor(){
        this.pos = createVector(random(-width/2,width/2), random(-height/2 ,height/2),random(-height/2 ,height/2));
        this.reached = false;
    }
    show(){
        noStroke();
        push()
        translate(this.pos.x,this.pos.y, this.pos.z)
        ellipse(0,0, 10, 10);
        // sphere(4)
        pop()
        if(this.reached){
            fill(255,0,0);

        }else{
            fill(0,255,0)
        }
    }
}