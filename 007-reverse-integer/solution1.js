/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let numberArray = x.toString().split("");
	numberArray.reverse();

	if (numberArray[numberArray.length - 1] === "-") {
		numberArray.pop();
		numberArray = ["-", ...numberArray];
	}

	return +numberArray.join("");
};
