//Primitive
//7 types : String Number Boolean null Undefined Symbol BigInt

const name = "Apurva Anand"
let phoneNumber = 8340776554
let isLoggedIn = true
let havingMoney = null
let salary;


let symbol1 = Symbol('123');
let symbol2 = Symbol('123');

console.log(typeof name);
console.log(typeof phoneNumber);
console.log(typeof isLoggedIn);
console.log(typeof havingMoney);
console.log(typeof salary);
console.log(typeof symbol1);


console.log(symbol1 === symbol2);



// Reference (Non primitive)

// Array, Objects, Functions
let array1 = ["212", "2122", "21212"];
console.log(array1);

let object1 = {
    Name: "Apurva",
    roll: "2002683",
}

console.log(object1);
console.log(typeof object1);

const myFunction = function() {
    console.log("Hello world");
}

myFunction();