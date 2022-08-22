const firstRepeatedCharacter = (array) => {
  let MAP = new Map();
  for (let i = 0; i < array.length; i++) {
    if (MAP.get(array[i]) == undefined) {
      MAP.set(array[i], 1);
    } else if (MAP.get(array[i])) {
      const numOfRepeating = MAP.get(array[i]);
      MAP.set(array[i], numOfRepeating + 1);
    }
  }
  const GreatestRe = Math.max(...MAP.values());

  for (let item of MAP) {
    if (item[1] == GreatestRe) return item[0];
  }

  return GreatestRe;
};
// console.log(firstRepeatedCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));

const firstRepeatedCharacterTwo = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        return array[i];
      }
    }
  }
  return "No Repeated Characters!";
};
// console.log(firstRepeatedCharacterTwo([2, 5, 5, 2, 3, 5, 1, 2, 4]));

const firstRepeatedCharacterThree = (array) => {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] == undefined) {
      map[array[i]] = true;
    } else if (map[array[i]] == true) {
      return array[i];
    }
  }
  return undefined;
};
// console.log(firstRepeatedCharacterThree([2, 5, 5, 2, 3, 5, 1, 2, 4])); // DIFFRENT RESULT

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  if (nums.length == 1) {
    if (nums[0] > 1) {
      return 1;
    } else if (nums[0] == 0) {
      return nums[0] + 1;
    } else if (nums[0] < 0) {
      return 1;
    } else if (nums[0] == 1) return 2;
  }
  const sortedArray = nums.sort((a, b) => a - b);
  let smallestPositiveInteger = 1;
  let stop = false;
  while (stop == false) {
    let isHere = binarySearch(sortedArray, smallestPositiveInteger);
    if (isHere == -1) stop = true;
    else smallestPositiveInteger++;
  }
  return smallestPositiveInteger;
};

function binarySearch(array, target) {
  if (array.length == 1 || array.length == 0) {
    return array;
  }
  let start = 0,
    end = array.length - 1;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] > target) {
      end = middle - 1;
    }
    if (array[middle] < target) {
      start = middle + 1;
    }
    if (array[middle] == target) {
      return middle;
    } //T
  }
  return -1;
}
// console.log(firstMissingPositive([2, 3, 4]));

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sumS = 0;
  let sumT = 0;
  for (let i = 0; i < t.length; i++) {
    sumT += t[i].charCodeAt();
    if (!(i == t.length - 1)) {
      sumS += s[i].charCodeAt();
    }
  }
  const chr = String.fromCharCode(sumT - sumS);
  return chr;
};

// console.log(findTheDifference(w, y));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in map) {
      console.log(target - nums[i] in map);
      return [map[target - nums[i]], i];
    } else {
      map[nums[i]] = i;
      console.log(map);
    }
  }
};

// console.log(twoSum([3, 3, 5, 3], 6));

// console.log("a".charCodeAt(0));
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let mapS = {},
    mapT = {};
  for (let i in s) {
    if (mapS[s[i]] == undefined) {
      mapS[s[i]] = 1;
    } else {
      mapS[s[i]] = mapS[s[i]] + 1;
    }
    if (mapT[t[i]] == undefined) {
      mapT[t[i]] = 1;
    } else {
      mapT[t[i]] = mapT[t[i]] + 1;
    }
  }

  for (let i of s) {
    if (mapS[i] !== mapT[i]) return false;
  }
  return true;
};
// console.log(isAnagram("a", "ab"));

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let RESULT = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) RESULT -= roman[s[i]];
    else RESULT += roman[s[i]];
  }
  return RESULT;
};

// console.log(romanToInt("MCMXCIV"));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let thePassingCondition = nums.length / 3;
  let map = {};
  for (let i in nums) {
    let currentVal = nums[i];
    if (map[currentVal] == undefined) map[currentVal] = 1;
    else map[currentVal] = map[currentVal] + 1;
  }
  map = Object.entries(map);
  let RESULT = [];
  for (let i = 0; i < map.length; i++) {
    let curentNode = map[i];
    if (curentNode[1] > thePassingCondition) RESULT.push(+curentNode[0]);
  }
  return RESULT;
};

// majorityElement([3, 2, 3]);

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    const nums2Ele = nums2.indexOf(nums1[i]);
  }
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let mapS = {};
  let mapT = {};
  for (let i in s) {
    let currentValS = s[i];
    let currentValT = t[i];
    if (mapS[currentValS] == undefined) {
      mapS[currentValS] = currentValT;
    } else {
      if (mapS[currentValS] !== currentValT) return false;
    }
    if (mapT[currentValT] == undefined) {
      mapT[currentValT] = currentValS;
    } else {
      if (mapT[currentValT] !== currentValS) return false;
    }
  }
  return true;
};

// console.log(isIsomorphic("paper", "fofle"));

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let comparingString = "";
  let arrayOfLengths = [];
  const set = new Set();
  let i = 0;
  while (i < s.length) {
    let prevLength = set.size;
    set.add(s[i]);
    if (prevLength !== set.size) {
      arrayOfLengths.push(prevLength);
      set.clear();
    }
    i++;
  }

  console.log(set);
  // return Math.max(...arrayOfLengths);
};
// console.log(lengthOfLongestSubstring("pwwkew"));
// // console.log("abcda".slice(0, "abcda".length - 1).length);
// let set = new Set();
// console.log(set.add("a"));
// console.log(set.add("a"));
// set.clear();
// console.log(set);

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = {};
  let a = 0;
  let b = 1;
  while (b <= nums2.length) {
    let firstEle = nums2[a];
    let secondEle = nums2[b];
    if (secondEle == undefined) {
      a++;
      b = a + 1;
      continue;
    }
    if (secondEle > firstEle) {
      map[firstEle] = secondEle;
      a++;
      b = a + 1;
    } else {
      map[firstEle] = -1;
      b++;
    }
  }
  let result = [];
  for (let i in nums1) {
    let currentEle = nums1[i];
    if (map[currentEle] == undefined) {
      result.push(-1);
    } else {
      result.push(map[currentEle]);
    }
  }
  return result;
};

// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) return num;
  let strNum = num.toString();
  let sum = 0;
  while (strNum.length > 1) {
    sum = strNum.split("").reduce((a, b) => +a + +b);
    if (sum.toString().length > 1) {
      strNum = sum.toString();
    } else {
      return sum;
    }
  }
};
// console.log(addDigits(38));

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.split("").reverse().join("") == s) return s.length;
  let map = {};
  for (let i in s) {
    let currentEle = s[i];
    if (map[currentEle] == undefined) {
      map[currentEle] = 1;
    } else {
      map[currentEle] = map[currentEle] + 1;
    }
  }
  console.log(map);
  let containsOne = false;
  let length = 0;

  for (let i in map) {
    let value = map[i];
    if (value % 2 == 0) {
      length += value;
    } else if (!containsOne) {
      length += value;
      containsOne = true;
    } else if (value % 2 == 1 && value > 2) {
      length += value - 1;
    }
  }
  return length;
};
// console.log(longestPalindrome("abbac")); //5

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  if (!num.toString().split("").includes("6")) return num;
  num = num.toString().split("");
  for (let i = 0; i < num.length; i++) {
    if (num[i] == "6") {
      num[i] = "9";
      return +num.join("");
    }
  }
};

// console.log(maximum69Number(999));

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = {};
  let result = "";
  for (let i in s) {
    let currentChar = s[i];
    if (map[currentChar] == undefined) {
      map[currentChar] = 1;
    } else {
      map[currentChar] = map[currentChar] + 1;
    }
  }
  console.log(map);
  const sortedMap = Object.fromEntries(
    Object.entries(map).sort((a, b) => b[1] - a[1])
  );

  // console.log(sortedMap);
  for (let i in sortedMap) {
    const filledArray = new Array(sortedMap[i]).fill(i);
    result += filledArray.join("");
  }
  return result;
};

// console.log(frequencySort("omara"));
