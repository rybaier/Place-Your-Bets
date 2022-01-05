// This will be where I build and test the code 

//                  Variables
let background = document.querySelector('#background')
// console.log(background)
let displays = document.querySelector('.displays')
// console.log(displays)
let betting = document.querySelector('.betting-selection')
// console.log(betting)
let gameOverGif = document.querySelector('#gameover')
// console.log(gameOverGif)
let pointBankDisplay = document.querySelector('#point-bank-display');
// console.log(pointBankDisplay, 'works');

let pointBankTotal = document.querySelector('#point-bank-total')
// console.log(pointBankTotal, 'works')

// let chosenRacer = document.getElementsByClassName('racers') //no longer needed here variable name utilized for something else
// console.log(chosenRacer, 'works');

let startLine = document.querySelector('.starting-line');
// console.log(startLine, 'works');

let finishLine = document.querySelector('.finish-line');
// console.log(finishLine, 'works');

let startRace = document.querySelector('#start-race');
// console.log(startRace, 'works')

let betValueInput = document.querySelector('#bet-value-input');
// console.log(betValueInput,'works')

let racersOnTrack = document.getElementsByClassName('racers-on-track')
// console.log(racersOnTrack, 'works')

let racer1 = document.getElementById('racer-one')
// console.log(racer1)

let racer2 = document.getElementById('racer-two')
// console.log(racer2)
let racer3 = document.getElementById('racer-three')
let racer4 = document.getElementById('racer-four')

let firstRacer = document.querySelector('#first-racer');
// console.log(firstRacer, 'works')

let secondRacer = document.querySelector('#second-racer')
// console.log (secondRacer, 'works')
let thirdRacer = document.querySelector('#third-racer')
// console.log(thirdRacer)
let fourthRacer = document.querySelector('#fourth-racer')
// console.log(fourthRacer)
let placeBet = document.querySelector('#place-bet')
// console.log(placeBet)
let wagerWinnings = document.querySelector('#check-if-won')

let bankTotal = 100

let winningsCalculator = 0
let winningRacer = " "
let chosenRacer = " "
let message = " "

// console.log(wagerWinnings, 'this works')
// let raceTrack = document.getElementsByClassName("racetrack") // moved to canvas file
// let racetrackContext = raceTrack.getContext('2d')
// console.log(raceTrack, 'works')
// let winningRacer = this should be an arrow function for //event that takes first square across the finish line

//FUNCTIONS

function getBetValue(){
    racer1.style.transitionDuration = `0.5s`
    racer2.style.transitionDuration = `0.5s`
    racer3.style.transitionDuration = `0.5s`
    racer4.style.transitionDuration = `0.5s`
    racer1.style.transform = "translateX(0px)"
    racer2.style.transform = "translateX(0px)"
    racer3.style.transform = "translateX(0px)"
    racer4.style.transform = "translateX(0px)" 
    
  
    let wager = betValueInput.value
//    console.log(wager)
    bankTotal -= wager
    pointBankTotal.innerHTML = bankTotal 
   
    gameOver()
    // console.log(bankTotal) 
}
// getBetValue()
function betWinnings () {
    firstRacer.style.backgroundColor = 'white'
    secondRacer.style.backgroundColor = 'white'
    thirdRacer.style.backgroundColor = 'white'
    fourthRacer.style.backgroundColor = 'white'
    if (winningRacer === chosenRacer) {
    let winnings = betValueInput.value * winningsCalculator 
    // this will be winningRacer odds taken from innerHTML of racer  though I could just set the 
    // total multiplication value of odds to be equal to number of racers number of racers = odds of being correct
    bankTotal += winnings
    pointBankTotal.innerHTML = bankTotal
    let winningMessage = document.createElement("h3")
    winningMessage.innerHTML = `Congratulations your winnings are ${winnings} points`
    message = document.body.appendChild(winningMessage)
    return message 
    }
    if (winningRacer !== chosenRacer) {
    let losingMessage = document.createElement('h3')
    losingMessage.innerHTML = 'You have lost your money'
    message = document.body.appendChild(losingMessage)
    return message
    }
}

// function winningRacer () { //winningsCalculator value is set to 0 pass an integer to that value based upon boolean
// using speed1-4 variables and conditionals I need to return a variable that can be passed 
// into the betWinnings function----NO or i need to write this function inside of racewinner that passes boolean 
// value into a global scope variable that will allow me to access it for the betWinnings function! ---YES
// }
// send this variable to the global scope so i can use it as a comparison for 
  
function racingSpeed () {
    //After MVP perhaps if I create an empty array and have random numbers pushed into it 
    //I can prevent the same number from showing up
    let speed1 =Math.floor(Math.random()*10) + 1
    // console.log(speed1)
    let speed2 =Math.floor(Math.random()*10) + 1
    // console.log(speed2)
    let speed3 =Math.floor(Math.random()*10) + 1
    // console.log(speed3)
    let speed4 =Math.floor(Math.random()*10) + 1
    // console.log(speed4)
    racer1.style.transitionDuration = `${speed1}s`
    racer2.style.transitionDuration = `${speed2}s`
    racer3.style.transitionDuration = `${speed3}s`
    racer4.style.transitionDuration = `${speed4}s`
    racer1.style.transform = "translateX(1400px)"
    racer2.style.transform = "translateX(1400px)"
    racer3.style.transform = "translateX(1400px)"
    racer4.style.transform = "translateX(1400px)"
    if (speed1 < speed2 && speed1 < speed3 && speed1 < speed4) {
        // console.log( winningsCalculator = 2, winningRacer = "2") 
        return winningsCalculator = 2, winningRacer = "2"
    }
    if (speed2 < speed1 && speed2 < speed3 && speed2 < speed4) {
        // console.log(winningsCalculator = 3, winningRacer = "3")
        return winningsCalculator = 3, winningRacer = "3"
    }
    if (speed3 < speed1 && speed3 < speed2 && speed3 < speed4) {
        // console.log(winningsCalculator = 4, winningRacer = "4")
        return winningsCalculator = 4, winningRacer = "4"
    }
    if (speed4 < speed1 && speed4 < speed2 && speed4 < speed3) {
        // console.log (winningsCalculator = 5, winningRacer = "5")
        return winningsCalculator = 5, winningRacer = "5"
        }
    // console.log(winningsCalculator) //not working why?// needs to be in each if statement before return
    // console.log(winningRacer) //not working why? // needs to be in each if statement before return
}

// function gameOver (){
//    let gameOverMessage = document.createElement("h3")
//    gameOverMessage.innerHTML ="You have no more money to bet. please refresh page to try again"
//     if (pointBankTotal.innerHTML < 0) {
//      return document.body.appendChild(gameOverMessage)
//     }
// }

//this needs to trigger in a better way perhaps as a full message that blocks out the screen or have it display the gif
//otherwises user can just keep betting into negative
//try it with a stack that follows this document.body.remove() imgSource = document.createElement('img') 
// imgSource.attribute(gif file) document.body.append(img source)
//  I think opacity is the better option for this. have div class background opacity change to 0 and img opacity change to 1

function gameOver (){
    if (pointBankTotal.innerHTML < 1) {
        return background.style.opacity = 0, displays.style.opacity = 0, betting.style.opacity = 0, gameOverGif.style.opacity = 1
       } 
    
} 

//EVENT LISTENERS

placeBet.addEventListener('click', getBetValue)
startRace.addEventListener('click', racingSpeed)
wagerWinnings.addEventListener('click', betWinnings)


// function chooseRacer (event){
//     event = addEventListener('click', () => {
//     if (event === firstRacer) return firstRacer.style.backgroundColor = 'yellow' 
//     if (event === secondRacer) return secondRacer.style.backgroundColor = 'yellow'
//     if (event === thirdRacer)  return thirdRacer.style.backgroundColor = 'yellow'
//     if (event === fourthRacer) return fourthRacer.style.backgroundColor ='yellow'
// })
// }
// chooseRacer()
// chosenRacer.addEventListener('click', chooseRacer)

// function chooseRacer (racer) {
//     for (let i = 0; i<chosenRacer.length; i++) {
//         addEventListener('click', () => {
//            chosenRacer[i].style.backgroundColor = 'yellow'
//         })
//     }
// }
//   chooseRacer()

//   chosenRacer.addEventListener('click', chosenRacer.forEach((racer) =>  {
//       racer.style.backgroundColor = "yellow"
//   }))      

//     // racer1.style.transform = 
// })
//why can I not get this to work for all racers it only works for individual racer id not the class!!!!

// startRace.addEventListener('click', () => {
//     // racer1.style.transition 
    
// }) //finally figured it out now to make it random transitionDurations 

function chooseRacer(){
    firstRacer.addEventListener('click', () => {
        firstRacer.style.backgroundColor = 'yellow'
        chosenRacer = firstRacer.innerHTML
        console.log (chosenRacer)
    })
    secondRacer.addEventListener('click', () => {
        secondRacer.style.backgroundColor = 'yellow'
        chosenRacer = secondRacer.innerHTML
        console.log (chosenRacer)
    })
    thirdRacer.addEventListener('click', () => {
        thirdRacer.style.backgroundColor = 'yellow'
        chosenRacer = thirdRacer.innerHTML
        console.log (chosenRacer)
    })
    fourthRacer.addEventListener('click', () => {
        fourthRacer.style.backgroundColor = 'yellow'
        chosenRacer = fourthRacer.innerHTML
        console.log (chosenRacer)
    })
}

chooseRacer()