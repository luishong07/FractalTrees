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
        var nextDir = p5.Vector.mult(this.dir, this.len);
        var nextPos = p5.Vector.add(this.pos, nextDir);
        var nextBranch = new Branch(this, nextPos, this.dir.copy());
        return nextBranch;
    }
    show() {
        if (this.parent != null) {
            stroke(255);
            strokeWeight(4);
            line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
        }
    }

    reset() {
        this.dir = this.origDir.copy();
        this.count = 0;
    }
}
