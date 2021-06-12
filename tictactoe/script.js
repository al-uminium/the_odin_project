//Create board
(function () { 
    const gameBoard = document.querySelector("#game-board")

    for (let i = 0; i < 9; i++) {
        let div = document.createElement("div")
        div.classList.add("board")
        div.setAttribute("id", `${i}`)
        gameBoard.appendChild(div)
    }
})();

const AIPlayer = () => {
    const aiPlayer = document.querySelector("#ai-play")
    const humanPlayer = document.querySelector("#friend-play")
    // const aiDifficulty = document.querySelector("#ai-difficulty")

    // const aiDropDown = () => {
        // console.log(aiPlayer.checked)
    //     aiDifficulty.style.visibility = (aiStatus()) ? "visible" : "hidden"
    // }

    const aiStatus = () => {
        return aiPlayer.checked
    }

    const aiTurn = (arr) => {
        aiChoices = []
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i].length) {
                aiChoices.push(i);
            }
        }
        return aiChoices[Math.floor(Math.random() * aiChoices.length)]
    }

    // aiPlayer.addEventListener("click", () => aiDropDown())
    // humanPlayer.addEventListener("click", () => aiDropDown())

    return {aiStatus, aiTurn}
}

const Player = (X) => {
    choice = (X.checked) ? "X" : "O"
    computer = (X.checked) ? "O" : "X"

    const changePlayer = (turn) => {
        turn.choice = (turn.choice === "X") ? "O" : "X"
        return turn
    }
    return {choice, changePlayer}
}

const gameBoard = () => {
    const gameState = [
        "","","",
        "","","",
        "","",""
    ];

    const changeState = (val, player) => {
        if (!gameState[val]) {
            gameState[val] = player;
            return true
        } else {
            return false
        }
    }

    const updateState = (e, player) => {
        if (!e.target.textContent) {
            e.target.textContent = player
        } 
    }

    const checkGame = (arr) => {
        let winCases = [
            ["0","1","2"],
            ["3","4","5"],
            ["6","7","8"],
            ["0","3","6"],
            ["1","4","7"],
            ["2","5","8"],
            ["6","4","2"],
            ["0","4","8"]
        ]

        if (!arr.includes("")) { //if all squares are filled, return null
            return null
        } else if (arr.includes("")) {
            for (const winCase of winCases) {
                let [a, b, c] = winCase;
                if (arr[a].length && arr[a] === arr[b] && arr[a] === arr[c]) {
                    return true
                }
            }
        }
        return false
    }
    return {gameState, 
        changeState, 
        updateState, 
        checkGame
    }
}

const Game = () => {
    const boards = document.getElementsByClassName("board")
    const X = document.querySelector("#X")
    const O = document.querySelector("#O")
    const winnerMessage = document.querySelector("#winner-message")
    const replayBtn = document.querySelector("#replay")

    let game = gameBoard()
    let player = Player(X)
    let ai = AIPlayer()
    let gameActive = true;

    const gameWon = (player) => {
        let winner = (X.checked && player.choice==="X" || O.checked && player.choice==="O") ? "You won!" : "Computer won!"
        winnerMessage.textContent = winner;
        replayBtn.style.display = "block"
    }
    
    const playRound = (game, player, e) => {
        //changeState() changes arr values for gamestate and returns true if the state *has* been changed, else returns false 
        let changeGameState = game.changeState(e.target.id, player.choice) 
        let AITurnedOn = ai.aiStatus()
        console.log(AITurnedOn)
        if (gameActive) {
            if (changeGameState) { 
                game.updateState(e, player.choice);
                gameActive = (game.checkGame(game.gameState)) ? false : player.changePlayer(player);
                if (AITurnedOn) {
                    let aiSelection = ai.aiTurn(game.gameState)
                    game.changeState(aiSelection, player.choice)
                    boards[aiSelection].textContent = player.choice
                    player.changePlayer(player)
                }
            } 

            if (game.checkGame(game.gameState) === null) {
                gameActive = false;
                winnerMessage.textContent = "It's a draw!"
                replayBtn.style.display = "block"
                return
            }
        }
        if (!gameActive) {
            gameWon(player);
            return
        }
    }

    const replayGame = () => {
        for (const board of boards) {
            board.textContent = ""
        }
        game = gameBoard()
        player = Player(X)
        gameActive = true
        winnerMessage.textContent = "";
        replayBtn.style.display = "none"
    }

    //Event listeners
    for (const board of boards ) {
        board.addEventListener("click", (e) => {
            playRound(game, player, e)
        })
    }
    replayBtn.addEventListener("click", () => replayGame())
    X.addEventListener("click", () => replayGame())
    O.addEventListener("click", () => replayGame())
}

Game()