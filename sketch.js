var canvas;
var gameState = 0;
var contestantCount, answer, database, question, contestant, quiz;

function setup(){
  canvas = createCanvas(850,400);

  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("pink");

  
}
