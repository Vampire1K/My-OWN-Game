var canvas, backgroundImage;

var gameState = 0,finishedPlayers=0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players, p1, p2, p3, p4;
var track, car1_img, car2_img, car3_img, car4_img;

var imgF;

var Obstacle;

var obsWidth,obsHeight;
var sound;
var ObstacleGroup

var incidentata;

var finishedPlayers;

var bronz, gold, silver;

var obstacleImg1,obstacleImg2,obstacleImg3,obstacleImg4;

var GirlImg, vampImg1;




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

  obstacleImg1 = loadImage("../images/ghost1.png");
  obstacleImg2 = loadImage("../images/Bone.jpg");
 
  obstacleImg4 = loadImage("../images/saet.jpg");

  girlImg = loadImage("../images/Girll.png");


  imgF = loadImage("../images/f1.png");
  vampimg1 = loadImage("../images/vamp.png");
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
    var rand_obs = Math.round(random(1,2));
    
    switch(rand_obs){
      case 1: Obstacle.addImage (obstacleImg1);
              break;
       case 2: Obstacle.addImage (obstacleImg2);
               break;
      // case 3: Obstacle.addImage (obstacleImg3);
      //         break;
      case 4: Obstacle.addImage (obstacleImg4);
              break;
            
    }
    ObstacleGroup.add(Obstacle);
  }

  


}


function draw(){
   //start the game
   background(255);

   //start the game
   if (playerCount === 4 && finishedPlayers === 0 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
    Player.getVampire();
    if(vampire===0){
      var rand= Math.round(random(1,4));
      Player.UpdateVampire (rand);
      //UpdateVampire.addimage("vampImg1");


    }
    else {
      console.log(vampire);} 
    game.play();
   }

   if(finishedPlayers === 4){
     game.update(2);
   }
   
   if (gameState === 2 && finishedPlayers === 4 ) {
    game.displayRanks();
   }
  
  }
 
  
