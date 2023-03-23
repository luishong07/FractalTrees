class Tree {
    constructor() {
        this.leaves = [];
        this.branches =[]
        for(let i = 0; i<100; i++){
            this.leaves.push(new Leaf())
        }
         
        let pos = createVector(width/2, height)
        let dir = createVector(0, -1)
        let root = new Branch(null,pos, dir)
        this.branches.push(root)
        let found = false
        let current = root
        while(!found){

            for(let i = 0; i < this.leaves.length; i++){
                let d = p5.Vector.dist(current.pos, this.leaves[i].pos)
                if(d < maxDist){
                    found = tree
                }
                  
            }
            if(!found){
                let branch = current.next()
                current= branch
                this.branches.push(current)
            }
        }
    }
    show(){
        for(let i = 0; i < this.leaves.length; i++){
            this.leaves[i].show()
        }
        for(let i =0; i < this.branches.length; i++){
            this.branches[i].show()
        }
    }
}
