const prompt = require('prompt-sync')({ sigint: true });

// Question "q" should prompt user: 
const qaquery = prompt(
	"Would you like to 'combine colors', or 'deconstruct colors'? Type in 'combine' or 'deconstruct': ? "
);

// If the Answer "a" is to combine
if (qaquery === "combine") {
	// only for the "combine"
	const combine1 = prompt("Choose a color (red, yellow or blue): ");
	const combine2 = prompt("Choose a color (red, yellow or blue)(DIFFERENT THAN FIRST SELECTION): "
	);
	if (combine1 === "red" && combine2 === "yellow") {
		console.log("Your new color is:   ORANGE");
	} else if (combine1 === "blue" && combine2 === "red") {
		console.log("Your new color is:   PURPLE");
	} else if (combine1 === "yellow" && combine2 === "blue") {
		console.log("Your new color is:   GREEN");
	} else if (combine1 === "yellow" && combine2 === "red") {
		console.log("Your new color is:   ORANGE");
	} else if (combine1 === "red" && combine2 === "blue") {
		console.log("Your new color is:   PURPLE");
	} else if (combine1 === "blue" && combine2 === "yellow") {
		console.log("Your new color is:   Green");
	} else console.log("error!");
}

// If the Answer "a" is to deconstruct
else if (qaquery === "deconstruct") {
	// only for the "deconstruct"
	const deconstruct1 = prompt("Choose a color (purple, orange or green): ");
	if (deconstruct1 === "purple") {
		console.log("Your colors are Red and Blue.");
	} else if (deconstruct1 === "green") {
		console.log("Your colors are Yellow and Blue.");
	} else if (deconstruct1 === "orange") {
		console.log("Your colors are Red and Yellow.");
	} else console.log("error!");
}
else console.log("error!")

// Color 			combining

// inputs			output
// red + blue		purple
// red + yellow		orange
// blue + yellow	green
// anything else	"error"

// Color 			deconstructing

// input			outputs
// purple			red + blue
// orange			red + yellow
// green			blue + yellow
// anything else	error