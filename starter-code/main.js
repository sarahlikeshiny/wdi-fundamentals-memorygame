console.log("JS file is connected to HTML! Woo!")
//variables for each card//
var cardOne = "queen";
var cardTwo = "queen";
var cardThree="king";
var cardFour="king";

//function to create cards in JS//
var createCards=function(){

var gameBoard =document.getElementById ('game-board');
//counter creates 4 cards//
for (var i = 0; i <= 3; i++) {
//creates new var and new div//	
var cards = document.createElement ('div');
//creates class in CSS//
cards.className="card";
//appends cards to board//
document.querySelector('div').appendChild(cards);
}
}
//calls card creating function//
createCards ();
	/*1  (cardOne === cardTwo) {
alert ('Congratualtions, you found a match');
}
else {
alert ("Sorry your cards don't match, better luck next time");
}*/
