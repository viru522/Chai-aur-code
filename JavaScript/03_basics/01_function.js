function sayMyName(){
    console.log('V');
    console.log('I');
    console.log('R');
    console.log('E');
    console.log('N');
    console.log('D');
    console.log('R');
    console.log('A');   
}

// sayMyName()

// Addition of Two numbers
// simple way
// function addTwoNumbers(number1, number2){
// return number1+number2;
// }
// console.log(addTwoNumbers(12,34));

function addTwoNumbers(number1,number2){
    
        // let result = number1 +number2;
        // return result
        return number1 + number2;
}
console.log(addTwoNumbers(10,20));

function loginUserMessage(username){
    if (!username) {
        return ` Enter a UserName ` 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Virendra"));

function calculateCartPrice(...num){
    return num;
}
console.log(calculateCartPrice(200,400,600));
     

function calculateCartPrice1(val1, val2, ...num){
    return num;
}
console.log(calculateCartPrice1(200,400,600,2190,123));
     
const user ={
    username:"virendra",
    price:199
}

function handleObject(anyObject){
    console.log(`${anyObject.username} and price is ${anyObject.price} `)

}

// handleObject(user);

handleObject({
    username: "sam",
    price: 199
})


const myNewArray = [200,400,190,300]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
