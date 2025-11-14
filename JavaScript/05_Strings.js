const name = "virendra";
const repoCount = 10;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Hello my name is virendra and my repo count is 10

const gameName = new String("virendra"); 

// console.log(gameName[0]); //  v
// console.log(gameName.__proto__);  // {}

// console.log(typeof(gameName)); // object
// console.log(gameName.length); // 8
// console.log(gameName.toLocaleUpperCase()); // VIRENDRA

// console.log(gameName.charAt(2)); // r
// console.log(gameName.indexOf("d")); // 5
// console.log(gameName.includes("d")); // true --> boolean type

// const newString = gameName.substring(0,4);  // it dose not work for negative value
// console.log(newString); // vire


const anotherString = gameName.slice(-8,4);//it also take negative value
console.log(anotherString); // vire


const newStringOne = "   virendra.    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/youtube%20Js"
console.log(url.replace("%20", "-")); //https://google.com/youtube-Js
 console.log(gameName.split('-')); // ['virendra']

 



