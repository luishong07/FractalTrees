let angle = 0
let slider 
function setup() {
    createCanvas(innerWidth, innerHeight);
    slider = createSlider(0, TWO_PI, PI/4, 0.01)
}

function draw() {
    background("black")
    translate(innerWidth/2, innerHeight)//make origin at the bottom
    
    stroke('white')
    branch(300)

}

function branch(length){
    line(0, 0, 0, - length)
    angle = slider.value()
    translate(0, -length)
    if(length > 4){
        push()
        rotate(angle)
        branch(length*0.67)
        pop()
        push()
        rotate(-angle)
        branch(length*0.67)
        pop()
    }
}