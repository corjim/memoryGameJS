const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false; // variable when card is flipped. Card not flipped = false.
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return; // leave the board as is (unlocked) and allow the functions under to return.

    if (this === firstCard)
        return;

    // this.classList.toggle('flip') // " this" represents whichever current element that was clicked from the loop element.
    this.classList.add('flip');

    if(!hasFlippedCard) {
    // first click
        hasFlippedCard = true;
        firstCard = this;
        // if flippeCard is false, then make it true and whichever card clicked is the firstCard.

        return;
    }
        // second click
        secondCard = this;
        
        // if the hasFlippedCard is set back to false, make the the click the secondCard.

        // do card match? 
        // make use of data attribute.
        
        checkForMatch();
    
}

function checkForMatch() {

    //MATCHIING THE CARDS
    if(firstCard.dataset.tg === secondCard.dataset.tg){
        // do the cards match?
        
        disabledCards();
            
    } 
    else{
        // not a match
        unflipCards();            
    }
 }

            // HELP FUNCTIONS

function disabledCards() {
    // CARDS DO NOT MATCH.

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    console.log("function was removed"); // fires when the card matches.
    resetBoard();
}

function unflipCards() {
    lockBoard = true; // incase if its not a match, lock it.

    setTimeout( () =>{
        firstCard.classList.remove('flip'); // Removes the flip if both datasets didn't match for both cards.
        secondCard.classList.remove('flip');
    
        resetBoard();
    },1000); // The setTimeOut method helps delay the flipping process.
}

function resetBoard(){
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    
    // [hasFlippedCard, lockBoard] = [false, false];
    // [firstCard, secondCard] = [null, null]

}

(function shuffle() {
    cards.forEach(card => {
        let randomindex = Math.floor(Math.random() * 12);
        card.style.order = randomindex;
    });
})(); // This will iliterates the cards and change/asign random order numbers to them. Immediately invoked function, executes as soon as the page loads.

    // cards.forEach(card => card.addEventListener('click', flipCard)); same as the expression below
for (const card of cards) {
    card.addEventListener('click', flipCard)
}
