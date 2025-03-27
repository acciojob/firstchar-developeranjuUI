function firstChar(text) {
  // your code here
	const trim = text.trim();
	return trim.length>0 ? trim[0]:'';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
