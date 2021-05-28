//querySelector
const choices = document.querySelectorAll(".choice")
const gameState = document.querySelector(".game-state")
const showState = document.querySelector(".show-state")
const retry = document.querySelector(".retry")


const setWinnerStatus = (status) => showState.innerHTML = status;

const convertToEmoji = (val) => {
    switch (val) {
        case "rock":
            val = "✊"
            break;
        case "paper":
            val = "✋"
            break;
        case "scissors":
            val = "✌️"
            break;
    }
    return val
}

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
            return "It's a draw!"
        }

        //Iterate through win cases
        for (let i = 0; i<winCases.length; i++) {
            result = playerSelection+computerSelection;
            if (result === winCases[i]) {
                console.log("Player wins!")
                gameOn = false;
                return "You won!"
            }
        }
        console.log("Computer Wins!")
        gameOn = false;
        return "Computer won!"
    }
}

const computerSelection = () => {
    compChoices = ['rock','paper','scissors'];
    const getNum = () => Math.floor(Math.random()*2+1); //Get array choices
    return compChoices[getNum()]
}

//Declare vars 
let playerWinCount = 0;
let computerWinCount = 0;
let gameWon = false;


function game(clicked) {
    playerChoice = clicked.target.id
    computerChoice = computerSelection();

    if (!gameWon) {
        checkWinner = playRound(playerChoice,computerChoice)
        
        //Sets scores
        if (checkWinner === "You won!") {
            playerWinCount += 1;
        } else if (checkWinner === "Computer won!") {
            computerWinCount += 1;
        }

        showState.innerHTML = `${convertToEmoji(playerChoice)}  ${convertToEmoji(computerChoice)}`
        gameState.innerHTML = `😶:${playerWinCount}  🤖:${computerWinCount}`
    
        if (playerWinCount === 5 || computerWinCount === 5) {
            setWinnerStatus(checkWinner)
            retry.style.display = "block";
            gameWon = true;
        }
    }
}

const replayGame = () => {
    showState.innerHTML = "Rock Paper Scissors!"
    gameState.innerHTML = "First to 5 wins";
    playerWinCount = 0;
    computerWinCount = 0;
    retry.style.display = "none";
    gameWon = false;

}

//Add eventlisteners
choices.forEach(choice => {
    choice.addEventListener('click', game)
})
retry.addEventListener('click', replayGame)
