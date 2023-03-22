let rules = [];
// koch curve 
// variables: F 
// constants: - +
// start: F
// rules: (F → F+F−F−F+F)
    // let axiom = "F";
    // let degrees = 90
    // rules[0] = {
    //     a: "F",
    //     b: "F+F-F-F+F",
    // };

//fractal plant
// variable: X F
// constants: = + []
//start: X
// rules: (X → F+[[X]-X]-F[-FX]+X), (F → FF)
//angle is 25 degrees

    let axiom = "X";
    let degrees = 25
    rules[0] = {
        a: "X",
        b: "F+[[X]-X]-F[-FX]+X",
    };
    rules[1]= {
        a: "F",
        b: "FF"
    }

//dragon curve
//variable: F G
//constants: + -
//start: F
//rules: (F → F+G), (G → F-G)
    // let axiom = "F"
    // let degrees = 90
    // rules[0]={
    //     a:"F",
    //     b:"F+G"
    // }
    // rules[1] ={
    //     a:"G",
    //     b:"F-G"
    // }
//



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
        if (current == "F" || current == "G") {
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
