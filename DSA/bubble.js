//bubble sort

// function bubbleSort(arr) {
//     let noSwaps;
//     for (let i = arr.length; i > 0; i--) {
//         noSwaps = true;
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j + 1] < arr[j]) {
//                 // Swap
//                 [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//                 // Make 'noSwaps' false
//                 noSwaps = false;
//             }
//         }
        
//         if (noSwaps) {
//             break;
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([2,4,3,1,6,9,5]))

// 2. selection sort

// function selectionSort(arr) {
//     let min;
//     for(let i=0; i<arr.length; i++) {
//         let min = i;
//         for(let j=i+1; j<arr.length; j++) {
//             if(arr[j] < arr[min]) {
//                 min = j;
//             }
//         }

//         if(min != i) {
//             [arr[i], arr[min]] = [arr[min], arr[i]]
//         }
//     }
//     return arr
// }

// console.log(selectionSort([2,4,3,1,6,9,5]))

// 3. insertion sort


// function insertionSort(arr) {
//     let curr, j;
//     for (let i = 0; i < arr.length; i++) {
//         curr = arr[i];
//         j = i-1;
//         for ( ; j >= 0 && arr[j]> curr; j--) {
//             arr[j+1] = arr[j];
//             // j--;
//         }

//         arr[j+1] = curr;
//     }

//     return arr
// }

// console.log(insertionSort([2,4,3,1,6,9,5]))

// 4. merge sort 

// function merge(arr1, arr2) {
//     // Make a new array, and 2 pointers to keep track of elements of arr1 and arr2     
//     let res = [],
//         i = 0,
//         j = 0;
    
//     // Loop until either arr1 or arr2 becomes empty
//     while (i < arr1.length && j < arr2.length) {
//         // If the current element of arr1 is lesser than that of arr2, push arr1[i] and increment i         
//         if (arr1[i] < arr2[j]) {
//             res.push(arr1[i]);
//             i++;
//         } else {
//             res.push(arr2[j]);
//             j++;
//         }
//     }

//     // Add the rest of the remining subarray, to our new array
//     while (i < arr1.length) {
//         res.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) {
//         res.push(arr2[j]);
//         j++;
//     }
//     return res;
// }

// function mergeSort(arr) {

//     if (arr.length < 2) return arr

//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));

//     return merge(left, right);
// }


// console.log(mergeSort([9,52,7,8,62,5]))

// let nums = [-1,0,1,2,-1,-4];

// let outputArr = [];

// for(let i=0, j = arr.length-1; i<j; i++, j++){
//     for(let k=i+1; k<j; k++) {
//         if()
//     }
// }

// let nums = [-1,0,1,2,-1,-4];
// let outputArr = [];
// let set = new Set();
// for(let i=0; i<nums.length-1; i++) {
//     if(set.has(nums[i])) continue;
//     let map = new Map();
//     for(let j=i+1; j<nums.length; j++) {
//         let target = -nums[i]-nums[j];
//         if(map.has(nums[j])) {
//             outputArr.push([nums[i], nums[j], target]);
//             set.add(nums[i]);
//             set.add(nums[j]);
//             set.add(target);
//         } else {
//             map.set(target, 1);
//         }
//     }
// }
// console.log(outputArr);


let num = 109000;

// while(x>0) {
//     let temp = x;
//     r = temp%10;
    
// }
let num2;

if (num<0){ 
    num2 = parseInt(num.toString().split('').reverse().join(''));
    console.log(-num2, typeof num2)
}
else {
    num2 = parseInt(num.toString().split('').reverse().join(''));
    console.log(num2, typeof num2)
}
