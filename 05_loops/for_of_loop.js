// const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8]

// for (const num of arr) {
//     console.log(num);
// }


// const greetings = "Hello world!"
// for (const greet of greetings) {
//     //console.log(`Each char is ${greet}`)
// }

const map = new Map();
map.set("name", "Apurva")
map.set("roll", 2002683)
map.set("email", "apurva@gmail.com")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }


for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}