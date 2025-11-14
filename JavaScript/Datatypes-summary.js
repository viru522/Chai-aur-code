// primitive 

// 7 types : String, Number, Boolearn, null, undefined, Symbol,BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn =false;
const outsideTemp =null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');


const BigNumber =12345690098n

console.log(BigNumber);
console.log(typeof(BigNumber));


console.log(id === anotherId);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "virendra",
    age : 24.5
}

const myfunction = function(){
    console.log("hello");
    
}
console.log(typeof(myfunction));


//++++++++++++++++++++++++++++++++++++++
// stack (Primitive), Heap (Non-primitive)

//Stack 
let myYoutubeName = "virendradotcom"
let anotherName = myYoutubeName
anotherName = "viru-blogs" 

console.log(myYoutubeName);
console.log(anotherName);

// Heap 

let UserOne ={
    email : "user@gmail.com",
    upi : "user@ybl"
}

let UserTwo = UserOne;

UserTwo.email = "virendra@gmail.com"

console.log(UserOne.email);
console.log(UserTwo.email);
