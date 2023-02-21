

var checkInclusion = function (s1, s2) {
  let s1Count = new Array(26).fill(0);
  let s2Count = new Array(26).fill(0);
  let s1Length = s1.length;
  let s2Length = s2.length;
  
  if (s1Length > s2Length) {
      return false;
  }
  
  for (let i = 0; i < s1Length; i++) {
      s1Count[s1.charCodeAt(i) - 97]++;
      s2Count[s2.charCodeAt(i) - 97]++;
  }
  
  for (let i = s1Length; i < s2Length; i++) {
      if (s1Count.toString() === s2Count.toString()) {
          return true;
      }
      
      s2Count[s2.charCodeAt(i) - 97]++;
      s2Count[s2.charCodeAt(i - s1Length) - 97]--;
  }
  
  return s1Count.toString() === s2Count.toString();
};
;

console.log(checkInclusion('prosperity', 'properties'))