const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// arr.forEach(function(val) {
//     console.log(val);
// })


// //using arrow function

// arr.forEach((val) => {
//     console.log(val);
// })


const arr1 = ["ap", "an", "app", "ss"]

arr1.forEach((key, index, array) => {
    console.log(key, index, array);

})


const myObj = [{
        name: "APURVA ANAND",
        roll: 2002683
    },
    {
        name: "APURVA ",
        roll: 2002681
    },
    {
        name: "ANAND",
        roll: 2002682
    }

]

myObj.forEach((item) => {
    console.log(item.name);

})