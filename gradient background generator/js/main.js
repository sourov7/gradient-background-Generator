var css = document.querySelector("h3");
var color1 = document.querySelector (".color1");
var color2 = document.querySelector (".color2");
var body = document.getElementById("gradient");

function inputGradient() {
	
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";


	// body.style.background =
	// "linear-gradient 
	// (to right " 
	// 	+ color1.value
	// 	 + "," 
	// 	 + color2.value ")";


	//text content or inner html done same work; 

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", inputGradient);

color2.addEventListener("input",inputGradient);

