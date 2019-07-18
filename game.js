var level = 0;
var sequence = [];
var buttonsArray = [];
var audio;

document.addEventListener("keydown", function(){
  if(level == 0){
    startGame();
      $("#level-title").html("Level "+" "+ level);
  }
});

$(".btn").click(function(){
  var button = $(this).attr("id");
  buttonsArray.push(button);
  nextSequence(sequence, buttonsArray);
});


function startGame(){
var n = Math.floor(Math.random()*4) + 1;
switch (n) {
  case 1: $(".btn#green").addClass("pressed");
  sequence.push("green");
  audio = new Audio('sounds/green.mp3');
  audio.play();
  setTimeout(function(){$(".btn#green").removeClass("pressed");},1000);
  break;

  case 2: $(".btn#red").addClass("pressed");
  sequence.push("red");
  audio = new Audio('sounds/red.mp3');
  audio.play();
  setTimeout(function(){$(".btn#red").removeClass("pressed");},1000);
  break;

  case 3: $(".btn#yellow").addClass("pressed");
  sequence.push("yellow");
  audio = new Audio('sounds/yellow.mp3');
  audio.play();
  setTimeout(function(){$(".btn#yellow").removeClass("pressed");},1000);
  break;

  case 4: $(".btn#blue").addClass("pressed");
  sequence.push("blue");
  audio = new Audio('sounds/blue.mp3');
  audio.play();
  setTimeout(function(){$(".btn#blue").removeClass("pressed");},1000);
  break;

  default: audio = new Audio('sounds/wrong.mp3');
  audio.play();

}
level++;
btn = [];
}

function nextSequence(sequence, btn){

var sequenceLength = sequence.length;
var btnLength = btn.length;
var flag = 1;
console.log(sequence+""+btn);

$.each(sequence, function(index, value){
    if ($.inArray(value, btn) == -1){
      flag = 0;
    }
});

if(flag == 1){
  setTimeout(function(){startGame();},1000);
  $("#level-title").html("Level "+" "+ level);
}else{
  audio = new Audio('sounds/wrong.mp3');
  audio.play();
  $("#level-title").html("Game Over, Press Any Key to Restart");
  level = 0;
}

}
