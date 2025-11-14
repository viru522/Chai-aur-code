 // Dates 
 let myDate = new Date()
//  console.log(myDate.toString()); // Fri Nov 14 2025 11:22:13 GMT+0000 (Coordinated Universal Time)
//  console.log(myDate.toDateString()); //Fri Nov 14 2025
//  console.log(myDate.toLocaleDateString()); // 11/14/2025
 

 let myCreatedDate = new Date(2025, 8, 14)
//  console.log(myCreatedDate.toDateString()); // Sun Sep 14 2025
 
//  let myCreatedDate = new Date(2025, 8, 14, 2, 3)
//  console.log(myCreatedDate.toString()); // Sun Sep 14 2025 02:03:00 GMT+0000 (Coordinated Universal Time)
 
//  let myCreatedDate = new Date("09-14-2025")
//  console.log(myCreatedDate.toLocaleDateString()); // 9/14/2025
 
 let myTimestamp =Date.now();
//  console.log(myTimestamp); // 1763120414740
//  console.log(myCreatedDate.getTime()); //1757808000000
//  console.log(Math.floor(Date.now()/1000)); 1763120713


let newDate = new Date();
// console.log(newDate); //2025-11-14T11:53:37.369Z
// console.log(newDate.getDate()); //14 
// console.log(newDate.getDay()); // 5
// console.log(newDate.getFullYear()); 2025
// console.log(newDate.getMinutes()); 54

 console.log(
  newDate.toLocaleTimeString('default',{
weekday: "long" 
}));

 
 