//Query selectors 
const selectionBoard = document.querySelector("#selection-board");
const gameScore = document.querySelector("#game-score");


(function () { 
    const gameBoard = document.querySelector("#game-board")
    for (let i = 0; i < 9; i++) {
        let div = document.createElement("div")
        div.classList.add("board")
        div.setAttribute("id", `${i}`)
        gameBoard.appendChild(div)
    }
})();

const Player = () => {
    const setPlayer = () => {
        const X = document.querySelector("#X")
        return (X.checked) ? "X" : "O"
    }

    playerChoice = setPlayer()

    const changePlayer = (turn) => {
        let nextTurn = (turn.playerChoice === "X") ? "O" : "X"
        return nextTurn
    }

    return {playerChoice, changePlayer}
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
        }
        console.log(gameState)
    }

    const updateState = (e, player) => {
        e.target.textContent = player
    }

    const checkGame = (arr) => {
        let winCases = [
            ["0","1","2"],
            ["3","4","5"],
            ["6","7","8"],
            ["0","3","6"],
            ["1","4","7"],
            ["2","5","8"],
            ["0","4","8"]
        ]

        for (const winCase of winCases) {
            let [a, b, c] = winCase;
            if (arr[a].length && arr[a] === arr[b] && arr[a] === arr[c]) {
                return true
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

    const changePlayer = (turn) => {
        turn = (turn === "X") ? "O" : "X"
        return turn
    }

    let game = gameBoard()
    let player = (X.checked) ? "X" : "O"
    let gameActive = true;
    
    const playRound = (game, player, gameActive, e) => {
        game.changeState(e.target.id, player);
        game.updateState(e, player);
        gameActive = (game.checkGame(game.gameState)) ? false : true

        if (gameActive) {
            player = changePlayer(player)
            console.log(player)
        } else {
            console.log("meow")
        }
    }

    for (const board of boards ) {
        board.addEventListener("click", (e) => {
            playRound(game, player, gameActive, e)
        })
    }
}

Game()
