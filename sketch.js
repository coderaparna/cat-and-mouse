var  bgimg;
var cat, catimg1, catimg2;
var mouse,mouseimg1,mouseimg2;

function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/cat1.png");
    catimg2 = loadAnimation("images/cat1.png");
    mouseimg2 = loadAnimation("images/cat1.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(750,50)
    jerry = createSprite(600,50)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x<(cat.width - mouse.width)/2){
        cat.addAnimation("catRunning",catimg2);
        cat.changeAnimation("catRunning");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }


}
