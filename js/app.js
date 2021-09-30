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

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
function handleInteraction(button){
    if(button.target.tagName === "BUTTON"){
        console.log(button.target);
    }
}

keyboard.addEventListener('click', (e) => handleInteraction(e))