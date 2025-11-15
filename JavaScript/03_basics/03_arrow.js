const user ={
    username :"virendra",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// console.log(this);

// function chai (){
//     let username ="viru522";
//     console.log(this.username); // undefined
// }
// chai()
// const chai = function (){
//     let username ="viru522";
//     console.log(this.username); // undefined
// }
// chai()
    const chai = () => {
     let username ="viru522";
    //  console.log(this.username); // undefined
   }
chai()


// ++++++++++++++++++++++++++++++++++++++++++

const addTwo1 =  (num1,num2) =>{
    return num1 + num2
}
// console.log(addTwo1(12,12));

const addTwo = (num1,num2)=> num1+num2;
// console.log(addTwo(12,23));

const addTwo2 =(num1,num2) => ({username:"virendra"});
// console.log(addTwo2())


const myArray = [2,4,6,8]
myArray.forEach( ()=> (myArray.indexOf[9]))
 console.log(myArray.includes(4));
 