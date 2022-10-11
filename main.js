var image1 = ""
function preload(){
image1 = loadImage("gorilla.jpeg")
}

function setup(){
    console.log("inside the setup function")
canvas = createCanvas(500,500);
canvas.center()
}

function draw(){
console.log("inside the draw function")
image(image1,200,200,100,100)
fill(255,0,0)
stroke(255,0,0)
circle(40,40,75)
circle(460,40,75)
circle(460,460,75)
circle(40,460,75)
fill(0,255,0)
stroke(255,0,0)
rect(70,40,360,30)
}