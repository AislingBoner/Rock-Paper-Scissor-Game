var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3); 
var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;

function score(){
	var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}
setInterval(score, 50);
function convert(word){
	if(word === "paper") return '<i class="far fa-hand-paper"></i>';
	if(word === "rock") return '<i class="far fa-hand-rock"></i>';
	return '<i class="far fa-hand-scissors"></i>'
}
function game(UserChoice){
	var box = document.getElementById("challenge");
	box.style.display = "inline-flex";
	var userDiv = document.getElementById("YourObject");
	userDiv.innerHTML = convert(UserChoice);
	var comDiv = document.getElementById("ComObject");
	comDiv.innerHTML = convert(ComChoice);


	if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper"){
		win(UserChoice);
	}
	else if(UserChoice === ComChoice){
		draw(UserChoice);
	}
	else{
		lose(UserChoice);
	}

	function continuGame(){//Keep Playing 
		i = Math.floor(Math.random() * 3);
		ComChoice = choices[i];
		box.style.display = "none";
	}
	setTimeout(continuGame, 1200);
}

//Game Conditions & Outcome to Screen

function win(button){ //Player Wins Vs Computer
	UserPoints++;
    document.getElementById("who").innerHTML = "You Won!";
    var button = document.getElementById(button);
    button.classList.remove("button");
    button.classList.add("green");
	
	setTimeout(() => {
    	button.classList.add("button");
        button.classList.remove("green");
    }, 1200);
}
function draw(button){ //Player draws with the Computer
	document.getElementById("who").innerHTML = "It's a Draw.";
	var button = document.getElementById(button);
    button.classList.remove("button");
    button.classList.add("gray");
	
	setTimeout(() => {
    	button.classList.add("button");
        button.classList.remove("gray");
    }, 1200);
}
function lose(button){ //Player Loses Vs Computer
	ComPoints++; 
	document.getElementById("who").innerHTML = "You Lost.";
	var button = document.getElementById(button);
    button.classList.remove("button");
    button.classList.add("red");
	
	setTimeout(() => {
    	button.classList.add("button");
        button.classList.remove("red");
    }, 1200);
}