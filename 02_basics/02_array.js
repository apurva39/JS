const arr1 = ["apurva", "anand", "happy"]

const arr2 = ["lucky", "nicky", "sippy", "bicky"]
    // arr1.push(arr2)
    // console.log(arr1);


// const newArr = arr1.concat(arr2)
// console.log(newArr);

const newArr2 = [...arr1, ...arr2]
console.log(newArr2);


const arr3 = ["apurva", "anand", "happy", ["ttds", "ttyetad"],
    ["32", "23", [2, 3]]
]

const newArr3 = arr3.flat()
console.log(newArr3);