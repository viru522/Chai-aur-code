//if 
// const isUserloggedIn = true
// if(isUserloggedIn){
// console.log('user logged In');

// }
// <, >, <=, >=, ==, !=, === 

// if(2=="2"){
//     console.log('normal checking');
    
// }
// if(3<2){
//     console.log('greater sign');
    
// }
// if(3>2){
//     console.log('less sign');
    
// }
// if(2===2){
//     console.log('It checking datatype also');
    
// }
// if(3<=2){
//     console.log('greater and equal');
    
// }
// if(3>=2){
//     console.log('less and equal');
    
// }

// Temperature
// const Temperature = 41;
// if(Temperature< 50){
//     console.log("less than 50");   
// }
/*
// scope
// const score =200;
// if(score > 100){
//     let power ="fly";
//     console.log(`User power: ${power}`);
// }
// // console.log(`User power: ${power}`);
*/

 //short handle notation
//  const balance = 1000; 
//  not a good practice
//  if(balance>500) console.log("test"), console.log("texxt");

// if(balance<500){
//     console.log("less than 500");
    
// }
// else if(balance<750){
//     console.log("less than 500");
    
// }
// else if(balance<900){
//     console.log("less than 500");
    
// }
// else{
//     console.log("less than 1200");
    
// }
  
 const isUserloggedIn= true;
 const debitCard= true;
 loggedInFromGoogle=false;
 loggedInFromEmail= true;

 if(isUserloggedIn && debitCard){
    console.log("User can do shopping");   
 }

 if(loggedInFromEmail || loggedInFromGoogle){
    console.log('user can now access the products');
    
 }
