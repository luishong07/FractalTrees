let tree;
let max_dist = 500;
let min_dist = 10;

function setup() {
    // createCanvas(600, 600,WEBGL)
    createCanvas(innerWidth, innerHeight,WEBGL);

    tree = new Tree();
}

function draw() {
    orbitControl();
    // translate(0, 0, 0);

    background("black");
    tree.show();
    tree.grow();
}
