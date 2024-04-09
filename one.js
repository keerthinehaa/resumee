let numbers = [];

function isDuplicate(num) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === num) {
            return true;
        }
    }
    return false;
}

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Enter a number between 10 and 100:"));
    if (num >= 10 && num <= 100 && !isDuplicate(num)) {
        numbers.push(num);
        console.log(num);
    }
}