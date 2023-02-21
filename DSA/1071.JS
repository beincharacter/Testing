var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";
    let outputStr = "";
    for (let i = 1; i <= str2.length; i++) {
        if (str2.length % i !== 0) continue;
        let candidate = str2.substring(0, i);
        if (str1.split(candidate).join("") === "" && str2.split(candidate).join("") === "") {
            outputStr = candidate;
        }
    }
    return outputStr;
};


let str1 = 'ABABABABAB'
let str2 = 'ABAB'

console.log(gcdOfStrings(str1, str2));