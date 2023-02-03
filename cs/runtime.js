const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

const arrays = [
  tinyArray,
  smallArray,
  mediumArray,
  largeArray,
  extraLargeArray,
];
const arraySizes = [
  "Tiny Array",
  "Small Array",
  "Medium Size Array",
  "Large Array",
  "Extra Large Array",
];
for (let i = 0; i < arrays.length; i++) {
  const size = arrays[i].length;
  perf.start();
  doublerAppend(arrays[i]);
  let resultsAppend = perf.stop();

  perf.start();
  doublerInsert(arrays[i]);
  let resultsInsert = perf.stop();
  console.log("-----------------------");
  console.log("Array size:", arraySizes[i]);

  console.log("Append time:", resultsAppend.words);

  console.log("Insert time:", resultsInsert.words);
}

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start(); // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

console.log("-----------------------");
console.log("Results for the extraLargeArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
// Results for the extraLargeArray
// insert 551.5006 ms
// append 2.8652 ms

let mySummary = `
------------------------
I find that it is hard to see the problem with small arrays because the the append time and insert time have very close outputs. The scaling problem is more evident in the Large and Extra Large Arrays as the extra steps the computer must take are increasing the BigO for time complexity. If we were to pass in an array of larger scale such as const veryExtraLargeArray = getSizedArray(1000000000000000000000); The issue would actually start causing problems with the speed of our function for users or client.
`;
console.log(mySummary);
