var letters = ["a", "b", "c", "d", "e", "f", "h,", "i", "j", "k", "l", "m", 
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"],
computerGuess,
wins = 0,
losses = 0,
Guessesleft = 8,
Guesses_so_far = [];

function newGame(){
   Guessesleft = 8;
   Guesses_so_far = [];

   document.getElementById("Guessesleft").textContent = Guessesleft;
   document.getElementById("Guesses_so_far").textContent = ''

   computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

computerGuess = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function(event) {

   var userGuess = event.key.toLowerCase();

   if(!Guesses_so_far.includes(userGuess)) {
      if(userGuess == computerGuess){
         wins++;

         document.getElementById("wins").textContent = wins;

         newGame();

      } else {
         Guessesleft--


         if (Guessesleft == 0) {
            losses++;

            document.getElementById("losses").textContent = losses;

            newGame();

         } else {

            Guesses_so_far.push(userGuess);

            document.getElementById("Guesses_so_far").textContent = Guesses_so_far;
            document.getElementById("Guessesleft").textContent = Guessesleft;

         }
      }
   }
}