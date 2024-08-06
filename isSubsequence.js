/** 
Multiple Pointers - isSubsequence
Write a function called is Subsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true 
isSubsequence('sing', 'sting'); // true 
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)
Space Complexity - 0(1)

**/

function isSubsequence(firstStr, secondStr) {
  let i = 0
  let j = 0
  while (i < firstStr.length) {
    if (j >= secondStr.length) return false
    if (firstStr[i] === secondStr[j]) {
      i += 1;
      j += 1
    } else {
      j += 1
    }
  }
  return true
}

console.log(isSubsequence('hello', 'hello world'), 1)
console.log(isSubsequence('sing', 'sting'), 2)
console.log(isSubsequence('abc', 'abracadabra'), 3)
console.log(isSubsequence('abc', 'acb'), 4)
console.log(isSubsequence('worildsss', 'hello world'), 5)
console.log(isSubsequence('stttpo', 'hesltott po'), 6)
