let sentence = 'Hello I am learning JavaScript';
let DubString = '';
for (let char of sentence) {
    if (DubString.indexOf(char) === -1) {
        DubString += char;
    }
}
console.log(DubString)