var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var userChosenColour;
var started = false;
var level = 0;

document.addEventListener("keydown", function(){
    if(!started){
      $("#level-title").html("Level "+" "+ level);
      nextSequence();
      started = true;
    }
});

$(".btn").click(function(){
    userChosenColour =  $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    var index = userClickedPattern.length - 1;
    checkAnswer(index);
    console.log(userClickedPattern);
});


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level++;
  $("#level-title").html("Level "+" "+ level);
  userClickedPattern = [];
}

function playSound(name){
  var audio = new Audio('sounds/'+name+'.mp3');
  audio.play();
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("Success");
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(nextSequence,1000);
    }

  }else{
    console.log("Wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").html("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
