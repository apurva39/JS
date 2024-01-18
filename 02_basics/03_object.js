const symbol1 = Symbol("symbol1 value");

const obj = {
    name: "APURVA ANAND",
    roll: 2002683,
    email: "apurvanand101@gmail.com",
    phone: 8340776554,
    gender: "M",
    ["address"]: "Jarmundi Jharkhand",
    [symbol1]: "its value from symbol"

}
console.log(obj);
console.log(obj.email); //it has some limitation method to access 

//new and efficient method to access

console.log(obj["phone"]);
console.log(obj["address"]);
console.log(obj[symbol1]);

obj.greeting = function() {
    console.log("my name is: ");
}

console.log(obj.greeting());

obj.greeting1 = function() {
    console.log(`my name is: ${this.name}`);
}

console.log(obj.greeting1())