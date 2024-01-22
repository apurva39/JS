function addTwoNumber(num1, num2) {
    return num1 + num2
}

const sum = addTwoNumber(3, 4)
console.log(sum);



//method 1

const addTwoNumber = (num1, num2) => {
    return num1 + num2
}

console.log(addTwoNumber(10, 10));


//method 2

const addTwoNumber1 = (num1, num2) => num1 + num2
console.log(addTwoNumber1(12, 3));



//method 3

const addTwoNumber2 = (num1, num2) => (num1 + num2)
console.log(addTwoNumber2(12, 23));


//passing boject in arrow function

const addTwoNumber3 = () => ({ name: "Apurva", email: "apurva39@gmail.com" })
console.log(addTwoNumber3());