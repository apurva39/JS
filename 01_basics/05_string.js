let firstName = "Apurva"
let secondName = "Anand"

console.log(firstName + secondName); //avoid this type of string concatenation

console.log(`Hello my name is ${firstName} ${secondName}`); //use latest version of string concatenation

console.log(firstName[3]);
console.log(firstName.charAt(2));
console.log(firstName.indexOf('a'));


const newString = firstName.substring(0, 4)
console.log(newString);

const anotherString = firstName.slice(-7, 2)
console.log(anotherString);