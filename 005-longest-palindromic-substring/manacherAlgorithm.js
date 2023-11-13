/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let strLen = 2 * s.length + 3;
	let stringCharacters = new Array(strLen);

	// Inserting special characters to ignore special cases
	stringCharacters[0] = "@";
	stringCharacters[strLen - 1] = "$";

	let transformedArrayIndex = 1;

	for (let i = 0; i < s.length; i++) {
		stringCharacters[transformedArrayIndex] = "#";
		transformedArrayIndex++;

		stringCharacters[transformedArrayIndex] = s[i];
		transformedArrayIndex++;
	}

	stringCharacters[transformedArrayIndex] = "#";

	let palindromeMaxLen = 0;
	let palindromeStarts = 0; // Start index of the longest palindrome found in the original string
	let palindromeMaxCharsToTheRight = 0; // The rightmost position reached by the centered palindrome expansion
	let centerOfThePalindrome = 0; // Center of the current palindrome
	let palindromesArray = new Array(strLen).fill(0); // Array to hold the radius of the palindrome centered at each position in stringCharacters

	for (let index = 1; index < strLen - 1; index++) {
		// If the current position is within the bounds
		if (index < palindromeMaxCharsToTheRight) {
			palindromesArray[index] = Math.min(
				palindromeMaxCharsToTheRight - index,
				palindromesArray[2 * centerOfThePalindrome - index],
			);
		}

		while (
			stringCharacters[index + palindromesArray[index] + 1] ===
			stringCharacters[index - palindromesArray[index] - 1]
		) {
			palindromesArray[index]++;
		}

		if (index + palindromesArray[index] > palindromeMaxCharsToTheRight) {
			centerOfThePalindrome = index;
			palindromeMaxCharsToTheRight = index + palindromesArray[index];
		}

		if (palindromesArray[index] > palindromeMaxLen) {
			palindromeStarts = (index - palindromesArray[index] - 1) / 2;
			palindromeMaxLen = palindromesArray[index];
		}
	}

	let result = "";

	for (
		let i = palindromeStarts;
		i <= palindromeStarts + palindromeMaxLen - 1;
		i++
	) {
		result += s[i];
	}

	return result;
};
