// This will be where I build and test the code 

//                  Variables
let pointBankDisplay = document.querySelector('#point-bank-display');
// console.log(pointBankDisplay, 'works');
let pointBankTotal = document.querySelector('#point-bank-total')
// console.log(pointBankTotal, 'works')
let chosenRacer = document.querySelectorAll('.racers')
console.log(chosenRacer, 'works');
let startLine = document.querySelector('.starting-line');
// console.log(startLine, 'works');
let finishLine = document.querySelector('.finish-line');
// console.log(finishLine, 'works');
let startRace = document.querySelector('#start-race');
// console.log(startRace, 'works')
let betValueInput = document.querySelector('#bet-value-input');
console.log(betValueInput,'works')
let firstRacer = document.querySelector('#first-racer');
// console.log(firstRacer, 'works')
let secondRacer = document.querySelector('#second-racer')
// console.log (secondRacer, 'works')
let placeBet = document.querySelector('#place-bet')
// console.log(placeBet)
let bankTotal = 100


// let winningRacer = this should be an arrow function for //event that takes first square across the finish lint

//FUNCTIONS

function getBetValue(){
   let wager = betValueInput.value
//    console.log(wager)
    bankTotal -= wager
    pointBankTotal.innerHTML = bankTotal 
    gameOver()
    // console.log(bankTotal) 
}
// getBetValue()
function betWinnings () {
    let winnings = betValueInput.value * winningRacer
}

function racingSpeed () {
    //need to figure out css and how to get squares to move for this functionto be built
 let speed =Math.floor(Math.random())
}
function gameOver (){
   let gameOverMessage = document.createElement("h2")
   gameOverMessage.innerHTML ="You have no more money to bet. please refresh page to try again"
    if (pointBankTotal.innerHTML < 0) {
     return document.body.appendChild(gameOverMessage)
    }
    }
gameOver()
//EVENT LISTENERS

placeBet.addEventListener('click', getBetValue)
startRace.addEventListener('click', racingSpeed)