let A =123;
var b ='asc';
const c = "123";

if(true){
    let A =1234;
    // var b = 345; 
    // const c =  3452;
    // console.log(A,b,c);
    
}
// console.log(A, b, c);

// function one(){
//     const username ="virendra"
//     function two (){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(this.website);
    
//     two()
// }
// one()
addOne(2)
function addOne(num){
   return num + 1;
}
// addTwo(8) //Cannot access 'addTwo' before initialization at Object.
const addTwo = function(num){
    return num +1;
}
addTwo(9)