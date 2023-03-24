let rules = []
//sierpinski triangle
// variables: A B
// constants: + -
// start: A
// rules: (A → B-A-B), (B → A+B+A)
// angle: 60
    let axiom = "A"
    let degrees = 60
    rules[0] = {
        a:"A",
        b:"B-A-B"
    }
    rules[1] = {
        a:"B",
        b:"A+B+A"
    }
let angle 
let len = 50;

let sentence = axiom;
const generate = () => {
    len *= 0.65
    let nextSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        let found = false;
        for (let j = 0; j < rules.length; j++) {
            if (current == rules[j].a) {
                found = true;
                nextSentence += rules[j].b;
                break;
            }
        }
        if (!found) {
            nextSentence += current;
        }
    }
    sentence = nextSentence;
    createP(sentence);
    turtle()
};

function turtle() {
    translate(width/2, height)
    // translate(width/2,height/2)
    background(55)
    stroke(255)
    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        if (current == "A" || current == "B") {
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (current == "+") {
            rotate(angle);
        } else if (current == "-") {
            rotate(-angle);
        } else if (current == "[") {
            push();
        } else if (current == "]") {
            pop();
        }
    }
}

function setup() {
    // noCanvas();
    angle = radians(degrees)
    createCanvas(500, 500);
    background(55);
    createP(axiom);
    turtle()
    let button = createButton("generate");
    button.mousePressed(generate);
}

function draw() {

}
