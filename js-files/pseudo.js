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
    //player's point bank display
//CHECK       //create a div id for JS variable pointBankDisplay (trying html <label> for this)
//CHECK           //100 as base value 
        //JS
            // function for point bank start with 100 
            // if function that triggers gameOver message when point bank drops below 0 
    //player's input bet value     
//CHECK        // create input field for JS variable reference
        // JS
            // attached to placeBet button event listener
                // event triggers function for point bank value subtraction 
                // (after MVP) event moves input value to betValueDisplay 
    //players's buttons for chosen odds 
//CHECK       // create button class for odds for JS variable reference
//CHECK        // create button id's for each set of odds 2-1,3-1,4-1, etc. JS const variable reference
        // JS
            // button id attached to event listener that highlights chosen odds (button)
                // event triggers color change for button (yellow)
                // event locks in chosen button id for betWinnings return 
            // (after MVP) button class attached to placeBet button event listener 
                    // event locks in chosen button id for betWinnings return  
                    // event sends chosen button id to chosen square display
    //start race button with event listener that activates Random speed function
//CHECK        // create button id for JS variable reference startRace
        // JS
            // button id attached to event listener 
                //event triggers randomSpeed generate function 
                    //randomSpeed function will set random speed that each square crosses screen
                        //function will be applied to button class variable
    //start line
//CHECK        // create div class for start line for squares  for JS variable reference startLine
//CHECK        //create div id for each square for JS variable reference
    //finish line
//CHECK        //create div class for finish line for JS variable reference finishLine
            // if function for square class to cross finish line 
                //triggers raceWinner message 
                //if winning square id matches chosen square id 
                    //triggers betWinning function that multiplys betValue input by chosen odds
                        //betWinning point value added to the player's point bank total  
                //if winning square id does not match chosen square id 
                    // triggers lostBet message ('your square did not win try again')

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