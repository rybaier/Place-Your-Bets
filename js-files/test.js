// This will be where I build and test the code 

//                  Variables
let pointBankDisplay = document.querySelector('#point-bank-display');
// console.log(pointBankDisplay, 'works');

let pointBankTotal = document.querySelector('#point-bank-total')
// console.log(pointBankTotal, 'works')

let chosenRacer = document.querySelectorAll('.racers')
// console.log(chosenRacer, 'works');

let startLine = document.querySelector('.starting-line');
// console.log(startLine, 'works');

let finishLine = document.querySelector('.finish-line');
// console.log(finishLine, 'works');

let startRace = document.querySelector('#start-race');
console.log(startRace, 'works')

let betValueInput = document.querySelector('#bet-value-input');
// console.log(betValueInput,'works')

let racersOnTrack = document.getElementsByClassName('racers-on-track')
console.log(racersOnTrack, 'works')

let racer1 = document.getElementById('racer-one')
console.log(racer1)

let racer2 = document.getElementById('racer-two')
console.log(racer2)
let racer3 = document.getElementById('racer-three')
let racer4 = document.getElementById('racer-four')

let firstRacer = document.querySelector('#first-racer');
// console.log(firstRacer, 'works')

let secondRacer = document.querySelector('#second-racer')
// console.log (secondRacer, 'works')

let placeBet = document.querySelector('#place-bet')
// console.log(placeBet)

let bankTotal = 100

let wagerWinnings = document.querySelector('#check-if-won')


// console.log(wagerWinnings, 'this works')
// let raceTrack = document.getElementsByClassName("racetrack") // moved to canvas file
// let racetrackContext = raceTrack.getContext('2d')
// console.log(raceTrack, 'works')
// let winningRacer = this should be an arrow function for //event that takes first square across the finish line

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
    // if (winningRacer === chosenRacer)
    let winnings = betValueInput.value * 2 // this will be winningRacer odds taken from innerHTML of racer  though I could just set the 
    // total multiplication value of odds to be equal to number of racers number of racers = odds of being correct
    bankTotal += winnings
    pointBankTotal.innerHTML = bankTotal
    let winningMessage = document.createElement("h3")
    winningMessage.innerHTML = `Congratulations your winnings are ${winnings} points`
    document.body.appendChild(winningMessage)
    //if (winningRacer !== chosenRacer) 
    // return 
    // let losingMessage = document.createElement('h3')
    // losingMessage.innerHTML = 'You have lost'
    // document.body.appendChild(losingMessage)
}

// function winningRacer () {
//     if 
// }

function racingSpeed () {//After MVP perhaps if I create an empty array and have random numbers pushed into it I can prevent the same number from showing up
    let speed1 =Math.floor(Math.random()*7) + 1
    let speed2 =Math.floor(Math.random()*7) + 1
    let speed3 =Math.floor(Math.random()*7) + 1
    let speed4 =Math.floor(Math.random()*7) + 1
    racer1.style.transitionDuration = `${speed1}s`
    racer2.style.transitionDuration = `${speed2}s`
    racer3.style.transitionDuration = `${speed3}s`
    racer4.style.transitionDuration = `${speed4}s`
    racer1.style.transform = "translateX(1400px)"
    racer2.style.transform = "translateX(1400px)"
    racer3.style.transform = "translateX(1400px)"
    racer4.style.transform = "translateX(1400px)"
}

function gameOver (){
   let gameOverMessage = document.createElement("h3")
   gameOverMessage.innerHTML ="You have no more money to bet. please refresh page to try again"
    if (pointBankTotal.innerHTML < 0) {
     return document.body.appendChild(gameOverMessage)
    }
    }
gameOver()
//this needs to trigger in a better way perhaps as a full message that blocks out the screen or have it display the gif
//otherwises user can just keep betting into negative
//try it with a stack that follows this document.body.remove() imgSource = document.createElement('img') 
// imgSource.attribute(gif file) document.body.append(img source)
// 
//EVENT LISTENERS

placeBet.addEventListener('click', getBetValue)
startRace.addEventListener('click', racingSpeed)
wagerWinnings.addEventListener('click', betWinnings)

firstRacer.addEventListener('click', () => {
    firstRacer.style.backgroundColor = 'yellow';
})
//why can I not get this to work for all racers it only works for individual racer id not the class!!!!

startRace.addEventListener('click', () => {
    // racer1.style.transition 
    
}) //finally figured it out now to make it random transitionDurations 