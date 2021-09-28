/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

/**
* Display phrase on game board
*/
    addPhraseToDisplay(){
        let phraseDisplay = document.querySelector('#phrase');
        const randomPhrase = game.getRandomPhrase().phrase;
        for(let i = 0; i < randomPhrase.length; i++){
            if(randomPhrase[i] === ' '){
                const space = `<li class="space"> </li>`;
                phraseDisplay.innerHTML += space;
            }else{
                const letter = `<li class="hide letter ${randomPhrase[i]}">${randomPhrase[i]}</li>`;
                phraseDisplay.innerHTML += letter;
            }
        } 
    };
}