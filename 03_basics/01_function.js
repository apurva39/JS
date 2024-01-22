function fun1(var1) {
    return var1
}

const show = fun1(300)
console.log(show);

function fun2(...var1) {
    return var1
}

const show1 = fun2(300, 404, 3023, 230, 2393)
console.log(show1);
console.log(show1[4]);

const object1 = {
    name: "APURVA ANAND",
    email: "apurva@gmail.com",
    phone: 8340776554
}

//passing object in function

function objectFunction(newObject) {
    return `My name is ${newObject.name} and email is ${newObject.email}`
}

console.log(objectFunction(object1));

console.log(objectFunction({
        name: "Happy",
        email: "apurva39@gmail.com"
    }

));


//passing array to function

const arr = [100, 200, 300, 400, 500, 600]

function arrayFunction(i, tempArray) {
    return `printing the ${i} th element of  array : ${tempArray[i]}`
}

console.log(arrayFunction(2, arr));
console.log(arrayFunction(5, [7347, 357, 3, 34, 34, 34, 23, 23, 3, 2]));