var words = ["cat", "tree", "swing", "around", "scientist"];
var wins = [];
var wordGuess = words[Math.floor(Math.random() * words.length)];
var blanks = [];
var userGuessTotal= 12;
var guessed = [];
var winCount = 0;
var counter= 0;

//convert guess(wordGuess) into successive blanks on screen
function wordBlank(guess){
for (var i=0; i<guess.length; i++){
    blanks[i] = "_";
}//join a space in between blanks array for formatting
document.querySelector("#display").innerHTML = blanks.join(" ");
}


//compare guess[i] (until guess.length) with userChoice
//if match get previous blanks array and inject match at the 
//corresponding blanks array position
function loop(guess, userKey){

var match=0;

for (var i = 0; i<guess.length;i++){
    if (guess[i] === userKey){  
        blanks[i] = userKey;
        wins.push(userKey); //somehow needs to recognize uniqueness
     
      }
       
}





//grow array for letters already guessed
guessed.push(userKey);

console.log(blanks);




document.querySelector("#display").innerHTML = blanks.join(" ");
document.querySelector("#remaining").innerHTML = --userGuessTotal;

if (guessed.length<=12){
document.querySelector("#guessed").innerHTML = guessed.join("  ");

}else{
  alert("You lost! Try another word");
  location.reload();

}



}

function winCheck(guess, array2){

  if (array2.length===guess.length){

document.querySelector("#wins").innerHTML = ++winCount;
alert("You Win! (if you saw the you lost alert right before this, or have not used unique letters, then you actually lost...sorry)");
setTimeout(refresh, 2000);


}
}

function refresh (){ 
     location.reload();
  } 

alert("This is Hangman. Rules: 1) You have 12 attempts 2) Unique letters only (please reference the Letters Already Guessed section while you play)")
wordBlank(wordGuess);



document.onkeyup = function(event){
var userChoice = event.key;
   

loop(wordGuess,userChoice);
winCheck(wordGuess,wins);


}
