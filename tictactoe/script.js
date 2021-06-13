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
    return {aiPlayer, aiStatus, aiTurn}
}

const Player = (X) => {
    choice = (X.checked) ? "X" : "O"
    computer = (X.checked) ? "O" : "X"

    const nextTurn = (turn) => {
        turn.choice = (turn.choice === "X") ? "O" : "X"
        return turn
    }

    return {choice, computer, nextTurn}
}

const gameBoard = () => {
    const gameState = [
        "","","",
        "","","",
        "","",""
    ];

    const isValidMove = (val) => {
        return (val.target.textContent) ? false : true
    }

    const updateState = (e, player) => {
        if (!e.target.textContent) {
            e.target.innerHTML += `<p class="player-anim">${player}</p>` 
            gameState[e.target.id] = player 
        } 
    }

    const aiUpdateState = (boards, aiSelect, player) => {
        boards[aiSelect].innerHTML += `<p class="comp-anim">${player}</p>`
        gameState[aiSelect] = player
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

        for (const winCase of winCases) {
            let [a, b, c] = winCase;
            if (arr[a].length && arr[a] === arr[b] && arr[a] === arr[c]) {
                return [true, arr[a], [a,b,c]]
            }
        }

        if (!arr.includes("")) { //if all squares are filled, return "draw"
            return ["draw"]
        } 
        return [false]
    }
    return {gameState, 
        isValidMove, 
        updateState,
        aiUpdateState, 
        checkGame
    }
}

const Game = () => {
    const boards = document.getElementsByClassName("board")
    const X = document.querySelector("#X")
    const O = document.querySelector("#O")
    const winnerMessage = document.querySelector("#winner-message")
    const replayBtn = document.querySelector("#replay")
    const playWithFriend = document.querySelector("#friend-play")

    let game = gameBoard()
    let player = Player(X)
    let ai = AIPlayer()
    let gameActive = true;

    const gameFinished = (game, aiON) => {
        let opponent = (aiON) ? "Computer won!" : "Your friend won!"
        let winner = ""
        if (X.checked) {
            winner = (game[1] === "X") ? "You won!" : opponent
        }
        if (O.checked) {
            winner = (game[1] === "O") ? "You won!" : opponent
        }
        switch (game[0]) {
            case true:
                winnerMessage.textContent = winner;
                replayBtn.style.display = "block"
                for (const val of game[2]){
                    boards[val].childNodes[0].classList.add("win-anim")
                }
                break;
            case "draw":
                winnerMessage.textContent = "It's a draw!";
                replayBtn.style.display = "block"
                break
        }
    }
    
    const playRound = (game, player, e) => {
        //isValidMove() checks if target has text content, is yes, return false.
        let AITurnedOn = ai.aiStatus()
        let gameWon = game.checkGame(game.gameState)

        if (gameActive) {
            if (game.isValidMove(e)) { 
                game.updateState(e, player.choice);
                gameWon = game.checkGame(game.gameState) //need to check if game won after you click
                if (!gameWon[0] && AITurnedOn) {
                    let aiSelection = ai.aiTurn(game.gameState)
                    if (aiSelection) {
                        game.aiUpdateState(boards, aiSelection, player.computer)
                        gameWon = game.checkGame(game.gameState) //check if game won after computer's turn
                    }
                }
                switch (gameWon[0]) {
                    case false:
                        if (AITurnedOn) {
                            break
                        }
                        player.nextTurn(player);
                        break
                    case true:
                        gameActive = false;
                        break
                    case "draw":
                        gameActive = false;
                        break
                }
            } 
        }
        if (!gameActive) {
            gameFinished(gameWon, AITurnedOn)
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
    playWithFriend.addEventListener("click", () => replayGame())
    ai.aiPlayer.addEventListener("click", () => replayGame())
    
    return {gameActive}
}

Game()