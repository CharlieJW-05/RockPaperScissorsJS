function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log("--- Round", i + 1, "---");
    
        function computerChoice() {
            let compChoice = Math.random();
            if (compChoice < 0.34) {
                return "rock";
            } else if (compChoice <= 0.67) {
               return "paper";
            } else {
                return "scissors";
        }
        }
        const computerSelection = computerChoice();
        console.log("Computer:", computerSelection); 

        function humanChoice() {
            let userChoice = prompt("Do you choose rock, paper or scissors?");
            return userChoice.toLowerCase(); 
        };
        const userSelection = humanChoice();
        console.log("User:", userSelection);

        function playRound(userSelection, computerSelection) {
          console.log(`${userSelection}' vs '${computerSelection}'`);

          if (userSelection === computerSelection) {
               console.log("It's a tie!");
           } else if (
                (userSelection === "rock" && computerSelection === "scissors") ||
                (userSelection === "paper" && computerSelection === "rock") ||
               (userSelection === "scissors" && computerSelection === "paper")
            ) {
                humanScore++;
               console.log("You win this round!");
           } else {
               computerScore++;
              console.log("Computer wins this round!");
          }
          console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
         }  
         playRound(userSelection, computerSelection);
    } 
   console.log("GAME OVER! Final Score - You:", humanScore, "Computer:", computerScore); 
}
playGame();

// clean up game, define tre