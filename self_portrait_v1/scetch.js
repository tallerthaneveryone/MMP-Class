/* 
Self Portrait Version 1
by Brendan Doherty
*/

function setup() {
    createCanvas(600,360);
}

function   draw() {
background('green');

// face
fill(225);
triangle(450, 40, 600, 50)

// eyes
fill(360)
circle(90, 90, 100) // left
circle(300,90,100) // right 

// mouth
fill(255)
square(400, 150, 50)

// hair
fill(0000ff)
line(400, 60, 430, 80)
line(420, 60, 440, 80)
line(410, 60, 450, 80)
line(440, 60, 460, 80)
line(480, 60, 470, 80)
line(460, 60, 480, 80)
line(450, 60, 490, 80)




}