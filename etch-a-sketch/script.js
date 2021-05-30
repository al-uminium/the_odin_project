//Query Selectors
const gridContainer = document.querySelector(".grid-container");
const grids = document.querySelector(".grid")

//Create new grids
const createGrids = (numOfDivs) => {
    for (let i = 0; i < numOfDivs; i++) {
        let div = document.createElement('div');
        div.className = "grid-row" 
        div.setAttribute("id",`row-${i}`)
        gridContainer.appendChild(div)
        let currentRow = document.querySelector(`#row-${i}`)
        for (let j = 0; j < numOfDivs; j++) {
            let grid = document.createElement('div');
            grid.className = "grid"
            currentRow.appendChild(grid)
        }
    }
}

createGrids(4);