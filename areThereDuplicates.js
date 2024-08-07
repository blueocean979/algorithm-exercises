/**
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Examples:
areThereDuplicates(1, 2, 3) // false areThereDuplicates(1, 2, 2) // true areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
**/

// Frequency Counter
//Time - O(n)
function areThereDuplicates() {
  // console.log(...arguments)
  const args = [...arguments]
  if (!args.length) return false
  const frequencyDict = {}
  let i = 0
  for (i; i < args.length; i++) {
    if (frequencyDict[args[i]]) return true
    else {
      frequencyDict[args[i]] = 1
    }
  }
  return false
}

// Multiple pointers
// Time - O(n log n)
function areThereDuplicates2() {
  const args = [...arguments]
  if (!args.length) return false
  args.sort((a,b) => a-b)
  let left = 0
  let right = 1
  while (right <= args.length - 1) {
    console.log(args[left], args[right], '*')
    if (args[left] === args[right]) return true
    else {
      left += 1;
      right += 1;
    }
  }
  return false
}

// const res = areThereDuplicates(1,2,3,4,3)
// const res = areThereDuplicates('a', 'b', 'c', 'a')
// const res = areThereDuplicates(1, 2, 2)
// const res = areThereDuplicates(1,2,3)
const res = areThereDuplicates('s', 'p', '4', 't', '4', '8',)
// const res2 = areThereDuplicates2('a', 'b', 'c', 'd', 'e', 'e')
// const res2 = areThereDuplicates2(2, 1, 3,1)
const res2 = areThereDuplicates2('s', 'p', '4', 't', '4', '8')


console.log(res, 'result')
console.log(res2, 'result 2')