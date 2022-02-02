function nextGeneration(oldGeneration) {
	console.log(JSON.stringify(oldGeneration))
	for (let i = 0; i < oldGeneration.length; i++) {
		if (neighborCheck(oldGeneration, i) > 3) {
			oldGeneration[i].toDie = true;
		}
	}

	return (newGeneration = currentGeneration);
}

function neighborCheck(oldGeneration, index) {
	let neighborCount = 0;
	let xPos = oldGeneration[index].xPos;
	let yPos = oldGeneration[index].yPos;
	let objecToString = JSON.stringify(oldGeneration);

//	console.log(objecToString.includes("xPos":0,"yPos":0))

	return neighborCount;
}
