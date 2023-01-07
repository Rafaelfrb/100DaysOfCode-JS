/*Given 2 sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
Constraints: nums1.length == m + n
nums2.length == n

example:
Input: 
nums 1 = [1, 2, 3, 0, 0, 0], m=3
nums 2 = [2, 5, 6], n=3

output: [1, 2, 2, 3, 5, 6] */

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

function mergeSortedArray (a, b) {
    for(let i = 0; i <= a.length; i++){
        if(a[i] == 0){
            a.splice(i);
        }
    }
        let merged = [...a, ...b];
        let result = merged.sort((a, b) => a - b);
        console.log(result);
}

mergeSortedArray(nums1, nums2);