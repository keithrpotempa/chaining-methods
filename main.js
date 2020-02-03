// Using one single line of JavaScript code, 
// complete the following tasks on the array of integers below.

// [x] Sort the numbers in descending order (10, 9, 8, 7, etc).
// [x] Remove any integers greater than 19.
// [x] Multiply each remaining number by 1.5 and then subtract 1.
// [x] Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const newInts = integers.sort((a,b) => b-a).filter(int => int < 19).map(int => (int * 1.5) - 1).reduce((acc, cv) => acc + cv)

console.log(newInts)

// Broken Up:
// const sorted= integers.sort((a,b) => b-a)
// const largeRemoved = sorted.filter(int => int < 19)
// const multiplied = largeRemoved.map(int => (int * 1.5) - 1)
// const reduced = multiplied.reduce((acc, cv) => acc + cv)

// console.log(reduced)