/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  let totalWays = 0;
  // Total number of ways to distribute candies

  for (let i = 0; i <= Math.min(limit, n); i++) {
    // Iterate over the possible number of candies for one child

    const jMin = Math.max(0, n - i - limit);
    // Minimum number of candies that the second child can get

    const jMax = Math.min(limit, n - i);
    // Maximum number of candies that the second child can get

    const numWaysForI = Math.max(jMax - jMin + 1, 0);
    // Number of ways to distribute the remaining candies to the third child

    totalWays += numWaysForI;
    // Add the number of ways to distribute the candies for the current i to the total number of ways
  }
  return totalWays;
  // Return the total number of ways to distribute the candies
};
