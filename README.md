# Place-Your-Bets

## Game Inspiration
A browser game deisgned to simulate the horse racing gambling industry
As a child my father taught the joys and heartaches of betting the horses, I thought it would be fun to design a simple game based upon that idea. Where the gambler (or user in this case) can experience all the emotions that are associated with it. 
  emotions like the following:
 - The hope of picking the right racer and winning your bet!
 - The anticipation for the race to start!
 - The excitement while the race is being run!
 - the fear that you might lose your bet! 
 - the joy of winning you bet and gaining more! 
 - the determination of picking the next winner after losing! 
 - and more!!!

### Timeline Plan
- Dec 25 - Wireframe
- Dec 30 - Pseudo and repo creation
- Dec 31 - Dasic Html, CSS, JS setup of classes, ids, variables
- Jan 3 - work on functions
- Jan 5 - Functions, mvp finished
- Jan 6 - full css with mvp working and ReadMe design and presentation
- Jan 7 - Presentation
- Jan 8-9 - stretch goals and beyond mvp and mobile friendly

## The Build
Over the course of the project I was consistently ahead of my timeline plan until the 7th. Even though I ran into a few blockers along the way. My first major blocker (which was also the largest of the whole project) was the animation of the race. I had to have the animation running in order to finish and test my racingSpeed function. This took me a couple of days to solve. I bounced between CSS and Canvas styling until unltimately deciding to focus specifically on styling with CSS.  

![alt text](https://github.com/rybaier/Place-Your-Bets/blob/main/images%20/screenshots-of-game/PYB-screenshot-1-1-10pm.png) 
##### HTML Canvas/JS styling trial - abandoned 
(note: from my experimentation I look forward to diving deeper into the canvas element for future games and applications).

![alt text](https://github.com/rybaier/Place-Your-Bets/blob/main/images%20/screenshots-of-game/PYB-01-04-at-3.21.37-PM.png) 
##### CSS Basic style for visual functionality 

With the race animation working I was able to move steadily through my functions, until I reached my MVP. I had a few other blockers but nothing as significant as the first, the only other one worthy of note was I ran into some trouble adding event listeners for the chooseRacer class and ended up creating a function for it specifically, so it could isolate them from the rest of the code block.  This had the effect of being able to easily add more racers if I desired as I originally started with 2. 

![alt text](https://github.com/rybaier/Place-Your-Bets/blob/main/images%20/screenshots-of-game/Screen-Shot-2022-01-05-at-3.53.14-PM.png)
##### CSS major style 
After reaching a fully functional game for my MVP I dove into styling and had quite a bit of fun seeing the game come to life. Besides layout and the extra pinache. I added gifs for the racers, a gameOver gif, and sound effects! 

![alt text](https://github.com/rybaier/Place-Your-Bets/blob/main/images%20/screenshots-of-game/Screen-Shot-2022-01-05-at-3.54.26-PM.png)
##### CSS Animation at work

![alt text](https://github.com/rybaier/Place-Your-Bets/blob/main/images%20/screenshots-of-game/finished%20browser%20style.png)
##### Final game style
![alt text](https://github.com/rybaier/Place-Your-Bets/blob/main/images%20/screenshots-of-game/game-over%20-creen.png)
##### game over screen



#### For an in-depth look at my thought process during the game build please refer to the links below 
[Pseudo](https://github.com/rybaier/Place-Your-Bets/blob/main/js-files/pseudo.js)
[Build and Test file](https://github.com/rybaier/Place-Your-Bets/blob/main/js-files/test.js)

### Icebox Items/ future plans for the game
1. Making it a mobile friendly game for cell phone use
2. Trying to refactor the JS code to as few lines as possible.
3. Making the game with 3d animation that shows the racers physically moving

## The Game
[Place Your Bets](https://rybaier.github.io/Place-Your-Bets/)

### Rules of Place Your Bets!
1. Object of the game is to guess the correct winner of the race
2. In order to proceed the player will do the following in order
    - decide how many points they would like to wager.
    - type in desired bet value into the input box
    - select a racer by its number (note: the odds of the racer winning is a direct     correlation to their number. ex: 2 = 2-1 odds)
    - Click the place bet button to register your bet with the computer
    - Click the Start Race button and cheer for their racer. 
    - Once race is completed, click on the Check Payout button to learn how much the player has won, or if they lost their money
    - then rinse and repeat the above steps.
3. If the playerr's choice matches then winner of the race, then the bet is paid out accordering to odds 
4. If the player does not choose the winner of the race, then the bet is lost and the user the player also loses the bet if there is a tie!
5. The game is over if the player is forced to wager their last point

# Languages
- HTML5
- CSS
- JavaScript 

# Research References I used for building game
https://www.youtube.com/watch?v=eI9idPTT0c4
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
https://www.youtube.com/watch?v=YszONjKpgg4
https://www.w3schools.com/jsref/prop_style_transform.asp
https://www.w3schools.com/jsref/prop_style_transitionduration.asp
https://stackoverflow.com/questions/6028128/how-do-i-rotate-text-in-css