// let str = "shubham";

// let letter;
// let count = 0;
// let exeminedLetters = []

// for(let i=0; i<str.length; i++) {
//     letter = str[i]; // s
//     exeminedLetters.push(letter)
//     for(let j=i+1; j<str.length; j++) {
//         if(exeminedLetters.includes(letter)){
//             break
//         }
//         if(letter === str[j]) count++;
//     }
//     console.log(letter, count);
// }

// let arr = [ 3 , 5 ,11 , 65 , 98, 43, 41 ]
// let findNum = 102
// let flag = true;

// for(let i=0; i< arr.length; i++){
//     if(findNum == arr[i]) {
//         console.log(i);
//         flag = false
//         break;
//     }
// }
// if(flag) console.log(-1)



function sumOfTen(n) {
    if (n == 0) return 0;
    return n + sumOfTen(n-1);
}

let n = 10;
// console.log(typeof(n))
console.log(sumOfTen(n));