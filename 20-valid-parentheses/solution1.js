function isValid(string) {
	const stack = [];
	const map = {
		"(": ")",
		"{": "}",
		"[": "]",
	};

	for (let i = 0; i < string.length; i++) {
		const current = string[i];

		if (map[current]) {
			stack.push(map[current]);
		} else {
			if (current !== stack.pop()) {
				return false;
			}
		}
	}

	return stack.length === 0;
}
