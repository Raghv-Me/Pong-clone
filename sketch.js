let ball
let players
let POP=1
let up = false
let down = false
let speed
let hei
function keyPressed(){
    setMove(key,true)
}
function keyReleased(){

    setMove(key,false)
}
function setMove(a,b){
    if(a =='ArrowUp' && down == false)
    up = b
    else if (a == 'ArrowDown' && up == false)
    down = b
}
function setup() {
  createCanvas(640,360);
speed = createSlider(1,7,1,1)
hei = height/12
   ball=new Ball()
}

function draw() {
  background(0);
  for(let i =0;i<speed.value();i++)
  Update()
  Render()
  frameRate(120)

}
function Update(){

    ball.update(up,down)



}


function Render(){
    push()
    strokeWeight(3)
    stroke(255)
    line(width/2,0,width/2,height)
    line(0,hei,width,hei)
    line(0,height-hei,width,height-hei)
    noFill()
    circle(width/2,height/2,80)
pop()


    ball.show()

}
