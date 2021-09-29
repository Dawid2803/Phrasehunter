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
* @argument(amount) stipulates the amount of phrases that needs to be created
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
    this.activePhrase = this.getRandomPhrase();
    console.log(this.activePhrase);
    this.activePhrase.addPhraseToDisplay();

};
    
}