
// var totalFruit = function(fruits) {
//     let maxBaskets = 2;
//     let maxFruits = 0;
//     let fruitsObj = {};

//     for(let i = 0; i < fruits.length; i++) {
//         let currFruit = fruits[i];
//         if(fruitsObj[currFruit]) {
//             fruitsObj[currFruit] += 1;
//         } else {
//             fruitsObj[currFruit] = 1;
//         }
//     }
//     console.log(fruitsObj);

//     let sortedFruitsObj = Object.values(fruitsObj).sort(function(a, b) {
//         return b - a;
//     });

//     console.log(sortedFruitsObj)

//     for(let j = 0; j < maxBaskets; j++) {
//         maxFruits += sortedFruitsObj[j]
//     }

//     return maxFruits;
// };

var totalFruit = function(fruits) {
    let left = 0, right = 0, count = {}, maxFruits = 0;
    while (right < fruits.length) {
        count[fruits[right]] = (count[fruits[right]] || 0) + 1;
        while (Object.keys(count).length > 2) {
            count[fruits[left]]--;
            if (count[fruits[left]] === 0) {
                delete count[fruits[left]];
            }
            left++;
        }
        maxFruits = Math.max(maxFruits, right - left + 1);
        right++;
    }
    return maxFruits;
};


console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]))