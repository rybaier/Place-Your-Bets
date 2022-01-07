//Final Product


//                  Variables
let background = document.querySelector('#background')
let displays = document.querySelector('.displays')
let gameRules = document.querySelector('#rules-text')
let rules = document.querySelector('#rules')
let betting = document.querySelector('.betting-selection') 
let gameOverGif = document.querySelector('#gameover')
let pointBankDisplay = document.querySelector('#point-bank-display');
let pointBankTotal = document.querySelector('#point-bank-total')
let startLine = document.querySelector('.starting-line');
let finishLine = document.querySelector('.finish-line');
let startRace = document.querySelector('#start-race');
let betValueInput = document.querySelector('#bet-value-input');
let racersOnTrack = document.getElementsByClassName('racers-on-track')
let racer1 = document.getElementById('racer-one')
let racer2 = document.getElementById('racer-two')
let racer3 = document.getElementById('racer-three')
let racer4 = document.getElementById('racer-four')
let firstRacer = document.querySelector('#first-racer');
let secondRacer = document.querySelector('#second-racer')
let thirdRacer = document.querySelector('#third-racer')
let fourthRacer = document.querySelector('#fourth-racer')
let placeBet = document.querySelector('#place-bet')
let wagerWinnings = document.querySelector('#check-if-won')
let printMessage = document.querySelector('#messages')
let bankTotal = 100
let winningsCalculator = 0
let winningRacer = ' '
let chosenRacer = ' '
let message = ' '
let racerMessage = ' '

//SOUND EFFECTS 
let musicOn = document.querySelector('#music')
let musicOff = document.querySelector('#music-off')
let audioTrack = new Audio ('sound effects /music_zapsplat_astro_race.mp3')
let betAudio =  new Audio ('sound effects /zapsplat_foley_cash_register_ka_ching_001_44087.mp3')
let winAudio = new Audio ('sound effects /cartoon_success_fanfair.mp3')
let loseAudio = new Audio ('sound effects /cartoon_fail_trumpet_002.mp3')
let raceAudio = new Audio ('sound effects /horserunning.mp3')
let cheerAudio = new Audio ('sound effects /cheering.mp3')

//FUNCTIONS
function playAudio () {
    audioTrack.loop = true
    audioTrack.play()
}

function pauseAudio () {
    audioTrack.pause()
}

function getBetValue(){
    betAudio.play()
    racer1.style.transitionDuration = `0.5s`
    racer2.style.transitionDuration = `0.5s`
    racer3.style.transitionDuration = `0.5s`
    racer4.style.transitionDuration = `0.5s`
    racer1.style.transform = "translateX(0px)"
    racer2.style.transform = "translateX(0px)"
    racer3.style.transform = "translateX(0px)"
    racer4.style.transform = "translateX(0px)" 
    let wager = betValueInput.value
    bankTotal -= wager
    pointBankTotal.innerHTML = bankTotal 
    let betMessage = `You have wagered ${betValueInput.value} points`
    printMessage.innerHTML = betMessage
    printMessage
    gameOver()
}

function betWinnings () {
    firstRacer.style.backgroundColor = 'white'
    secondRacer.style.backgroundColor = 'white'
    thirdRacer.style.backgroundColor = 'white'
    fourthRacer.style.backgroundColor = 'white'
    if (winningRacer === chosenRacer) {
    winAudio.play()
    let winnings = betValueInput.value * winningsCalculator 
    bankTotal += winnings
    pointBankTotal.innerHTML = bankTotal
    let winningMessage = `Congratulations your winnings are ${winnings} points`
    printMessage.innerHTML = winningMessage
    return printMessage 
    }
    if (winningRacer !== chosenRacer) {
        loseAudio.play()
    let losingMessage = 'You have lost your money'
    printMessage.innerHTML = losingMessage 
    return printMessage
    }
}

function racingSpeed () {
    raceAudio.play()
    let speed1 =Math.floor(Math.random()*7) + 1
    let speed2 =Math.floor(Math.random()*8) + 1
    let speed3 =Math.floor(Math.random()*8) + 1
    let speed4 =Math.floor(Math.random()*8) + 1
    racer1.style.transitionDuration = `${speed1}s`
    racer2.style.transitionDuration = `${speed2}s`
    racer3.style.transitionDuration = `${speed3}s`
    racer4.style.transitionDuration = `${speed4}s`
    racer1.style.transform = "translateX(1400px)"
    racer2.style.transform = "translateX(1400px)"
    racer3.style.transform = "translateX(1400px)"
    racer4.style.transform = "translateX(1400px)"
    if (speed1 < speed2 && speed1 < speed3 && speed1 < speed4) return winningsCalculator = 2, winningRacer = "2"
    if (speed2 < speed1 && speed2 < speed3 && speed2 < speed4) return winningsCalculator = 3, winningRacer = "3"
    if (speed3 < speed1 && speed3 < speed2 && speed3 < speed4) return winningsCalculator = 4, winningRacer = "4"
    if (speed4 < speed1 && speed4 < speed2 && speed4 < speed3) return winningsCalculator = 5, winningRacer = "5"   
}

function chooseRacer(){
    firstRacer.addEventListener('click', () => {
        firstRacer.style.backgroundColor = 'yellow'
        chosenRacer = firstRacer.innerHTML
        console.log (chosenRacer)
        printMessage.innerHTML = 'You have chosen the Turtle as your racer'
        return printMessage
    })
    secondRacer.addEventListener('click', () => {
        secondRacer.style.backgroundColor = 'yellow'
        chosenRacer = secondRacer.innerHTML
        console.log (chosenRacer)
        printMessage.innerHTML = 'You have chosen the Shark as your racer'
        return printMessage
    })
    thirdRacer.addEventListener('click', () => {
        thirdRacer.style.backgroundColor = 'yellow'
        chosenRacer = thirdRacer.innerHTML
        console.log (chosenRacer)
        printMessage.innerHTML = 'You have chosen the Cat as your racer'
        return printMessage
    })
    fourthRacer.addEventListener('click', () => {
        fourthRacer.style.backgroundColor = 'yellow'
        chosenRacer = fourthRacer.innerHTML
        console.log (chosenRacer)
        printMessage.innerHTML = 'You have chosen the Rabbit as your racer'
        return printMessage
    })
}
chooseRacer()

function gameOver (){
    if (pointBankTotal.innerHTML < 1) {
        loseAudio.play()
         background.style.opacity = 0, displays.style.opacity = 0, 
         betting.style.opacity = 0, gameOverGif.style.opacity = 1,
         gameOverMessage = 'You have gambled away your last point', 
         printMessage.innerHTML = gameOverMessage, printMessage
       }   
} 

//EVENT LISTENERS

placeBet.addEventListener('click', getBetValue)
startRace.addEventListener('click', racingSpeed)
wagerWinnings.addEventListener('click', betWinnings)
rules.addEventListener('mouseenter', () => {gameRules.style.display = 'block'})
rules.addEventListener('mouseleave', () => {gameRules.style.display = 'none'})
musicOn.addEventListener('click',  playAudio)
musicOff.addEventListener('click', pauseAudio)
