const marvel_heros =["thor","Ironman","spiderman"]
const dc_heros =["superman", "flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const all_heros =marvel_heros.concat(dc_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_heros);

// spread

// const all_new_heros =[...marvel_heros, ...dc_heros]; //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_new_heros);

// const another_array =[1,2,3,[4,5,6,[7,8]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

 // Array ---> isArray --- from ---- of 
console.log(Array.isArray("virendra"));
console.log(Array.from("virendra"));
console.log(Array.from({
    name:'virendra kanojiya'
}));
let score1=100,score2=200, score3=300
console.log(Array.of(score1,score2,score3));


