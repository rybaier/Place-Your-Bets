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


// How I am going to do make MVP
    //player's point bank display
        //create a div id for JS variable pointBankDisplay 
            //100 as base value 
        //JS
            // function for point bank start with 100 
            // if function that triggers game over message when point bank drops below 0 
    //player's input bet value     
        // create input field for JS variable reference
        // JS
            // attached to placeBet button event listener
                // event triggers function for point bank value subtraction 
                // (after MVP) event moves input value to betValueDisplay 
    //players's buttons for chosen odds 
        // create button class for odds for JS variable reference
        // create button id's for each set of odds 2-1,3-1,4-1, etc. JS const variable reference
        // JS
            // button id attached to event listener that highlights chosen odds (button)
                // event triggers color change for button (yellow)
                // event locks in chosen button id for betWinnings return 
            // (after MVP) button class attached to placeBet button event listener 
                    // event locks in chosen button id for betWinnings return  
                    // event sends chosen button id to chosen square display
    //start race button with event listener that activates Random speed function
        // create button id for JS variable reference startRace
        // JS
            // button id attached to event listener 
                //event triggers randomSpeed generate function 
                    //randomSpeed function will set random speed that each square crosses screen
                        //function will be applied to button class variable
    //start line
        // create div class for start line for squares  for JS variable reference startLine
        //create div id for each square for JS variable reference
    //finish line
        //create div class for finish line for JS variable reference finishLine
            // if function for square class to cross finish line 
                //triggers raceWinner message 
                //if winning square id matches chosen square id 
                    //triggers betWinning function that multiplys betValue input by chosen odds
                        //betWinning point value added to the player's point bank total  

//FUNCTIONS
    // function for point bank bet value subtraction
    // function for point bank winnings addition
    // function to end game if point bank reaches 0 
    // function to generate random speed for squares on start race 
    // function to end race 
//(after MVP) place bet button with event listener that takes input from bet value input