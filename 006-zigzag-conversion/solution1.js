/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (numRows === 0) return "";
	if (numRows === 1 || numRows >= s.length) return s;

	let rows = new Array(numRows).fill("");

	// Current row and direction
	let currentRow = 0;
	let goingDown = false;

	for (const char of s) {
		rows[currentRow] += char;

		// Change direction if we reach the top or bottom row
		if (currentRow === 0 || currentRow === numRows - 1) {
			goingDown = !goingDown;
		}

		// Move up or down
		currentRow += goingDown ? 1 : -1;
	}

	// Join all row strings
	return rows.join("");
};
