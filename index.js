// ==========
// function isIsogram(str) {
//   let strLowerCase = str.toLowerCase();
//   let strSplit = strLowerCase.split("");
//   let uniqStr = new Set(strSplit);

//   if (uniqStr.size === strSplit.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isIsogram("Dermatoglyphics"));

//   "Dermatoglyphics" --> true
//   "aba" --> false
//   "moOse" --> false (ignore letter case)

// ==========
// function countPositivesSumNegatives(input) {
//   if (input === null || input.length < 1) {
//     return [];
//   }
//   let array = [0, 0];

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] <= 0) {
//       array[1] += input[i];
//     } else {
//       array[0] += 1;
//     }
//   }
//   return array;
// }

// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );
// ==========
// function fakeBin(x) {
//   let a = x.split("");
//   let b = [];
//   for (let i = 0; i <= a.length; i++) {
//     const element = a[i];
//     if (element < 5) {
//       b.push(0);
//     } else if (element >= 5) {
//       b.push(1);
//     }
//   }
//   return b.join("");
// }
// console.log(fakeBin("45385593107843568"));
// ==========

// function basicOp(operation, value1, value2) {
//   if (operation === "+") return value1 + value2;
//   if (operation === "-") return value1 - value2;
//   if (operation === "*") return value1 * value2;
//   if (operation === "/") return value1 / value2;
// }
// console.log(basicOp("+", 4, 7));

// ==========
// function lovefunc(flower1, flower2) {
//   if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
//     return true;
//   } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
//     return true;
//   } else return false;
// }

// console.log(lovefunc(1, 4));

// ==========
// function likes(names) {
//   if (names.length === 0) {
//     return `no one likes this`;
//   } else if (names.length === 1) {
//     return `${names[0]} likes this`;
//   } else if (names.length === 2) {
//     return `${names[0]} and ${names[1]} likes this`;
//   } else if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
//   } else if (names.length >= 4) {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }
// }

// function likes(names) {
//   if (names.length == 0) {
//     return "no one likes this";
//   } else if (names.length == 1) {
//     return names[0] + " likes this";
//   } else if (names.length == 2) {
//     return names[0] + " and " + names[1] + " like this";
//   } else if (names.length == 3) {
//     return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//   } else {
//     return (
//       names[0] +
//       ", " +
//       names[1] +
//       " and " +
//       (names.length - 2) +
//       " others like this"
//     );
//   }
// }
// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// ==========

// // alphabetPosition("The sunset sets at twelve o' clock.")
// // Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( как строка )
// function alphabetPosition(text) {
//   //   return [...text].map((a) => parseInt(a, 36) - 9).filter((a) => a >= 0);
//   const alphabet = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   const textLowerCase = text.toLowerCase();

//   const arr = [];

//   for (let i = 0; i < textLowerCase.length; i++) {
//     if (alphabet.indexOf(textLowerCase[i] !== -1)) {
//       arr.push(alphabet.indexOf(textLowerCase[i]) + 1);
//     }
//   }
//   const arr2 = arr.filter((i) => i > 0);
//   return arr2.join(" ");
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// ==========

// function findNeedle(haystack) {
//   // your code here
//   const a = haystack.findIndex((i) => i === "needle");
//   return `found the needle at position ${a}`;
// }

// console.log(
//   findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
// );
// ==========

// function sumTwoSmallestNumbers(numbers) {
//   //Code here
//   const sorted = numbers.sort((a, b) => a - b);
//   const sum = sorted[0] + sorted[1];
//   return sum;
// }
// sumTwoSmallestNumbers([19, 5, 42, 2, 77]);

// // For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 5+2 = 7.

// ==========

// function sortByLength(array) {
//   return array.sort((a, b) => a.length - b.length);
// }

// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
// ==========

// function friend(friends) {
//   let res = [];
//   return (res = friends.filter((f) => f.length === 4));
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]));
// ==========

// function evenNumbers(array, number) {
//   let evenArr = [];
//   array.forEach((el) => {
//     el % 2 === 0 ? evenArr.push(el) : false;
//   });

//   return evenArr.slice(-number);
// }

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); //[4, 6, 8]

// ==========

// function smallEnough(a, limit) {
//   let res = true;
//   let sortArr = a.sort((a, b) => a - b);
//   sortArr.forEach((element) => {
//     if (element < limit) {
//       res = true;
//     } else if (element > limit) {
//       res = false;
//     }
//   });
//   return res;
// }

// console.log(smallEnough([66, 101, 201, 65], 200));
// //функция в заглавный регистр

// function toCapitalCase(str) {
//   let arr = str.split(" ");
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i][0].toUpperCase() + arr[i].slice(1));
//   }
//   return res.join(" ");
// }

// console.log(
//   toCapitalCase("lorem ipsum dolor sit amet consectetur adipisicing elit.")
// );

// //поиск количества гласных
// function findVowels(str) {
//   let eng = ["a", "e", "l", "o", "u", "y"];
//   let count = 0;
//   let strSplit = str.toLowerCase().split("");
//   for (let i = 0; i < strSplit.length; i++) {
//     if (strSplit[i] === eng[i]) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(findVowels("hello"));

// //функция форматирования цифр в телефонный номер
// function phoneNumber(num) {
//   let str = String(num);
//   let split = str.split("");
//   let block1 = split.slice(0, 3).join("");
//   let block2 = split.slice(3, 6).join("");
//   let block3 = split.slice(6, 9).join("");

//   let newNum = `(${block1}) ${block2}-${block3}`;

//   return newNum;
// }

// console.log(phoneNumber(123456789));

// // функция возврата уникальных чисел
// function uniteUnique() {
//   let arr = [...arguments];
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(...arr[i]);
//   }
//   newArr = new Set(newArr);
//   return [...newArr];
// }

// console.log(uniteUnique([1, 2, 3], [4, 1, 5], [6, 7, 8, 5]));

// //функция вывода чисел

// function fooBar(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       console.log("foobar");
//     } else if (i % 5 === 0) {
//       console.log("bar");
//     } else if (i % 3 === 0) {
//       console.log("foo");
//     } else {
//       console.log(i);
//     }
//   }
// }

// console.log(fooBar(15));

// // функция возврата индексов заглавных букв строки
// function capitals(str) {
//   let strArr = str.split("");
//   let strCopyArr = str.toUpperCase().split("");
//   let arr = [];

//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] === strCopyArr[i]) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// console.log(capitals("CodEWaRs")); //[0, 3, 4, 6]

// // функция создания набора дубликатов

// function accum(str) {
//   let arrUpper = str.toUpperCase().split("");
//   let repeatArr = arrUpper.map((el, i) => {
//     return (el += el.repeat(i).toLowerCase());
//   });
//   let sumStr = repeatArr.join("-");
//   return sumStr;
// }

// accum("abcd"); //A-Bb-Ccc-Dddd

// //замыканиe
// function external() {
//   const externalValue = "внешняя функция";

//   function inner() {
//     const innerValue = "внутренняя функция";
//     console.log(externalValue);
//     console.log(innerValue);
//   }
//   return inner;
// }
// const qwerty = external();
// qwerty();

// //======================//

// function createAddress(type) {
//   const address = type.toUpperCase();
//   return function (name) {
//     return `${address} ${name}`;
//   };
// }

// const addressMale = createAddress("Мужчина");
// const addressFemale = createAddress("Женщина");

// console.log(addressMale("Вася"));
// console.log(addressFemale("Маша"));

// //======================//

// function createPlayer(name) {
//   let score = 0;
//   return function scoreCount() {
//     score++;
//     return `${name} - ${score}`;
//   };
// }

// const player1 = createPlayer("Вася");
// const player2 = createPlayer("Маша");

// player1();
// player2();
// // player1()
// // 'Вася - 3'
// // player1()
// // 'Вася - 4'
// // player1()
// // 'Вася - 5'

// // player2()
// // 'Маша - 2'
// // player2()
// // 'Маша - 3'

// // функция поиска минимального и максимального значения

// function minMax(arr) {
//   let array = [];
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);

//   array.push(min, max);
//   return array;
// }

// console.log(minMax([2, 1, 3, 47, 9, 11]));

// // функция поиска минимального и максимального значения

// function minMax(arr) {
//   let max = Math.max.apply(null, arr);
//   let min = Math.min.apply(null, arr);
//   let array = [];
//   array.push(min, max);
//   return array;
// }

// console.log(minMax([2, 1, 3, 47, 9, 11]));

// //функция суммирования всех чисел
// function sumDigits(num) {
//   let numberPlus = Math.abs(num);
//   let arr = numberPlus.toString().split("");
//   let sum = arr.reduce((a, b) => {
//     return Number(a) + Number(b);
//   }, 0);
//   console.log(sum);
// }

// console.log(sumDigits(-99));

// //создание инициалов

// function toInitials(str) {
// let q = str.split(' ')
// let first = q[0].slice(0, 1).toUpperCase()
// let two = q[1].slice(0, 1).toUpperCase()
//     return `${first}.${two}`
// }

// console.log(toInitials("elon mask"));

// // самое короткое слово

// function findShorts(str) {
//   let q = str.split(" ");
//   let qw = q.sort(function (a, b) {
//     return a.length - b.length;
//   });
//   return qw[0];
// }

// console.log(findShorts("justines test string"));

// // === palindrome ===//

// function palindrome(str) {
//   const strSplitLow = str.toLowerCase().split("").reverse().join("");
//   return strSplitLow === str.toLowerCase();
// }

// console.log(palindrome("тест"));
// console.log(palindrome("шалаш"));
