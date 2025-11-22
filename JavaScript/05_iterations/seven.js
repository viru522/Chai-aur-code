const myNumber = [1,2,3,4,5,6,10,7,8,9]
const val = myNumber.map((num)=>num+ 10)
// console.log(val);

// this is called chaining method 
const val1 =myNumber
            .map((num)=>num+30)
            .map((num)=>num+1)
            .filter((num)=>num>=30)
console.log(val1);
