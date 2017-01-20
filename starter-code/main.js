console.log("JS file is connected to HTML! Woo!")
//variables for each card OLD CODE
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree="king";
var cardFour="king";*/

//create card array
var cards_2= ['queen', 'queen', 'king', 'king'];
//emtpy array for results
var cardsInPlay = [];

//link board to element in HTML
var board =document.getElementById ('game-board');
var createBoard=function(){
for (var i = 0; i<cards_2.length; i++) {
//crete new Div for cards	
var cardElement = document.createElement ('div');
//give cards 'type' based on king or queen attribute in array
cardElement.setAttribute('data-card', cards_2[i]);
//creates class in CSS//
cardElement.className="card";
//turns over cards (accesses isTwoCards Function to add card pictures)
cardElement.addEventListener('click', isTwoCards);
//appends cards to board element
document.querySelector('div').appendChild(cardElement);
}
};

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
//changes picture when a a click occurs
if (this.getAttribute('data-card') ==='king') {
	this.innerHTML = "<img src='king.png'/>";
} else {
	this.innerHTML = "<img src='queen.png'/>";
}
//checks number of cards
if (cardsInPlay.length === 2) {
	//pass cardsInPlay to isMatch function
		isMatch(cardsInPlay);
		//clears cards in play array, sets board for new round
		cardsInPlay = [];
	}
};

//calls function to start game
createBoard();

//use a counter somewhere to keep track of the score, maybe like this? 
//var runningTotal = function(isMatch){
	//for each isMatch run keeps score, up to 10 goes
	//for (var = i; i =10 i = isMatch)


//OLD CODE
	/* if (cardOne === cardTwo) {
alert ('Congratualtions, you found a match');
}
else {
alert ("Sorry your cards don't match, better luck next time");
}*/
