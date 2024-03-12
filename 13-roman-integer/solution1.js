function romanToInt(string) {
	const romanNumerals = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let result = 0;
	for (let i = 0; i < string.length; i++) {
		if (romanNumerals[string[i]] < romanNumerals[string[i + 1]]) {
			result -= romanNumerals[string[i]];
		} else {
			result += romanNumerals[string[i]];
		}
	}
	return result;
}
