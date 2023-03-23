let tree
let max_dist = 500
let min_dist = 10


function setup() {
    // createCanvas(600, 600)
    createCanvas(innerWidth, innerHeight)

    tree = new Tree()

}

function draw() {
    background('black')
    tree.show()
    tree.grow()
}
