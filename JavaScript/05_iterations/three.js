// for of loop
// [{},{},{}]
// ["","",""]
const arr = [1,2,3,34,5,3]
for (const e of arr) {
    // console.log(e);
    
}

const greetings = "hello world";
for (const greet of greetings) {
    if (greet==" ") {
      continue;
    }
    // console.log(`Each char is ${greet} `);
    
}

// Maps

const map = new Map();

map.set("IN","India" )
map.set("FR","France" )
map.set("CH","China" )
map.set("USA","United State of Amercia" )
console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}