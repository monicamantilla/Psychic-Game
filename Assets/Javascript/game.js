
        
        

            var letters = ["a", "b", "c", "d", "e", "f", "h,", "i", "j", "k", "l", "m", 
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"];

            var wins = 0,
            losses = 0,
            Guessesleft = 8,
            Guesses_so_far = 0
            
             // Create variables that hold references to the places in the HTML where we want to display things.
            var directionsText = document.getElementById("directions-text");
            var userGuessText = document.getElementById("userGuess");
            var computerChoiceText = document.getElementById("computerGuess");
            var winsText = document.getElementById("wins");
            var lossesText = document.getElementById("losses");
            var guessesleft = document.getElementById("guessesleft");

            document.onkeyup = function() {
              
               var userGuess = event.key;

               var computerGuess = letters[Math.floor(Math.random() * letters.length)];

               if(userGuess === computerGuess){
                  wins++;
              }else{
                  guesses--;
              }
          
              if(guesses = 0){
                  losses++
              }
          }   
           

               //var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

               //var computerGuess = letters[Math.floor(Math.random()*letter.lenth)];
            }


         //    if (userGuess === computerGuess))

         //    if(letters.indexOf(userGuess) > -1){
         //    wins++;
         //    Guessesleft = 8;
         //    Guesses_so_far = []

         // } else {
         //    losses++;
          
			// 	}
            
            var html = "<p> Guess what letter I am thinking of</p>" + directions-text +  "<p>Wins: " + wins + "</p>"
            + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + Guessesleft + "</p>" 
            + "<p>Guesses So far: " + Guesses_so_far + "</p>"

            document.querySelector("#game").innerHTML = html;

// user types letter from the alphabet in array     
//simultaneously computer chooses a random letter from the array
//if the guesses are equal then increment var wins
//if the user guess does not equal computer guess then decrease their guessesleft check if its 0, if its 0 then lost
//record that letter next to "Guesses_so_far"
//after 8 attempts, increment var losses by 1

