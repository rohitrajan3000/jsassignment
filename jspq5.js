let arr = [1, 3, 5, 7, 9]
let tem = [];
for (let i = 1; i <= 10; i++) {
    if (!arr.includes(i)) {
       tem.push(i);
    }
}
console.log(tem)
