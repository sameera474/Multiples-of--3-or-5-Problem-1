
let naturalNumbers = [];
let sum = 0;

for (let i = 1; i <1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        naturalNumbers.push(i);        
    }
}

for (let i = 0; i < naturalNumbers.length; i++) {
    sum += naturalNumbers[i];
}

console.log(sum);