// const userEmail ='vire@virendra.in';
const userEmail = [];
if (userEmail) {
    console.log("user is loggedIn");
}
else {
    console.log("Don't have a user email");

}

// false Values
// false, 0, -0, BigInt 0n, "", underfined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");

}

false == 0 // true
false == "" // true
0 == "" // true


// Nullish Coalesing Operator (??): null undefined
// let val1;
// // val1= 5??10; //5
// // val1= null??10; // 10
// // val1 = undefined  ?? 10; // 10
// val1 = null ?? 10 ?? 20; // 10
// console.log(val1);

// Terniary Operator
// condition ? (true)statement1 : (false)statement2; 

const iceTeaPrice = 100;
iceTeaPrice<= 80 ? console.log("less than 80"): console.log("more than 80");


