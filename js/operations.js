class Cell {
	constructor(xPos, yPos) {
		this.xPos = xPos;
		this.yPos = yPos;
		this.toDie = false;
	}
}

const currentGeneration = [
	new Cell(0, 0),
	new Cell(1, 1),
	new Cell(1, 2),
	new Cell(2, 2),
	new Cell(1, 3),
	new Cell(5, 1),
];

function stepOneGeneration() {
	nextGeneration(currentGeneration);
	drawFilledCells();
}
