var words = ['cat', 'tree', 'swing', 'around', 'scientist'];
var wins = 0;
var wordGuess = words[Math.floor(Math.random() * words.length)];
var blanks = [];
var userGuessTotal= 12;
var guessed = [];



function wordBlank(guess){
for (var i=0; i<guess.length; i++){
    blanks[i] = "_";
}
document.querySelector("#display").innerHTML = blanks.join(" ");
}


function loop(guess, userKey){

var match=0;

for (var i = 0; i<guess.length;i++){
    if (guess[i] === userKey){
        blanks[i] = userKey;
        match+=1;
       
      }
       
    }



guessed.push(userKey);
console.log(blanks);
document.querySelector("#display").innerHTML = blanks.join(" ");
document.querySelector("#remaining").innerHTML = --userGuessTotal;
if (guessed.length<=12){
document.querySelector("#guessed").innerHTML = guessed.join("  ");

}else{
  alert("You lost! Choose another word");
  location.reload();
}



}


wordBlank(wordGuess);



document.onkeyup = function(event){
var userChoice = event.key;
   

loop(wordGuess,userChoice);



}












    // document.onkeyup = function(event) {

    //     var userGuess = event.key;
        

    //     // Reworked our code from last step to use "else if" instead of lots of if statements.
        



   
    
    // if (count===word.length){
    //   wins++;
    

    //       var html = "<p>Press any key to get started!</p>" +

    //       "<p>Wins: " + wins + "</p>" +
    //       "<p>Number of guesses remaining: " + userGuessTotal + "</p>" +
    //       "<p>Letters already guessed: " + guessed + "</p>";

    //       document.querySelector("#stats").innerHTML = html;
        


    //   }
