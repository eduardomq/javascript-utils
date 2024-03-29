// Functions
// Regular function

function sum(a, b) {
  return a + b;
}

// Function expression

const sum = function (a, b) {
  return a + b;
};

// Arrow function

const sum = (a, b) => {
  return a + b;
};
// OR
const sum = (a, b) => a + b;

// Generator function

function* indexGenerator() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
const g = indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1

// Time the execution of your code

console.time("time");
for (let i = 0; i < 1000000; i++) {
  // do something
}
console.timeEnd("time"); // time: 0.827ms

// Evaluate a string

const toJavascript = (str) => eval(str);
toJavascript("alert('Hello World')");

// Array

// Create an array of numbers from 1 to n

const range = (n) => Array.from({ length: n }, (_, i) => i + 1);
console.log(range(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Create an array of numbers from 1 to n with a step

const range = (n, step = 1) => Array.from({ length: n }, (_, i) => i * step);
console.log(range(10, 2)); // [1, 3, 5, 7, 9]

// Create an array and fill it with a value

const fill = (len, value) => Array(len).fill(value);
console.log(fill(3, 0)); // [0, 0, 0]

// Shuffling an array

const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
console.log(shuffleArray([1, 2, 3, 4])); // [3, 2, 1, 4]

// Convert an object into a list of [key, value] pairs

const toPairs = (obj) => Object.entries(obj);
console.log(toPairs({ a: 1, b: 2, c: 3 })); // [['a', 1], ['b', 2], ['c', 3]]

// Convert a list of [key, value] pairs into an object

const fromPairs = (pairs) =>
  pairs.reduce((a, b) => ({ ...a, [b[0]]: b[1] }), {});
console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
); // { a: 1, b: 2, c: 3 }

// Remove an element from an array

const removeElement = (arr, element) => arr.filter((e) => e !== element);
console.log(removeElement([1, 2, 3, 4], 2)); // [1, 3, 4]

// Remove Duplicated from Array

const removeDuplicated = (arr) => [...new Set(arr)];
console.log(removeDuplicated([1, 2, 3, 3, 4, 4, 5, 5, 6])); // Result: [ 1, 2, 3, 4, 5, 6 ]

const removeDuplicate = (arr) =>
  Object.values(arr.reduce((a, b) => (a[b] ? a : { ...a, [b]: b }), {}));
console.log(removeDuplicate([1, 2, 3, 3])); // Result: [ 1, 2, 3, ]

// Swap variables or values

const swap = (a, b) => [b, a];
let a = 1,
  b = 2;
[b, a] = swap(a, b);
console.log(a, b); // 2, 1

// Numbers

// Generate random number

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random(1, 10)); // Result: 1 ~ 10

// Generate random number with a step

const random = (min, max, step = 1) =>
  Math.floor(Math.random() * (max - min + 1)) * step + min;
console.log(random(1, 10, 2)); // Result: 1 ~ 10 with step 2

// Number is even or not

const isEven = (num) => num % 2 === 0;
console.log(isEven(4)); // true

// Number is odd or not

const isOdd = (num) => num % 2 !== 0;
console.log(isOdd(4)); // false

// Find the factorial of a number

const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));
console.log(factorial(5)); // 120

// Find the sum of an array

const sum = (arr) => arr.reduce((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4])); // 10

// Find median of an array

const median = (arr) => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
console.log(median([1, 2, 3, 4])); // 2.5

// Find largest numbers

const findLargest = (arr) => arr.map((subArr) => Math.max(...subArr));
console.log(
  findLargest([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
); // [5, 27, 39, 1001]

// Find average of Numbers

const findAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(findAverage([1, 2, 3, 4])); // 2.5

// Find smallest numbers

const findSmallest = (arr) => arr.map((subArr) => Math.min(...subArr));
console.log(
  findSmallest([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
); // [1, 18, 32, 857]

// Find mode of an array

const mode = (arr) => {
  const counts = arr.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});
  const maxCount = Math.max(...Object.values(counts));
  return Object.keys(counts).filter((key) => counts[key] === maxCount);
};
console.log(mode([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3])); // ['a']

// Find the range of an array

const range = (arr) => Math.max(...arr) - Math.min(...arr);
console.log(range([1, 2, 3, 4])); // 3

// Pick a random element from an array

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
console.log(pick([1, 2, 3, 4])); // 2

// Map an array without .map()

const map = (arr, cb) => Array.from(arr, cb);
console.log(map([1, 2, 3, 4], (n) => n * 2)); // [2, 4, 6, 8]

// Empty an array without .splice()

const empty = (arr) => {
  arr.length = 0;
  return arr;
};
console.log(empty([1, 2, 3, 4])); // []

// Convert array to object

const toObject = (arr) => ({ ...arr });
console.log(toObject(["a", "b"])); // { 0: 'a', 1: 'b' }

// Find intersection of two arrays

const intersection = (arr1, arr2) => {
  const set = new Set(arr1);
  return arr2.filter((x) => set.has(x));
};
console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]

// Remove falsy values from an array

const compact = (arr) => arr.filter(Boolean);
console.log(compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34])); // [1, 2, 3, 'a', 's', 34]

// Rounding number to N decimal place

const round = (num, decimals = 0) => num.toFixed(decimals);
console.log(round(1.005, 2)); // 1.00

// String

// Reverse String

const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello")); // olleh

// Find Longest Word in a String

const findLongestWord = (str) =>
  str.split(" ").reduce((a, b) => (a.length > b.length ? a : b));
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // jumped

// Generate Title Case

const titleCase = (str) =>
  str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(titleCase("the quick brown fox")); // The Quick Brown Fox

// Is String Palindrome

const isPalindrome = (str) => str === str.split("").reverse().join("");
console.log(isPalindrome("madam")); // true

// Copy to Clipboard

const copyToClipboard = (text) => navigator.clipboard.writeText(text);
copyToClipboard("Hello World");

// Find a vowel in a string

const findVowel = (str) => str.match(/[aeiou]/gi);
console.log(findVowel("hello")); // ['e', 'o']

// Email validator

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
console.log(validateEmail('abc@aaa.co'); // true

// Validate only character and space

const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
console.log(validateName("abc")); // true
console.log(validateName("123")); // false

// Validate only number

const validateNumber = (number) => /^[0-9]+$/.test(number);
console.log(validateNumber("123")); // true
console.log(validateNumber("abc")); // false

// Casting values in arrays using map

const castArray = (arr) => arr.map(Number);
console.log(castArray(["1", "2", [3]])); // [1, 2, 3]

// Date & Object

// Check object is empty or not

const isEmpty = (obj) => Object.keys(obj).length === 0;
console.log(isEmpty({})); // true

// Get the current date

const getDate = () => new Date();
console.log(getDate()); // 2020-05-25T09:57:37.869Z

// Find the day of the week

const getDayName = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
};
console.log(getDayName(new Date())); // Friday

// Find the day of the year

const getDayOfYear = (date) => {
  const firstDay = new Date(date.getFullYear(), 0, 1);
  return Math.ceil((date - firstDay) / 86400000);
};
console.log(getDayOfYear(new Date())); // 182

// Find the number of days in a month

const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
console.log(getDaysInMonth(new Date())); // 31

// Find the current month

const getMonthName = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[date.getMonth()];
};
console.log(getMonthName(new Date())); // March

// Find the number of seconds until midnight

const getSecondsUntilMidnight = (date) =>
  (24 - date.getHours()) * 60 * 60 +
  (60 - date.getMinutes()) * 60 +
  (60 - date.getSeconds());
console.log(getSecondsUntilMidnight(new Date())); // 86400

// Log Time from Date

const logTime = (date) => date.toTimeString().slice(0, 8);
logTime(new Date()); // 09:57:37

const logTime = (date) => date.toLocaleTimeString("en-GB");
logTime(new Date()); // 09:57:37

// Format JSON output with spaces

const formatJSON = (json) => JSON.stringify(json, null, 2);
console.log(formatJSON({ a: 1, b: 2 }));

// Deep clone an object

const clone = (obj) => JSON.parse(JSON.stringify(obj));
console.log(clone({ a: 1, b: 2 })); // { a: 1, b: 2 }

// OR

const deepCopy = (obj, copy = {}) => {
  if (!obj || typeof obj !== "object") return obj;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) copy[key] = deepCopy(obj[key]);
  }
  return copy;
};

// Promises

// Wait for a promise to resolve

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
wait(1000).then(() => console.log("You'll see this after 1 second"));
await wait(1000); // Next line will be executed after 1 second

// Is function async

const isAsync = (fn) => fn.constructor.name === "AsyncFunction";
console.log(isAsync(async () => {})); // true

// Callback to Promise

const promisify =
  (fn) =>
  (...args) => {
    return new Promise((res, reject) =>
      fn(...args, (err, data) => (err ? reject(err) : res(data)))
    );
  };

// Promise retry

const retry = (fn, times = 3) => {
  return (...args) =>
    new Promise((resolve, reject) => {
      const attempt = (n) => {
        fn(...args)
          .then(resolve)
          .catch((err) => {
            if (n === times) return reject(err);
            attempt(n + 1);
          });
      };
      attempt(1);
    });
};

// Styling

// Generate a random color

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
console.log(getRandomColor()); // #f0f0f0

const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;
console.log(randomHex()); // #f0f0f0

// Convert to rem

const toRem = (px) => `${px / 16}rem`;
console.log(toRem(16)); // 1rem

// Styled Components get color from theme

// Off topic but very useful

const getPrimaryMain = props => props.theme.main

const Button = styled.button`
    color: ${getPrimaryMain};
    border: 2px solid ${getPrimaryMain};
`;

// Window & Dom

// Get selected text

const getSelectedText = () => window.getSelection().toString();
console.log(getSelectedText()); // Hello World

// Data Structures

// Create a stack

const Stack = () => {
  let data = [];
  return {
    push(item) {
      data.push(item);
    },
    pop() {
      return data.pop();
    },
    peek() {
      return data[data.length - 1];
    },
    get length() {
      return data.length;
    },
  };
};

// Create a queue

const Queue = () => {
  let data = [];
  return {
    push(item) {
      data.push(item);
    },
    pop() {
      return data.shift();
    },
    peek() {
      return data[0];
    },
    get length() {
      return data.length;
    },
  };
};

// Recursion

const range = (n) => {
  if (n === 0) return;
  console.log(n);
  range(n - 1);
};
console.log(range(5));

// Memoization (cache)

// Try the following code without memo and with memo.

const fib = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(40)); // Browser crash or timeout

const fib = (n, memo = {}) => {
  if (n < 2) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
console.log(fib(40)); // 102334155
