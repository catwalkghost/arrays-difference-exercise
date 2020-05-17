/*
Given two arrays of integers (arr1,arr2).
Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), where their difference in value is as big as possible.
Again, you should find a pair of numbers, their difference in value is as small as possible.
Comment on why you chose your solution approach over other possible solutions.

Return the maximum and minimum difference values by an array:
[ max difference, min difference ]
 */

// Defining arrays
const arr1 = [3,10,5]
const arr2 = [20,7,15,8]


// Maximum difference
function maxDiff(arr) {
    let max = -1
    let temp
    // iterating through an array using for loop
    for (let i = 0; i < arr.length - 1; i++)
    {
        temp = Math.abs(arr[i] - arr[i + 1])
        // if i is greater than array's length, iteration stops and max is returned
        max = Math.max(max, temp)
    }
    return max
}

console.log(maxDiff(arr1)) // -> 7
console.log(maxDiff(arr2)) // -> 13

// Minimum difference
function minDiff(array) {
    // First, the array is sorted. This is not strictly necessary, but might be useful on its own
    const sortedArray = [...array].sort((a, b) => a - b)

    // The difference is initialised as the largest item in the array
    let difference = sortedArray[sortedArray.length - 1]


    sortedArray.map((currentValue, index, array) => {
        const currentMinDifference = Math.abs(currentValue - array[index + 1]);

        if (currentMinDifference < difference) {
            difference = currentMinDifference;
        }
    });

    return difference;
}

console.log(minDiff(arr1)) // -> 2
console.log(minDiff(arr2)) // -> 1
