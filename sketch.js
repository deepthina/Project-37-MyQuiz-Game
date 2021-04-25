var database;

var form, game, player;

var gameState=0;
var contestantCount;

var allPlayers;


function setup() {
  createCanvas(1000, 500);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();
}


function draw() {
  background("blue");

  if(contestantCount===2)
    game.update(1);

    if(gameState===1){
      game.play();
    }
}
