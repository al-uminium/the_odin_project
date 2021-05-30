//Query Selectors
//Grids
const gridContainer = document.querySelector(".grid-container")
const gridRows = document.getElementsByClassName("grid-row");
const grids = document.getElementsByClassName("grid")

//Buttons
const resetButton = document.querySelector("#reset")
const toggleSwitch = document.querySelector(".toggle-color")

//
const gridText = document.querySelector("#text-grid-size")
const gridRange = document.querySelector("#range-grid-size")

//Create new grid divs
const createGridElement = (numOfDivs) => {
    for (let i = 0; i < numOfDivs; i++) {
        let div = document.createElement('div');
        div.className = "grid-row" 
        div.setAttribute("id",`row-${i}`) //To be able to select with row to append to 
        gridContainer.appendChild(div)
        let currentRow = document.querySelector(`#row-${i}`)
        for (let j = 0; j < numOfDivs; j++) { //Adds column to current row
            let grid = document.createElement('div');
            grid.className = "grid"
            grid.style.backgroundColor = "white"
            currentRow.appendChild(grid)
        }
    }
}

//Set grid columns
const setGridColumns = (numOfDivs) => {
    for (let i = 0; i<gridRows.length; i++) {
        gridRows[i].style.gridTemplateColumns = `repeat(${numOfDivs}, 1fr)`
    }
}

const createGrids = (numOfDivs) => {
    createGridElement(numOfDivs)
    setGridColumns(numOfDivs)
}

const removeGrids = () => {
    for (let i = gridRows.length-1; i >= 0; i--) {
        gridRows[i].remove()
    }
}

//Random no up to 256;
const randomNum = () => Math.floor(Math.random()*256)

//Change to black on hover
const onHover = () => {
    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mouseover', e => e.target.style.backgroundColor = `rgba(60,60,60,1)`)
    }
}

//Change to random color on hover
const onHoverColor = () => {
    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mouseover', e => e.target.style.backgroundColor = `rgba(${randomNum()},${randomNum()},${randomNum()},1)`)
    }
}

//Reset color on button click
resetButton.addEventListener('click', () => {
    for(let i = 0; i < grids.length; i++) {
        grids[i].style.backgroundColor = "white"
    }
})

//Toggle colors;
//Toggle off
const toggleOff = () => {
    for(let i = 0; i < grids.length; i++) {
        if (grids[i].style.backgroundColor !== "white") {
            grids[i].style.backgroundColor = "rgb(60, 60, 60)"
        }
    }
    onHover();
}
//Toggle on
const toggleOn = () => {
    for(let i = 0; i < grids.length; i++) {
        if (grids[i].style.backgroundColor === "rgb(60, 60, 60)") {
            console.log("hi")
            grids[i].style.backgroundColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`
        }
    }
    onHoverColor();
}

//Toggle switch event handling
toggleSwitch.addEventListener('click', e => {
    (e.target.checked) ? toggleOn() : toggleOff()
})


//Set grid size on enter
gridText.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        if (typeof(e.target.value) !== "number") {
            alert("pls dont try to break my code ;w;");
        }

        if (typeof(Number(e.target.value)) === "number" && Number(e.target.value)<65) {
            numOfDivs = e.target.value
        }
        e.target.placeholder = e.target.value
        gridRange.value = numOfDivs //sync range button
        removeGrids();
        createGrids(numOfDivs);
        (toggleSwitch.checked) ? toggleOn() : toggleOff()

    }
})

//Set range
gridRange.addEventListener('click', e => {
    gridText.value = ""
    gridText.placeholder = e.target.value
    removeGrids();
    createGrids(e.target.value);
    (toggleSwitch.checked) ? toggleOn() : toggleOff()
})

createGrids(numOfDivs=16);
onHover()