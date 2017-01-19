console.log("JS file is connected to HTML! Woo!")
//variables for each card OLD CODE
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree="king";
var cardFour="king";*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

//link board to element in HTML
var gameBoard =document.getElementById ('game-board');
var createBoard=function(){
//counter //
for (var i = 0; i <= cards.length; i++) {
//creates a div for each of the cards	
var cardElement = document.createElement ('div');
//creates class in CSS
cards.className="card";
//sets data-card as an array element
cardElement.setAttribute('data-card', cards[i]);
//runs isTwoCards if clicked
cardElement.addEventListener ('click',isTwoCards)
//append the card to the board
gameBoard.appendChild(cardElement);
}
}
//calls function to create cards
createBoard();


//test if cards are a match
var isMatch = function (cards){
   if  (cards[0] === cards[1] || cards[2] === cards [3]) {
alert ('Congratualtions, you found a match');
}
else {
alert ("Sorry your cards don't match, better luck next time");
}
}
//checks to see if there are cards in play
var isTwoCards = function (){
cardsInPlay.push(this.getAttribute('data-card'));
}
//I think the images go here, but I can't get this bit to work!
/*
if (attribute('data-card') ==='king') {
this.innerHTML = '<img src=king.png alt 'king of clubs'/>
this.innerHTML = '<img src=queen.png alt 'queen of clubs'/>
}
*/
if (cardsInPlay.length === 2) {
	//pass cardsInPlay to isMatch function
		isMatch(cardsInPlay);
		//clears cards in play array
		cardsInPlay = [];
	}

//calls function to start game
createBoard();

//use a counter somewhere to keep track of the score, maybe like this? 
//var runningTotal = function(isMatch){
	//for each isMatch run keeps score, up to 10 goes
	//for (var = i; i =10 i = isMatch)
}

//OLD CODE
	/* if (cardOne === cardTwo) {
alert ('Congratualtions, you found a match');
}
else {
alert ("Sorry your cards don't match, better luck next time");
}*/
