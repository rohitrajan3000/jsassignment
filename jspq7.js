let number = '929901022301030010001302010';
let Count = 0;

for (let i = 0; i < number.length; i++) {
    if (number[i] == '0') {
        Count++;
    }
}

console.log(Count);
