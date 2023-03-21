// variable: A B
// axiom: A
// rules: (A->AB), (B->A)
let angle 
let rules = [];
let axiom = "F";
rules[0] = {
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]",
};
let len = 50;
// rules[1] = {
//     a: "B",
//     b: "A",
// };
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
    background(55)
    stroke(255)
    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        if (current == "F") {
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
    angle = radians(25)
    createCanvas(500, 500);
    background(55);
    createP(axiom);
    turtle()
    let button = createButton("generate");
    button.mousePressed(generate);
}

function draw() {

}
