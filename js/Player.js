class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.xPos = 0;
    this.name = null;
    this.place = 0;  
    this.life = 1;
    this.leftright = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  static getVampire(){
    var playervampRef = database.ref('vampirePlayer');
    playervampRef.on("value",(data)=>{
      vampire = data.val();
      console.log("Vampire" + vampire);
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      place: this.place,
      xPos: this.xPos,
      life : this.life,
      leftright : this.leftright
    });
  }

  // player.UpdateVampire(3)

  static UpdateVampire(vplayer){
    database.ref('/').update({
      vampirePlayer : vplayer
    });
  }

  getFinishedPlayers(){
    var finishedPlayersRef = database.ref('finishedPlayers');
    finishedPlayersRef.on("value",(data)=>{
        finishedPlayers = data.val();
    });
}

// static not be binded fetched using class name
static updateFinishedPlayers(){
    database.ref('/').update({
        finishedPlayers: finishedPlayers + 1
    });
    this.place += 1;
    console.log("FP : " +finishedPlayers + 1 );
    console.log(this.place);
}


  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
