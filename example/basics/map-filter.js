const values = [1, 5, 4, 7, 23, 36, 46, 2, 12]

/**
 * Map.
 */
const mapValues = values.map((item) => item * 2)
console.log(mapValues)

/**
 * Filter.
 */
const filterValues = values.filter((item) => item > 30)
console.log(filterValues)
