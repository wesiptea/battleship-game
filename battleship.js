var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
// if you don't provide a value for a variable - the default value is "undefined".
var hits = 0;
var guesses = 0;

var isSunk = false;

// loop - written first to the condition that as long as isSunk is false the loop continues 
while (isSunk == false) {
    guess = prompt("Ready...aim...fire! (Enter a number from 0-6)"); 
    // check validity of guess entered
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid number! (Enter a number from 0-6)");
    } else {
        guess = guesses + 1;
        // increments guesses to stats

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            // increments hits to stats
            alert("HIT!");

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        
        } else {
            alert("MISS!");
        }
    }
}
var stats = "You took" + guesses + "guesses to sink the battleship," + "which means your shooting accuracy was" + (3/guesses); 
alert(stats);
// this creates a pop-up to report player statistics 
