let tree
let maxDist = 500
let minDist = 10


function setup() {
    createCanvas(600, 600)
    tree = new Tree()
}

function draw() {
    background('black')
    tree.show()
    console.log('here')
}
