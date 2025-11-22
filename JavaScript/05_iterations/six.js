const coding = ["js", "rb", "py", "java", "cpp"]

// const values = coding.forEach((e) => {
//     // console.log(e);
//     return e; // undefined
// });

// console.log(values); // undefined


 const myNums = [1,2,23,23, 2,43.2, 452];
//  const newNums =  myNums.filter((num)=> num > 4);
//  console.log(newNums);
 
 const newNums= []
 myNums.forEach((num)=> {
   if (num >4) {
     newNums.push(num)
    }
  })
  console.log(newNums);