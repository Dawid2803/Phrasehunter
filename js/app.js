/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game ;

const resetButton = document.getElementById("btn__reset");

resetButton.addEventListener('click', () =>{
    game = new Game();
    game.startGame();
});

const keyboard = document.getElementById('qwerty');
const keyboardButtons = document.querySelectorAll('button');
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/


keyboard.addEventListener('click', (e) => {
    if(e.target.tagName === "BUTTON"){
        game.handleInteraction(e);
    }
});


