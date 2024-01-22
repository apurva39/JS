// Immediately Invoked Function Expressions (IFEE)

function chai() {
    console.log(`Database Connected`)
}
chai();

//instead of writing like this you can we iife 

(function chai1() {
    console.log(`Database Connected using iife`)
})()


//syntax of iife 
//      (function expression)()