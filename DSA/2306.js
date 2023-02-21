let ideas = ["coffee","donuts","time","toffee"];

let distinctNamesCounts = 0;

for(let i = 0; i < ideas.length; i++) {
    let name1 = ideas[i];
    for(let j = 0; j < ideas.length; j++) {
        if ( i == j) {
            continue;
        }
        let name2 = ideas[j];
        newName1 = name1.replace(name1[0], name2[0]);
        newName2 = name2.replace(name2[0], name1[0]);
        if(ideas.includes(newName1) || ideas.includes(newName2)) {
        } else {
            distinctNamesCounts++
        }
    }
}

console.log(distinctNamesCounts)