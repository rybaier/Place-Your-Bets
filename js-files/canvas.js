const raceTrack = document.getElementById("racetrack")
const rtCtx = raceTrack.getContext('2d')

class racer {
    constructor(x, y, width, height, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }
    draw() {
        rtCtx.beginPath()
        rtCtx.fillRect(this.x,this.y, this.width, this.height)
        rtCtx.fillStyle = this.color
        rtCtx.fill()
    }
}

const racer1 = new racer(0, 1, 50, 50, 'red')
racer1.draw()
// console.log(racer1)
const racer2 = new racer(0, 150, 50, 50, 'green')
racer2.draw()



let startRace = document.querySelector('#start-race');
startRace.addEventListener('click', () =>{
    console.log('go')
})