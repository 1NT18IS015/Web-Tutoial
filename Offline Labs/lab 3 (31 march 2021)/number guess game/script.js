function game() {
    var range = document.getElementById('Guess').value;
    var userInput = prompt("Guess a number!");
    var computerNum = Math.floor((Math.random() * range) + 1);
    var isCorrect = false
    var turn = 5
      
    while (isCorrect == false) {
      document.getElementById('outputDiv').innerHTML += userInput + " ";

      if (turn == 1){
        alert("GAME OVER. THE ANSWER WAS " + computerNum + '')
        return isCorrect == true;
      }
      turn--;

      if (userInput < computerNum) {
        userInput = prompt("Guessed number is Too low!try again! You have "+turn+" turns.")
      }
      else if (userInput > computerNum){
        userInput = prompt("Guessed number is Too high!try again You have "+turn+" turns.");
    }
      else if(userInput == computerNum){
      alert('Guessed number is CORRECT!');
      return isCorrect = true;
      }
    }
  }