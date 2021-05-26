function playRound(playerSelection, computerSelection) {

    let gameOn = true;
    winCases = ["rockscissors", "scissorspaper", "paperrock"]

    while (gameOn) {
        //Debugging purposes
        console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`)

        //Check for draw
        if (playerSelection === computerSelection) {
            console.log(`It's a draw!`)
            gameOn = false;
            return
        }

        //Iterate through win cases
        for (let i = 0; i<winCases.length; i++) {
            result = playerSelection+computerSelection;
            if (result === winCases[i]) {
                console.log("Player wins!")
                gameOn = false;
                return
            }
        }
        console.log("Computer Wins!")
        gameOn = false;
        return
    }
}

const computerSelection = () => {
    compChoices = ['rock','paper','scissors'];
    const getNum = () => Math.floor(Math.random()*2+1); //Get array choices
    return compChoices[getNum()]
}

const playerSelection = () => {
    while (true) {
        let playerChoice = prompt("Choose Rock, Paper or Scissors!");
        playerChoice = playerChoice.toLowerCase().trim()
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
            return playerChoice
        } 
    }
}