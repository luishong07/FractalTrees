let tree = [];
let counter =0
let leaves = []
function setup() {
    createCanvas(innerWidth, innerHeight);
    // slider = createSlider(0, TWO_PI, PI/4, 0.01)
    let a = createVector(innerWidth / 2, innerHeight);
    let b = createVector(innerWidth / 2, innerHeight - 100);
    let root = new Branch(a, b);

    tree[0] = root;
}
function mousePressed() {
    // console.log("here");
    for (let i = tree.length-1; i >=0; i--) {
        if(!tree[i].finished){

            tree.push(tree[i].branchRight())
            tree.push(tree[i].branchLeft())
        }
        tree[i].finished = true
    }
    counter++
    if(counter == 5){
        for(let i = 0; i <tree.length; i++){
            if(!tree[i].finished){
                let leaf = tree[i].end.copy()
                leaves.push(leaf)
            }
        }
    }
}
function draw() {
    background("black");
    for (let i = 0; i < tree.length; i++) {
        tree[i].show();
        // tree[i].jitter()
    }
    for (let i = 0; i < leaves.length; i++) {
        fill("pink")
        ellipse(leaves[i].x, leaves[i].y, 8, 8)
        // tree[i].jitter()
    }
}
