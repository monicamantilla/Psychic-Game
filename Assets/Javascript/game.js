
        
        

            var UserGuess = ["a", "b", "c", "d", "e", "f", "h,", "i", "j", "k", "l", "m", 
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"];

            var wins = 0,
            losses = 0,
            Guessesleft = 0,
            Guesses_so_far = 0
            
            document.onkey = function(event) {
               var UserGuess = event.key;
            }
// user types letter from the alphabet in array     
//simultaneously computer chooses a random letter from the array
//if the guesses are equal then increment var wins
//if the user guess does not equal computer guess then decrease their guessesleft
//record that letter next to "Guesses_so_far"
//after 8 attempts, increment var losses by 1

