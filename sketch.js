var canvas, backgroundImage;

var gameState = 0,finishedPlayers=0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;

var imgF;

var Obstacle;

var obsWidth,obsHeight;
var sound;
var ObstacleGroup

var incidentata;

var finishedPlayers;

var bronz, gold, silver;



var vampire;

var vampire = 0;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
  sound = loadSound('../sound/sliding.mp3');

  bronz = loadImage("../images/bronze.png");
  gold = loadImage("../images/gold.png");
  silver= loadImage("../images/silver.png");

   imgF = loadImage("../images/f1.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  ObstacleGroup= createGroup();

  xSet = false;
  game = new Game();
  game.getState();
  game.start();

  for(i=0; i<5; i++){
    obsWidth = random(200,950)
    obsHeight = random(-height*4, height-300)
  
    Obstacle = createSprite(obsWidth, obsHeight);
    Obstacle.addImage (imgF);

    ObstacleGroup.add(Obstacle)
  }

  


}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 && finishedPlayers === 0 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }

   if(finishedPlayers === 4){
     game.update(2);
   }
   
   if (gameState === 2 && finishedPlayers === 4 ) {
    game.displayRanks();
   }
  
  }
 
  
