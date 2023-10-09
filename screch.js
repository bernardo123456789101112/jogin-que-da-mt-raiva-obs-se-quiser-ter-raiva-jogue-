var ball;
var traco;
var ballimg="";
var parede1="";
var parede2="";
var parede3="";
var i=3;
var brokos;
var som="";
var game="";
var ballmusc="";
game_estado="";
plac=0
vidas=3;
function preload(){
ballimg=loadImage("./img/bola.png");
som=loadSound("./oi/music.mp3");
game=loadSound("./oi/game-over-evil.mp3");
ballmusc=loadSound("./oi/edge.mp3");


}
function setup(){
    canvas=createCanvas(windowWidth, windowHeight);
    //canvas.center();
    parede3= createSprite(screen.width/2, 0, screen.width,10);
    parede2= createSprite(0, screen.height/2, 10, screen.height);
    parede1= createSprite(screen.width, screen.height/2, 10, screen.height);
    ball= createSprite(200, 500, 20, 20);
    ball.addImage(ballimg);
    traco= createSprite(200, screen.height-200, 90, 20);
    ball.scale=0.03;
    
  
    console.log(screen.width);
    brokos=createGroup();

    broko(200,"red");
    broko(200+41,"blue");
    broko(200+41+41,"orange");
    broko(200+41+41+41,"green");
    broko(200+41+41+41+41,"white");
    game_estado="lancar";
    
}

function draw(){
    background("black");

if(game_estado=="lancar"){
    ball.velocityY=0;
    ball.velocityX=0;
    text("precione o botão do mouse",300,20)
}
else if(game_estado=="jogar"){
    ball.bounceOff(traco,musci);
    ball.bounceOff(parede1);
    ball.bounceOff(parede2);
    ball.bounceOff(parede3);
    ball.bounceOff(brokos,nobrokos);
    
    if( ball.isTouching(traco)){
        i++;
        ball.velocityY=i;
        
    }
    if( ball.isTouching(parede1)){
        i++;
        ball.velocityY=i;
    }
    
    if( ball.isTouching(parede2)){
        i++;
        ball.velocityY=i;
    }
    
    if( ball.isTouching(parede3)){
        i++;
        ball.velocityY=i;
    }
    text("placar:"+plac,20,20)
   
    if(!brokos[0]){
        text("parabens",100,300)
    ball.velocityX=0;
    ball.velocityY=0;
}
if(ball.y>=screen.height){
    game.play();
    ball.y=500;
    ball.x=200;
    vidas=vidas-1;
    game_estado="lancar";
}
if(vidas<=0){
    game_estado="fim";
}

brokos.setVelocityYEach(0.2)
}
else if(game_estado=="fim"){
    ball.remove()
    text("gameover", 500, 500)
}

text("vidas:"+vidas,100, 20);
drawSprites();
control();

    
}
function control(){
    
    if(keyDown("a")){
      traco.x=traco.x-15;
  }
  if(keyDown("d")){
    traco.x=traco.x+15;
}
if(traco.x>screen.width-45){
    traco.x=screen.width-45;
}
if(traco.x<45){
    traco.x=45;
}
}
function broko(y, color){
    for(var o=0; o<20; o++){
        broco=createSprite(100+86*o,y, 80, 25);
        broco.shapeColor=color;
        brokos.add(broco);
    }
}
function musci(ball,traco){
    ballmusc.play();
}
function nobrokos(ball,broco){
som.play();
broco.remove();
plac++;
if(ball.velocityY>-12&& ball.velocityY<12){
    ball.velocityY*=1.5;
    ball.velocityX*=1.5;
}

}
function mouseClicked(){
    if(game_estado=="lancar"){
    ball.velocityY=i;
    ball.velocityX=3;
    game_estado="jogar"
    console.log("oi");
    }

}
