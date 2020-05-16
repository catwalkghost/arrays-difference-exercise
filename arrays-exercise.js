/*
Given two arrays of integers (arr1,arr2).
Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), where their difference in value is as big as possible.
Again, you should find a pair of numbers, their difference in value is as small as possible.
Comment on why you chose your solution approach over other possible solutions.

Return the maximum and minimum difference values by an array:
[ max difference, min difference ]
 */

const arr1 = [3,10,5]

function max_difference(arr) {
    let max = -1;
    let temp;
    for (let i = 0; i < arr.length - 1; i++)
    {
        temp = Math.abs(arr[i] - arr[i + 1]);
        max = Math.max(max, temp);
    }
    return max;
}

console.log(max_difference(arr1)) // -> 7