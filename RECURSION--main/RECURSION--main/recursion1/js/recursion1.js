const MaxLevel = 9;
const MinLevel = 6;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0);
    stroke(255);
    strokeWeight(8);
    stroke(123, 31, 162);
    fill(225, 190, 231);
    noLoop(); // prevent draw() from looping
    drawCircle(width/2,height/2,width/4, MaxLevel)
}
function drawCircle(x,y,d,count) {
    ellipse(x,y,d); 

    if(count-- > MinLevel){
        drawCircle(x + d / 2, y, d / 2, count);
        drawCircle(x - d/ 2, y, d / 2, count);
        drawCircle(x , y + d / 2, d/ 2, count);
    }
}
