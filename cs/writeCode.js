console.log("1. Sum Zero");

let result = true;
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        result = false;
      }
    }
  }
  console.log("Two nums do not sum to zero");
  console.log(arr);
  return result;
}

console.log(sumZero([1, 2, 3, 4, 5, 5]));

console.log(sumZero([0, 1, 2, 3]));

console.log("Time complexity: BigO(n)");
console.log("Space complexity: BigO(n)");

console.log("------------------");

console.log("2. Unique Characters");

function hasUniqueChars(word) {
  result = true;
  wordSplit = word.split("");
  for (let i = 0; i < wordSplit.length; i++) {
    for (let j = 0; j < wordSplit.length; j++) {
      if (wordSplit[i] === wordSplit[j] && i !== j) {
        result = false;
      }
    }
  }
  console.log(`does ${word} have unique letters?`);
  console.log(result);
}

hasUniqueChars("helo");
hasUniqueChars("Hello");

console.log("Time complexity: BigO(n^2)");
console.log("Space complexity: BigO(n)");

console.log("------------------");

console.log("3. Pangram Sentence?");

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function isPangram(string) {
  console.log(string);
  let stringArr = string.toLowerCase().split("");
  let noSpaceArr = [];
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] !== " ") {
      noSpaceArr.push(stringArr[i]);
    }
  }
  for (let i = 0; i < alphabet.length; i++) {
    if (!noSpaceArr.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

console.log("Time complexity: BigO(n^2)");
console.log("Space complexity: BigO(n)");

console.log("------------------");

console.log("4. Longest word");

function findLongestWord(arrOfWords) {
  console.log(arrOfWords);
  let wordLength = [];
  arrOfWords.forEach((word) => wordLength.push(word.length));

  let longestWordLength = Math.max(...wordLength);

  console.log(`Longest word length: ${longestWordLength}`);
}

findLongestWord(["Hello", "Hi", "Yuppee"]);
console.log("Time complexity: BigO(n)");
console.log("Space complexity: BigO(n)");
