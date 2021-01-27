var canvas, backgroundImage;
var gameState=0;
var playerCount=0;
var database;
var bg1;
var thief1,thief2;
var thiefb,thiefa;
var player;
var form;
var game;
function preload(){
bg1=loadImage("img/house1.jfif");
thiefb=loadImage("img/thief1.png")
thiefa=loadImage("img/thief2.png")
}

function setup(){
  canvas = createCanvas(1150,550);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();



}


function draw(){
  background (bg1)

  if(playerCount === 2){
    game.update(1);
    
  }
if(gameState===1){
  clear();
  game.play();
}

if(gameState === 2){
  game.end();
}

}
