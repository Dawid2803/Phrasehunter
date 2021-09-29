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
    document.getElementById('overlay').style.display = 'none';
    const calledPhrase = this.getRandomPhrase();
    calledPhrase.addPhraseToDisplay();
    this.activePhrase = calledPhrase;
    console.log(this.activePhrase.phrase);

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
removeLife() {};

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {};
    
}