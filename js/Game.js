class Game {
          constructor(){
        
          }
        
          getState(){
            var gameStateRef  = database.ref('gameState');
            gameStateRef.on("value",function(data){
               gameState = data.val();
            })
        
          }
        
          update(state){
            database.ref('/').update({
              gameState: state
            });
          }
        
          async start(){
            if(gameState === 0){
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
              }
              form = new Form()
              form.display();
            }
        
            p1 = createSprite(100,200);
            p1.scale=0.5;
            p1.addImage(girlImg);
            p2 = createSprite(300,200);
            p2.scale=0.5;
            p2.addImage(girlImg);
            p3 = createSprite(500,200);
            p3.scale=0.5;
            p3.addImage(girlImg);
            p4 = createSprite(700,200);
            p4.scale=0.5;
            p4.addImage(girlImg);

            


            players = [p1, p2,p3, p4]; 
            Player.getVampire();
            // for(var vamp in players){
            //   var gamePlayer = "p"+vampire;
            //   console.log(players[vamp]);
            //   if(gamePlayer===players[vamp]){
            //     console.log(vampimg1);
            //     players[vamp].addImage(vampimg1);
            //   }
            //   else{
            //     players[vamp].addImage(girlImg);
            //   }
            // }

            incidentata = false;
          }
        
          /*play(){
            console.log("in play");
            form.hide();
        
            Player.getPlayerInfo();
            player.getFinishedPlayers();
            
            if(allPlayers !== undefined){
              //var display_position = 100;
              image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
              //index of the array
              var index =0;
        
              //x and y position of the cars
              var x =200;
              var y;
        
              for(var plr in allPlayers){
                //add 1 to the index for every loop
                index = index + 1 ;
                x = 200 + (index * 200) + allPlayers[plr].xPos;
                y = displayHeight - allPlayers[plr].distance ;
                //position the cars a little away from each other in x direction
               // x = x + 200;
                //use data form the database to display the cars in y direction
              // y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                textAlign(CENTER);
                textSize(20);
                text(allPlayers[plr].name, cars[index - 1].x, cars[index - 1].y + 75);
                if (index === player.index){
                  cars[index - 1].shapeColor = "red";
                  camera.position.x = displayWidth/2;
                  camera.position.y = cars[index-1].y

                  if(cars[index-1].isTouching(ObstacleGroup))
                  {
                    sound.play();
                    yVel-= 0.9
                  }
                }
               
              }
        
            }/*
        
            
            if(player.distance < 4000){  // before end pointyVel
              if(keyIsDown(38) && player.index !== null){
                  yVel += 0.9;
                  if(keyIsDown(37)){
                      xVel -= 0.2;
                  }
                  if(keyIsDown(39)){
                      xVel += 0.2;
                  }
              }else if(keyIsDown(38) && yVel > 0 && player.index !== null){
                  yVel -= 0.1;
                  xVel *= 0.9;
              }else{
                  yVel *= 0.985;
                  xVel *= 0.985;
              }
            } else if (incidentata === false){
                yVel*=0.7;
                xVel*=0.7;
                Player.updateFinishedPlayers();
                player.place = finishedPlayers;
                player.update();
                incidentata = true;

            }else{
              yVel*=0.7;
              xVel*=0.7;
            }
        
          //move the car
          player.distance += yVel;
          yVel *= 0.98;
          player.xPos += xVel;
          xVel *= 0.985;
          player.update();
          //display sprites
          drawSprites();
        }
           
        displayRanks(){
          camera.position.x =0;
          camera.position.y =0;

          imageMode(CENTER);

          Player.getPlayerInfo();

          textAlign (CENTER);
          textSize (50);
         
    
          image(bronz,displayWidth/-4,-100+displayWidth/9,200,240);
          image(gold,displayWidth/4,-100+displayWidth/10,225,270);
          image(silver,0,-100,250,300);

          for(var plr in allPlayers){ // allPlayers[plr].place
            if (allPlayers[plr].place === 1){
              text("1st : "+ allPlayers[plr].name, 0,85)
              
            }
           else if (allPlayers[plr].place === 2){
             text("2nd : "+ allPlayers[plr].name, displayWidth/4, displayHeight/9+ 73);

           }
           else if (allPlayers[plr].place === 3){
            text("3rd : "+ allPlayers[plr].name, displayWidth/-4, displayHeight/10 + 76);

          }
          else {
            textSize (30);
            text ("honarable mention : " + allPlayers[plr].name, 0, 225);
          }
        }

        
      } */

      // ------------------------------------------Vampire play-------------------------------------------//

      play(){
      
        
       form.hide();
        
       Player.getPlayerInfo();

         //var display_position = 100;
       if(allPlayers!== undefined){  
        
        //index of the array
        var index = 0;
        var x = 0;
        var y=0;
        var display_position =100;
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the players a little away from each other in x direction
          x = x + 200;
          y = displayHeight - allPlayers[plr].distance ;
          //use data form the database to display the cars in y direction
          //y = displayHeight - allPlayers[plr].distance;
          players[index-1].x = x;
          players[index-1].y = y;
  
          if (index === player.index){
            players[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = players[index-1].y
          }
          display_position +=30;
          textSize(15);
          text(allPlayers[plr].name, displayWidth-250,display_position)
          var bloodX =displayWidth-300;

          if(allPlayers[plr].life===1){
            bloodbank = createSprite(bloodX,display_position,20,20);
            bloodbank.shapeColor="green";
          }
          else {
            bloodbank = createSprite(bloodX,display_position,20,20);
            bloodbank.shapeColor="red";
          }
        }
  
      }
       
      //comment243 to 46
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }

      
      //uncomment
      /*if(keyIsDown(38) && player.index !== null){
         player.distance +=50 // y coordinate - upwards direction
                  if(keyIsDown(37)){
                      player.leftright -=20;
                  }
                  if(keyIsDown(39)){
                      player.leftright +=20;
                  }
        player.update();
      }*/
            
      // IF CONDITION - CHECK IF VAMPIREPLAYER !== PLAYER.index
          if(vampirePlayer !== Player.index)

      // CHECK IF PLAYER TOUCHES OBSTACLE - PLAYER.LIFE=0;
      if(player.isTouching(Obstacle)){
        player.life= 0;
      }
    
      
      drawSprites();
  }




    }

