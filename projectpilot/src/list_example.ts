// a. for loop
let tens: number[] = []
const numbers: number[] = [1, 2, 4, 5]

for (let index = 0; index < numbers.length; index++) {
    const nuumber = numbers[index]
    tens.push(nuumber*10)
}

console.log(tens)

// b. #array.forEach

tens = []

numbers.forEach(function (number) {
    tens.push(number * 10)
});

console.log(tens)

// c. #array.map

function test (number: number): number {
    return number * 10
}

tens = numbers.map(test)

console.log(tens)

// d. #arra.map with arrow function

tens = numbers.map((number) => number * 10)

console.log(tens)