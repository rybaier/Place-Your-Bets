// list of requirements for MVP write check in all caps when completed 
    // set MVP for only 2 squares for easy demonstration
    //player's point bank display
    //player's input bet value
    //players's buttons for chosen odds 
    //start race button with event listener that activates Random speed function
    //place bet button with event listener that takes input from bet value input
    //startLine and finishLines for race
    // function for point bank start with 100 
    // function for point bank bet value subtraction
    // function for point bank winnings addition
    // function to end game if point bank reaches 0 
    // function to generate random speed for squares on start race 
    // function to end race 


// How I am going to do  MVP
//CHECK    //player's point bank display
//CHECK       //create a div id for JS variable pointBankDisplay (trying html <label> for this)
//CHECK           //100 as base value 
//CHECK        //JS
//CHECK            // no longer a function need for point bank start with 100 see html 
//CHECK            // if function that triggers gameOver message when point bank drops below 0 
//CHECK    //player's input bet value     
//CHECK        // create input field for JS variable reference
//CHECK        // JS
//CHECK            // attached to placeBet button event listener
//CHECK                // event triggers function for point bank value subtraction 
//CHECK                 //event triggers reset of racers to starting gates
                // (after MVP) event moves input value to betValueDisplay 
//CHECK    //players's buttons for chosen odds 
//CHECK       // create button class for odds for JS variable reference
//CHECK        // create button id's for each set of odds 2-1,3-1,4-1, etc. JS const variable reference
//CHECK        // JS
//CHECK            // button id attached to event listener that highlights chosen odds (button)
//CHECK         // event triggers color change for button (yellow)
//CHECK                    //upon end of race event button color reset to original (see if you won button )
//CHECK                // event locks in chosen button id for betWinnings return 
//CHECK            // (after MVP) button class attached to placeBet button event listener 
//CHECK                    // event locks in chosen button id for betWinnings return  
//CHECK                    // event sends chosen button id to chosen square display
//CHECK    //start race button with event listener that activates Random speed function
//CHECK        // create button id for JS variable reference startRace
//CHECK        // JS
//CHECK     // button id attached to event listener 
//CHECK          //event triggers randomSpeed generate function 
//CHECK             //randomSpeed function will set random speed that each square crosses screen
//CHECK             //function will be applied to button id variable for random generation for each 
//CHECK    //start line
//CHECK        // create div class for start line for squares  for JS variable reference startLine
//CHECK        //create div id for each square for JS variable reference
//CHECK    //finish line
//CHECK        //create div class for finish line for JS variable reference finishLine
//CHECK            // if function for square class to cross finish line 
//CHECK                //if winning square id matches chosen square id 
//CHECK                //do this by css style transition boolean---NO --- I did in javascript with variable chain
//CHECK                    //triggers betWinning function that multiplys betValue input by chosen odds
//CHECK                        //betWinning point value added to the player's point bank total  
//CHECK                //if winning square id does not match chosen square id 
//CHECK                    // triggers lostBet message ('your square did not win try again')
                     // (after MVP) triggers raceWinner message 
//CHECK    //game over message function
        //JS 
//CHECK            //create function to create game over message that triggers when point bank reaches 0
//CHECK            //(after mvp) use gif in place of game over message
        //AFTER MVP ideas
//CHECK            // button sound effects
            // background audio track (need to add button for optional background music)

//FUNCTIONS
    // function for point bank bet value subtraction
        //takes value from betValueInput and subtracts from player's point bank
    // function for point bank winnings addition
        // a set of conditionals (one for each square) that multiply the value from the betValueInput
        // by the odds of chosen square
    // function to end game if point bank reaches 0 
        //a global scope function that is activated if the players point bank total reaches below zero
            //when they try to make another bet the function would trigger upon the subtraction dropping 
            //the point bank below zero 
    // function to generate random speed for squares on start race
        // sets each square's speed to a random integer
        // sends squares from start to finish based upon that random speed 
        //triggered by start race button 
    // function to end race 
        // triggers a display message of winning square 
            // first square that crosses the finish line
        // 2 conditionals 
            // if player's chosen square does not match winning square
                // returns nothing 
                // (after MVP) resets betValue display to 0 and chosen square display to empty
            // if player's chosen square matches the winning square
                // chosen square odds multiplied by betValue input 
                    //adds new winnings value to player's point bank total 
                // (after MVP) resets betValue display to 0 and chosen square display to empty

//(after MVP) place bet button with event listener that takes input from bet value input
//AFTER MVP IDEAS
//CHECK    //add sound effects 
//CHECK    //change losing message to losing gif
//CHECK    // add gifs to racers    
//CHECK    // add game rules button that displays rules on hover 
//CHECK        //use css to design rule box, highest z -index white background hide with opacity =0
//CHECK        // use JS for event listener hover to display rules change opacity to 1 
//CHECK                    //--used display none to display block instead of opacity
//CHECK                    // using opacity interfered with the buttons 


//NOTES
//<!--should i use progress for the squares? no. -->
//<!--Research suggests canvas?  easier to make move -->
//currently switching between canvas and div trying to figure out the best way to make it move across screen
//more research has indicated I should be doing this with CSS animations! 
//I am frustrated at the back and forth of getting these racers to move 
// on click add a css class thats doing something 
//different animations for different transitions 

//Z index is what I've been needing for so long! it creates an order that is similar to layers in photoediting software
//the higher the number the more in the front it is.
 //need to figure out css and how to get squares to move for this functionto be built 
    //have switched to canvas animation this may be better served in that file

// a reset button that resets racers, bets, and point bank
//have a Game start screen with the rules on it and a start game button 
// make point goals that lead to other gambling game options 