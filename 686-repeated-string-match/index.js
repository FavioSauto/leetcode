/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  let repeatA = a;
  let count = 1;

  if (a.includes(b)) return 1;

  while (repeatA.length < b.length) {
    repeatA += a;
    count++;

    if (repeatA.includes(b)) return count;
  }

  repeatA += a;
  count++;

  if (repeatA.includes(b)) return count;

  return -1;
};
