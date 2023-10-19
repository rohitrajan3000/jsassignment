let numbers = [10, 15, 20, 76, 100, 1000, 220, 25, 110, 101];
let count = 0;

for (let number of numbers) {
    let numberString = number.toString(); 
    for (let digit of numberString) {
        if (digit == '0') {
            count++;
        }
    }
}

console.log(count);