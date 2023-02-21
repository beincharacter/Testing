// Verifying an Alien Dictionary



var isAlienSorted = function(words, order) {
    let index = {};
    for (let i = 0; i < order.length; i++) {
        index[order[i]] = i;
    }
    for (let i = 1; i < words.length; i++) {
        let word1 = words[i - 1];
        let word2 = words[i];
        let n = Math.min(word1.length, word2.length);
        for (let j = 0; j < n; j++) {
            if (word1[j] != word2[j]) {
                if (index[word1[j]] > index[word2[j]]) {
                    return false;
                }
                break;
            }
        }
        if (word1.length > word2.length && word1.startsWith(word2)) {
            return false;
        }
    }
    return true;
};


let words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz";
console.log(isAlienSorted(words, order));