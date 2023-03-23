class Branch {
    constructor(parent, pos, dir) {
        this.pos = pos;
        this.parent = parent;
        this.dir = dir;
        this.origDir = this.dir.copy();
        this.count = 0;
        this.len = 5;
    }

    next() {
        let nextDir = p5.Vector.mult(this.dir, this.len);
        let nextPos = p5.Vector.add(this.pos, nextDir);
        let nextBranch = new Branch(this, nextPos, this.dir.copy());
        return nextBranch;
    }
    show() {
        if (this.parent != null) {
            stroke(255,0,0);
            // strokeWeight(4);
            line(this.pos.x, this.pos.y,this.pos.z, this.parent.pos.x, this.parent.pos.y, this.parent.pos.z);
            // fill(255,0,0)
            // ellipse(this.pos.x, this.pos.y, 5,5)
        }
    }

    reset() {
        this.dir = this.origDir.copy();
        this.count = 0;
    }
}
