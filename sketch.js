var canvas;
var backgroundImage, player1_img, player2_img, track;
var lifeImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, player1, player2, heart, powerCoins, obstacles;
var players = [];

function preload() {
  backgroundImage = loadImage("./assets/bg.jpeg");
  player1_img = loadImage("../assets/shooter_3.png");
  player2_img = loadImage("../assets/shooter_3.png");
  track = loadImage("../assets/track.jpg");
  
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/zombie3.png");
  obstacle2Image = loadImage("./assets/zombie4.png");
  lifeImage = loadImage("./assets/life.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
