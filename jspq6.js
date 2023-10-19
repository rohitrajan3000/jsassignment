let setA = [20, 40, 10, 8, 15, 25]

let setB = [100, 3, 7, 9, 10, 15]

setA.sort(function(a, b){return a - b});
setB.sort(function(a, b){return a - b});

let aa = setA[setA.length-1]
let bb = setB[setB.length-1]
console.log(aa+bb)