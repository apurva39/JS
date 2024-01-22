// const myObj = Object()

// myObj.email = "apurvaanand101@gmail.com"
// myObj.phone = 8340776554

// console.log(myObj);

// const nestedObj = {
//     email: "ap@gmail.com",
//     fullName: {
//         firstName: "Apurva",
//         secondName: "Anand",

//     },
//     address: {
//         home: {
//             village: {
//                 panchayat: "Jarmundi",

//                 postOffice: 814141,

//             }
//         }

//     }
// }

// console.log(nestedObj.address.home.village["panchayat"]);

// const arr = [{
//         id: 1,
//         name: "apurva"
//     },
//     {
//         id: 2,
//         name: "anand"
//     },
//     {
//         id: 3,
//         name: "ap"
//     },
//     {
//         id: 4,
//         fullName: {
//             firstName: "happy",
//             lastName: "kumar",
//             newArr: [{
//                     roll: 39,
//                     isLoggedIn: true
//                 },
//                 {
//                     roll: 40,
//                     isLoggedIn: false
//                 },
//             ]
//         }
//     },
// ]

// console.log(`My name is ${arr[3].fullName.firstName}  ${arr[3].fullName.lastName}`);
// console.log(arr[3].fullName.newArr[1].roll);



//+++++++++++++ adding two objects++++

const obj1 = {
    fathersName: "kokil mandla",
    mothersName: "pooname kumari",
    famiyName: "Happy",
    familyMembers: 14

}
const obj2 = {
    address: "jarmundi",
    post: "jarmundi",
    dist: "dumka"

}

const obj3 = {...obj1, ...obj2 }
console.log(obj3);

const obj4 = Object.assign(obj1, obj2)
console.log(obj4);



// destructure of objects
const { dist: district } = obj2
console.log(district);