var validCalculations = [];
var calculateCircumference = function () {
	//Step 1: Complete the exercise from Monday’s class
    
	const INPUT_NAME = "radius";
	const OUTPUT_NAME = "output";
	
	var validLength = validCalculations.length;
	//var badInput = 0;
	
	let input = document.getElementById(INPUT_NAME).value;
	let output = document.getElementById(OUTPUT_NAME);
	let circumference = Math.PI * 2 * input;
	let element = document.createElement("p");


	//Step 4: Loops – 2 points
	for(i = 0; i < 1; i++) {
    //while(badInput == 0){
	
	//Step 3: Error handling – 1 point
	try {
		
		//Step 2: Type conversion – 1 point
		if (input >= 0) {
		ouput = element.innerText = Math.round(circumference);
		//badInput = 1;
		console.log(circumference);
		output.appendChild(element, output.lastChild);
		validCalculations.push(circumference);
		
	  } else if (input < 0){
		  throw "Illegal number"; 
		  //badInput = 2;
	  }
	  else {
		ouput = element.innerText = -1;
		//badInput = -1;
	  }
	  
	}
	catch(err){
		ouput = element.innerText = err;
	}
	
	
	}
	
	console.log(validCalculations);
	
}