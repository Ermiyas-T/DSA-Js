//# 1 . sum of all natural number form 1 to n
// function sum(num) {
// let sum = 0;
// for (let j = 1; j <= num; j++) {
//   sum += j;
// }
// return sum;
// return (num * (num + 1)) / 2;
// }

// console.log(sum(2));

//#2 : sum of digits of a number

// function sumOfDigits(number) {
// 1234
// * we have to separate the numbers
// let numberDigits = number.toString();
// let stringifyiedNum = numberDigits.slice(",");
// let sum = 0;
// // * we will sum up the digits
// for (let j = 0; j < stringifyiedNum.length; j++) {
//   sum += parseInt(stringifyiedNum[j]);
// }
// return sum;
// }
// let result = sumOfDigits(1234);
// console.log(result);

//# option 2

// function sumOfDigits(number) {
//   let sum = 0;
//   while (number > 0) {
//     sum += number % 10;
//     number = Math.floor(number / 10);
//   }
//   return sum;
// }
// let result = sumOfDigits(12345);
// console.log(result);

//#3 : count the number of digits of a number
// function digitsCount(number) {
//   let numberString = number.toString();
//   let count = numberString.length;
//   return count;
// }
// console.log(digitsCount(1234));

// #4 : Palindrome check
// function palindromCheck(number) {
//   //454  52325
//   let original = number;
//   let strNumber = number.toString();
//   let strLength = strNumber.length;
//   for (let j = 0; j < Math.floor(strLength / 2); j++) {
//     if (strNumber[j] != strNumber[strLength - (j + 1)]) return false;
//   }
//   return true;
// }

// let boolResult = palindromCheck(121232121);
// console.log(boolResult);

// #4 option using while loop
// function checkPalindrome(number) {
// copy number
//as long as number is greater than 0  divide by 10 and add the remainder
// to a string
// finally make the

//   let copyNum = number,
//     reverse = "";
//   while (copyNum > 0) {
//     let digit = copyNum % 10;
//     reverse += digit;
//     copyNum = Math.floor(copyNum / 10);
//   }
//   if (number !== parseInt(reverse)) return false;
//   return true;
// }

// let boolResult = checkPalindrome(121);
// console.log(boolResult);

// 5 : Fibonacci number  F(5) : 0 1 1 2 3 5 8 13 ...
// function fibonacci(number) {
//   let current = 1,
//     past = 0,
//     next;
//   if (number >= 0) {
//     if (number < 2) {
//       return number;
//     }
//     for (let j = 2; j <= number; j++) {
//       next = current + past;
//       past = current;
//       current = next;
//     }
//     return next;
//   }
// }

// let result = fibonacci(6);
// console.log(result);

// 6 : Missing Number from a given array containing [0,n]

// function findMissingNum(numArr) {
//   let arryLen = numArr.slice().pop();
//   let missingNums = [];
//   for (let j = 0; j < arryLen; j++) {
//     if (!numArr.includes(j)) {
//       missingNums.push(j);
//     }
//   }
//   return missingNums;
// }
// const arryNum = [1, 4];
// let result = findMissingNum(arryNum);
// if (result.length === 0) console.log("No missing Num");
// else console.log("missing Num/s : " + result);

// # ** : find the element in array
// function findElement(x, collection) {
//   // searching algorithm
//   let found = false;
//   collection.forEach((element) => {
//     if (element === x) {
//       found = true;
//     }
//   });
//   return found;
// }
// // const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// // const strArry = ["hell", "some", "age", "below"];
// let boolResult = findElement("hell", strArry);
// console.log(boolResult);

// ## * : checking the element existence
// const checkForElementIndex = (obj, collection) => {
//   // collection
//   let strCollection = collection.toString();
//   let indexArray = [];
//   for (element of collection) {
//     if (element === obj) {
//       indexArray.push(collection.indexOf(element));
//     }
//   }
//   if (indexArray.length) return indexArray;
//   else return -1;
// };
// const arry = [11, 44, 2, 334, 7, 34];
// let boolResult = checkForElementIndex(7, arry);
// if (boolResult === -1) {
//   console.log("element not found");
// } else {
//   console.log(">Element found at index : " + boolResult);
// }

//# : checking 2 arrays equal or not
// checkArrayEquality = (arr1, arr2) => {
//   if (arr1.length === arr2.length) {
//     let length = arr1.length;
//     for (let j = 0; j < length; j++) {
//       if (arr1[j] != arr2[j]) return false;
//     }
//   } else {
//     return false;
//   }
//   return true;
// };
// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3];
// let boolResult = checkArrayEquality(arr1, arr2);
// console.log(boolResult);
// let result = arr2.reduce((a, b) => a + b);
// console.log(result);
// check for 'j'
// const checkChar = (strOne) => {
//   const char = "V";
//   let length = strOne.length;
//   copyStr = strOne.split("");
//   console.log(copyStr);
//   for (let j = 0; j < length; j++) {
//     if (copyStr[j] === char) return j;
//   }
//   return -1;
// };
// let strOne = "aishal";
// let strTwo = "aome";
// let result = checkChar(strOne);
// console.log(result);
// console.log(strOne.localeCompare(strTwo,));
// let result = strOne.split("");

// #7 : check for the valid anagram given two strings
// anagram means two strings are composed of the same letter composition so that
// they can form each other
// function checkAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   for (char of str1) {
//     if (!str2.includes(char)) {
//       return false;
//     }
//   }
//   return true;
//   // read dear
// }
// let boolResult = checkAnagram("read", "dear");
// if (boolResult) console.log(">The two arrays are  anagram");
// else console.log(">The two arrays are not anagram");
// console.log("object".split("").sort() === "jectob".split("").sort());
// let n = "abebe";
// let y = "ebeab";
// let result = n.split("").sort().join() === y.split("").sort().join();
// console.log(result);
// console.log(n.split("").sort().join(""));
// #8 : longest Common prefix of string datatype variable
// const LongestcommonPrefix = (str, str2) => {
//   // abcde   X abfkl
//   let length = Math.min(str.length, str2.length);
//   let commonPref = "";
//   for (let j = 0; j < length; j++) {
//     if (str.charAt(j) === str2.charAt(j)) {
//       commonPref += str.charAt(j);
//     } else return commonPref;
//   }
// };
// const result = LongestcommonPrefix("abebe", "abede");
// console.log(result);
// #9 : Merge two strings alternately
// const mergeStrings = (str1, str2) => {
//   // abebe  & kebe   => akbeebbee
//   let mergedStr = "";
//   const length = Math.max(str1.length, str2.length);
//   for (let j = 0; j < length; j++) {
//     if (!str1[j]) {
//       mergedStr += str2[j];
//     } else if (!str2[j]) {
//       mergedStr += str1[j];
//     } else mergedStr += str1[j] + str2[j];
//   }
//   return mergedStr;
// };
// let result = mergeStrings("abebe", "kebe");
// console.log(result);
// #10  :length of last word
// function lengthOfLastWord(strVar) {
//   let splittedStrArry = strVar.trim().split(" ");
//   let length = splittedStrArry.length;
//   return splittedStrArry[length - 1].length;
// }
// let str = "   abebe beso bela  ";
// let result = lengthOfLastWord(str);
// console.log(result);

// #11 : length of last word
// function getLengthOfLastWord(word) {
//   // some one : trim and last word
//   const wordArr = word.trim().split(" ");
//   let length = wordArr.length;
//   const lastWord = wordArr[length - 1].toString();
//   return { lastWord, length };
// }

// const result = getLengthOfLastWord(" Hello world programmers ");
// console.log(result);
// ### : Recursion Practise
// 1 : call a function n times
// function call(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log("Hello", size - n + 1);
//   call(n - 1);
// }
// const size = 8;
// call(size);
// 2: factorial of a number
// 8 = 8*7*6*5*4*3*2*1
// 2=2*1
// const factorial = (number) => {
//   if (number === 1) return 1;
//   return number * factorial(number - 1);
// };
// const result = factorial(2);
// console.log(result);

// #12 : sum of array using recursion
// function sum(arry) {
//   if (arry[0]) return arry.pop() + sum(arry);
//   else return 0;
// }
// *** : other way
// function sum(arry) {
//   if (arry.length) return arry.shift() * sum(arry);
//   else return 1;
// }
// arryy = [1, 2, 3, 4];
// total = sum(arryy);
// console.log(total);

// #13 : fibonacci sequence using recurrsion : ------ @not solved !!!!!!!!!!
// 0,1,1,2,3,5,8,13,21
// formula => next= curr+prev
// f(0)=0 , f(1)=1, f(2)=1, f(3)=2, f(4)=5

// function fibonacci(number, initArry) {
//     if(initArry.length>)
//   if (number < 2) return number;
// }
// const initialFibSeries = [];
// const num = 8;
// const { fibonacciSeries, result } = fibonacci(num, initialFibSeries);

//#14 : find index of the first occurance of a sub-string
// function getIndexOfSubString(original, subString) {
//   const length = original.length;
//   for (let j = 0; j < length; j++) {
//     if (original[j] === subString[0]) {
//       if (original.slice(j, j + subString.length) === subString)
//         return `found " ${subString} " on index : ${j}`;
//     }
//   }
//   return "not found";
// }
// let strObj = "sweet is israel";
// result = getIndexOfSubString(strObj, "rael");
// console.log(result);
/**
 *
 * @param {string} mainString
 * @param {string} subString
 * @returns {number}
 */
// const getFirstIndexOfSubstring = (mainString, subString) => {
//   // check for the first index of substring in main string
//   // use boolean flag as a symbol for found and not found
//   m = mainString.length;
//   n = subString.length;
//   for (let j = 0; j <= m - n; j++) {
//     // let flag = true;
//     for (let j = 0; j < n; j++) {
//       // if found then check for others left
//       // if difference occur during check : break the checker loop
//       if (mainString[j + j] !== subString[j]) {
//         flag = false;
//         break;
//       }
//       flag = true;
//     }
//     // if all checked true : return the index
//     if (flag) {
//       return j;
//     }
//   }
//   // if not return : -1 (not found)
//   return -1;
// };
/**
 *
 * @param {String} mainString
 * @param {String} substring
 */
// const getFirstIndexOfSubstring = (mainString, substring) => {
//   // here is the string :"Ethiopia" , subSting : "op"
//   if (mainString.includes(substring)) {
//     const index = mainString.indexOf(substring);
//     return index;
//   }
//   return -1;
// };
// let result = getFirstIndexOfSubstring("economiz", "co");
// console.log(result);
// console.log("not found");
// ### : understanding break statement effect using switch
// let x = 5,
//   y = 4,
//   z;
// let op = "+";
// switch (op) {
//   case "+":
//     z = x + y;
//   // break;
//   case "-":
//     z = x * y;
//   // break;

//   // default:
//   //   z = x * y;
// }
// console.log(z);

// break : is used only on iterators and switch statement

// #15: Binary Search implementation
/**
 *
 * @param {array} array
 * @param {number} targetItem
 */
// const BinarySearch = (array, targetItem) => {
//   if (array.includes(targetItem)) {
//     // sort the array
//     array = array.sort();
//     const lastIndex = array.length - 1;
//     let initialIndex = 0,
//       mid;
//     while (true) {
//       mid = Math.floor((lastIndex + initialIndex) / 2);
//       // chech whether target>mid | target <mid | target===mid
//       // repeat until you find
//       if (array[mid] === targetItem) return mid;
//       // lastIndex or initialIndex will be changed for divide and conquer strategy
//       else if (array[mid] > targetItem) {
//         lastIndex = mid - 1;
//       } else {
//         initialIndex = mid + 1;
//       }
//     }
//   }
//   return -1;
// };
// const arry = [3, 2, 6, 7, 8, 9];
// let result = BinarySearch(arry, 8);
// if (result) {
//   console.log("found on index : ", result);
// } else console.log("not found");
//# : Binary Search using recursion
/**
 *
 * @param {array} arry
 * @param {number} target
 */
// const BinarySearchRecursion = (arry, target) => {
//   let start = 0,
//     end = arry.length - 1,
//     mid;
//   let copyArry;
//   arry.sort();
//   mid = Math.floor(start + end) / 2;
//   if (mid >= 1) {
//     if (arry[mid] === target) return mid;
//     else if (arry[mid] > target) {
//       copyArry = arry.filter((e) => e < arry[mid]);
//       BinarySearchRecursion(copyArry, target);
//     } else {
//       copyArry = arry.filter((e) => e > arry[mid]);
//       BinarySearchRecursion(copyArry, target);
//     }
//   }
//   return -1;
// };
// const arry = [8, 3, 9, 4, 0, 2, 1];
// let initialMillisecond = new Date().getMilliseconds();
// let result = BinarySearchRecursion(arry, 3);
// let finalMillisecond = new Date().getMilliseconds();
// console.log(
//   `element found on index : ${result} . time taken to compute ~ ${
//     finalMillisecond - initialMillisecond
//   }`
// );
//# 16 : floor and ceil value of a given number    ----- unanswered | unsolved
// a given array
/**
 *
 * @param {array} array
 * @param {number} number
 * @returns {Object}
 */

// let arry=[2,4,6,3,5,9]
// we want to obtain the cail and floor value of a given array element
// TO DO this
//1. sort
//2. middle number amont the array
//3. if the middle number is greater than the target: let it be ceil
//4. if the middle number is less than

// function findFloorNCeil(arry, target) {
//   arry.sort();
//   const length = arry.length - 1;
//   let start = 0,
//     end = length,
//     mid;
//   let floor = (ceil = -1);
//   while (start < end) {
//     mid = Math.floor((start + end) / 2);
//     if (arry[mid] === target) {
//       floor = mid;
//       ceil = mid;
//       return [floor, ceil];
//     } else if (arry[mid] > target) {
//       start = mid;
//       ceil = mid;
//     } else {
//       end = mid;
//       floor = mid;
//     }
//   }
//   return [ceil, floor];
// }

// const arry = [1, 2, 3, 4, 7, 9, 13, 15, 18];
// let result = findFloorNCeil(arry, 13);
// if (result === -1) {
//   console.log("Searched item has no ceil and floor value");
// } else if (result[0] != -1 && result[1] != -1) {
//   console.log(`floor value : ${result.floor}   |  ceil value : ${result.ceil}`);
// }

// *** Bubble sort implementation
/**
 *
 * @param {array} collection
 */
// function bubbleSort(collection) {
//   let lastIndex = collection.length - 1;
//   // loop length-1 times
//   let temp;
//   for (let i = 0; i <= lastIndex; i++) {
//     for (let j = 0; j <= lastIndex - i; j++) {
//       if (collection[j] > collection[j + 1]) {
//         temp = collection[j];
//         collection[j] = collection[j + 1];
//         collection[j + 1] = temp;
//       }
//     }
//   }
//   return collection;
// }
// let arry = [3, 2, 6, 6, 7, 8, 9];
// let result = bubbleSort(arry);
// console.log(result);

// ## another way of implementing bubble sort is
// ## applying flag varible called swap=false initially change its state while swaping
// takes place  and loop while swap=true;
/**
 *
 * @param {array} collection
 */
// function bubbleSort(collection) {
//   let i = 0,
//     temp;
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i <= collection.length - 1; i++) {
//       if (collection[i] > collection[i + 1]) {
//         [collection[i], collection[i + 1]] = [collection[i + 1], collection[i]];
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return collection;
// }
// let arry = [2, 4, -6, 3, 5, 9];

// let result = bubbleSort(arry);
// console.log(result);

// ### Selection Sort Implementation
// function selectionSort(collection) {
//   // we will make the first index min
//   // then compare with the rest
//   // when value less than the min value is found , swapping takes place
//   // finding of min value
//   const length = collection.length;

//   for (let i = 0; i < length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < length; j++) {
//       if (collection[i] > collection[j]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex != i) {
//       [collection[i], collection[minIndex]] = [
//         collection[minIndex],
//         collection[i],
//       ];
//     }
//   }
//   return collection;
// }
// let aryy = [1, -1, 0, 3, 9, 2];
// let result = selectionSort(aryy);
// console.log(result);
// ### Insertion sort
// the first element is sorted
// then pick the next right element and place it in right postion in the sorted half
// of the array
// loop the above process to the end
/**
 *
 * @param {array} collection
 */
// Insertion Sort : is implemented by dividing the total array in to two : * sorted and * unsorted
// gradually the element is added from unsorted to sorted half by applying comparision
// and putting in proper postion
// function insertionSort(collection) {
//   let length = collection.length;
//   for (let i = 1; i < length; i++) {
//     let j = i - 1;
//     let current = collection[i];
//     // for each iteration check for indexes under the current one
//     // if their value is higher than the current reduce
//     while (j >= 0 && collection[j] > current) {
//       collection[j + 1] = collection[j];
//       j--;
//     }
//     collection[j + 1] = current;
//   }
//   return collection;
// }
// //
// let result = insertionSort([23, 92, 8, 28, 2]);
// console.log(result);
// *** Merge Sort| Quick Sort | Heap Sort Implementation
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
// Map in Javascript
// const map = new Map();
// // console.log(map);
// map.set("name", "someone");
// map.set("age", 17);
// map.set("school", "heilig");
// map.forEach((value, key) => {
//   console.log(key, value);
// });
// console.log(result);

// # 17 : Sort characters By Frequency
/**
 *
 * @param {String} stringObj
//  */
// function frequencySort(stringObj) {
//   // separate the string and map each character with its frequency count

//   let map = new Map();
//   for (char of stringObj) {
//     if (!map.has(char)) map.set(char, 1);
//     else {
//       map.set(char, map.get(char) + 1);
//     }
//   }
//   console.log(map);
//   // sort the character decendingly according to #their frequency count and form string
//   let values = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
//   // console.log(values);

//   let newString = "";
//   for (item of values) {
//     newString += item;
//   }
//   return newString;
// }

// let word = "ExellentChoice";
// // let result = frequencySort(word);
// // console.log(result);
// let result = frequencySort(word);
// console.log(result);
