var canvas = document.getElementById("gameGrid");
var ctx = canvas.getContext("2d");
const cellSize = 20;
const gridSize = 500;

function drawGrid(gridSize, cellSize) {
	for (let i = 0; i < gridSize / cellSize; i++) {
		drawLine(0, i * cellSize, gridSize, i * cellSize);
	}
	for (let j = 0; j < gridSize / cellSize; j++) {
		drawLine(j * cellSize, 0, j * cellSize, gridSize);
	}
}

function drawLine(xStart, yStart, xEnd, yEnd) {
	ctx.moveTo(xStart, yStart);
	ctx.lineTo(xEnd, yEnd);
	ctx.strokeStyle = "#929292";
	ctx.stroke();
}

drawGrid(gridSize, cellSize);

function drawFilledCells() {
	for (let i = 0; i < currentGeneration.length; i++) {
		drawCellSquare(
			translateCoordinate(currentGeneration[i].xPos),
			translateCoordinate(currentGeneration[i].yPos)
		);
	}
}

function drawCellSquare(xPos, yPos) {
	ctx.fillRect(xPos, yPos, cellSize, cellSize);
}

function translateCoordinate(coordinate) {
	return coordinate * cellSize;
}

drawFilledCells();
