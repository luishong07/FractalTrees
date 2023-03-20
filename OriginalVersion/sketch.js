let angle = 0
function setup() {
    createCanvas(innerWidth, innerHeight);
    slider = createSlider(0, TWO_PI, PI/4, 0.01)
}

function draw() {
    background("black")
    translate(innerWidth/2, innerHeight)//make origin at the bottom
    
    stroke('white')
    angle += 0.000001
    // console.log(angle)
    branch(300)
    // frameRate(30)


}

function branch(length){
    // console.log(angle)
    line(0, 0, 0, - length)
    // angle = slider.value()
    angle += 0.00001
    translate(0, -length)
    if(length > 10){
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