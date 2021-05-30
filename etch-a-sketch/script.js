//Query Selectors
const gridContainer = document.querySelector(".grid-container")
const gridRows = document.getElementsByClassName("grid-row");
const grids = document.getElementsByClassName("grid")
const resetButton = document.querySelector("#reset")
const randomButton = document.querySelector("#random")
const gridButton = document.querySelector("#grid-size")
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
        grids[i].addEventListener('mouseover', e => e.target.style.backgroundColor = `rgba(0,0,0,0.8)`)
    }
}

//Change to random color on hover
const onHoverColor = () => {
    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mouseover', e => e.target.style.backgroundColor = `rgba(${randomNum()},${randomNum()},${randomNum()},0.8)`)
    }
}

//Reset color on button click
resetButton.addEventListener('click', () => {
    for(let i = 0; i < grids.length; i++) {
        grids[i].style.backgroundColor = "white"
    }
})

//Change to random colors on click
randomButton.addEventListener('click', e => {
    for(let i = 0; i < grids.length; i++) {
        if (grids[i].style.backgroundColor === "rgba(0, 0, 0, 0.8)") {
            grids[i].style.backgroundColor = `rgba(${randomNum()},${randomNum()},${randomNum()},0.8)`
        }
    }
    onHoverColor();
})

//Change back to black

//Set grid size on click 
gridButton.addEventListener('click', () => {
    numOfDivs = Number(prompt("What would you want your grid size to be?"))
    if (!numOfDivs) {
        return //if user pressed cancel
    }
    gridRange.value = numOfDivs //sync range button 
    removeGrids();
    createGrids(numOfDivs);
    onHover()
})

//Set grid size on enter
gridText.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        numOfDivs = e.target.value
    }
    gridRange.value = numOfDivs //sync range button
    removeGrids();
    createGrids(numOfDivs);
    onHover()
})

//Set range
gridRange.addEventListener('click', e => {
    removeGrids();
    createGrids(e.target.value);
    onHover()
})

createGrids(numOfDivs=16);
onHover()