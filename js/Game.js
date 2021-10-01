/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }


/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/

    createPhrases(){
        const phrasesArr = [
            new Phrase('How are you'),
            new Phrase('Do what you gotta do'),
            new Phrase('Let the games begin'),
            new Phrase('I love chocolate cake'),
            new Phrase('You can do it'),
        ]

        return phrasesArr;
    };

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/

getRandomPhrase() {
    const randomPhrase =  this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return randomPhrase;
};

/**
* Begins game by selecting a random phrase and displaying it to user
*/  
startGame() {
    const overlay = document.getElementById('overlay')

    if(overlay.className === 'start'){
    overlay.style.display = 'none';
    const calledPhrase = this.getRandomPhrase();
    calledPhrase.addPhraseToDisplay();
    this.activePhrase = calledPhrase;
    console.log(this.activePhrase.phrase);
    }
    else if(overlay.className === 'win' || overlay.className === 'lose'){
        overlay.style.display = 'none';
        this.phraseReset();
        this.buttonsReset();
        this.resetLives();
        overlay.className = 'start';
    }

};

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {
    const hiddenLetters = document.querySelectorAll('.hide');
    if(hiddenLetters.length === 0){
        return true;
    }else{
        return false;
    }
};

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/

removeLife() {
    this.missed += 1;
    //const scoreboard = document.getElementById('scoreboard');
    const lives = document.getElementsByClassName('tries');
    lives[lives.length - this.missed].firstElementChild.src = 'images/lostHeart.png';
    lives[lives.length - this.missed].firstElementChild.alt = 'Lost Heart Icon';
    if(this.missed >= 5){
        this.gameOver(false);
    }
};

// Helper function when resetting the game.
// resets all the heart icons to the original images and sets this.missed = 0.
resetLives(){
    this.missed = 0;
    const lives = document.getElementsByClassName('tries');
    for(let i = 0; i < lives.length; i++){
        lives[i].firstElementChild.src = 'images/liveHeart.png';
        lives[i].firstElementChild.alt = 'Heart Icon';
    }
}

// Helper function when resetting the game.
// resets all the buttons to their original state(not disabled or highlighted) when restarting the game.
buttonsReset(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = false;
        if(button.className === 'chosen' || button.className === 'wrong'){
            button.className = 'key';
        }
    });
}

// Helper function when resetting the game.
// removes the previous activePhrase and replaces it with a new phrase. 
phraseReset(){
    this.activePhrase = null;
    this.activePhrase = this.getRandomPhrase();
    document.querySelector('#phrase').innerHTML = '';
    this.activePhrase.addPhraseToDisplay();
}

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'initial';
    overlay.classList.remove('start');

    const gameOverScreenMessage = document.querySelector('#game-over-message');
    if(gameWon){
        overlay.classList.add('win');
        gameOverScreenMessage.innerHTML = 'Great job you won!';
    }else{
        overlay.classList.add('lose');
        gameOverScreenMessage.innerHTML = 'Sorry, better luck next time!';
    }
};
/**
 * Handles the user key presses do determine the outcome of the game
 * @param {event} button - uses the event from the eventlistener
 */
handleInteraction(button){
    if(button.target.tagName === "BUTTON"){
        console.log(button.target);
        let buttonPress = button.target.textContent;
        const chosenPhrase = this.activePhrase;
        button.target.disabled = true;
        //If user clicks or presses the correct key:
        //   the matching key inside the phrase will be added to the display.
        //   the matching key will be highlighted blue.
        //Also checks to see if the user has one after each correct keypress.
            //if user won, the winning gameover screen is shown.

        if(chosenPhrase.checkLetter(buttonPress)){
            chosenPhrase.showMatchedLetter(buttonPress);
            button.target.classList.remove('key');
            button.target.classList.add('chosen');
            
            if(this.checkForWin()){
                this.gameOver(true);
            };

        //if user clicks or presses are incorrect:
        //   the user will lose a life.
        //  also checks to see whether the user as lost all of his/her lives.
        //  if all lives are lost, the losing game over screen is shown.

        }else{
            button.target.classList.remove('key');
            button.target.classList.add('wrong');
            this.removeLife();
        };


    }
}


}