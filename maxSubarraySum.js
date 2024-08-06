/** 
Sliding Window - maxSubarray Sum

Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxsubarraySum([100,200,300,4001, 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,201, 4) // 39
maxSubarraySum([-3,4,0,-2,6, -11, 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,11,2) // 5
maxSubarraySum([2,31, 3) // null

Constraints:
Time Complexity - O(N)
Space Complexity - 0(1)
**/

function maxsubarraySum(arr, num){
  if(arr.length < num) return null
  let slide = []
  console.log(slide)
  let i = 0
  let sum = 0
  let temp = 0
  for(i ; i< num; i++){
  slide.push(arr[i]);
    sum += arr[i]   
  }
  let j = num;
  temp = sum;
  for(j; j< arr.length; j++){
    temp = temp - arr[j - num ] + arr[j]
    sum = Math.max(sum, temp)   
  }
return sum
}

console.log(maxsubarraySum([100,200,300,400], 2), 1)
console.log(maxsubarraySum([1,4,2,10,23,3,1,0,20], 4), 2)
console.log(maxsubarraySum([-3,4,0,-2,6,-1], 2), 3)
console.log(maxsubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))
console.log(maxsubarraySum([2,3],3))

