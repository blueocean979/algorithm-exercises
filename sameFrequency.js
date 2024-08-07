/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Sample Input:
sameFrequency (182, 281) // true 
sameFrequency (34,14) // false 
sameFrequency (3589578, 5879385) // true 
sameFrequency (22,222) // false
**/
function createFrequencyDict(int) {
  const dict = {}
  while(int > 0){
     let digit = int % 10
    dict[digit] ? dict[digit] += 1 : dict[digit] = 1
    int = Math.floor(int/10)
  }
 return dict
}
function sameFrequency(int1, int2) {
  const dict1 =  createFrequencyDict(int1)
  const dict2 =  createFrequencyDict(int2)
  console.log(dict1, dict2)
  return JSON.stringify(dict1) === JSON.stringify(dict2)

}
console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))