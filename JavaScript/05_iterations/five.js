// for each loop


const coding =  ["js","rb", "py","java", "cpp"]

// coding.forEach(function(item){
// console.log(item);
// })

// coding.forEach(e => {
//     console.log(e);
// });
function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe);


coding.forEach((item, index, arr )=>{
//    console.log(item, index, arr);  
})

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "JS",

    },
    {
        languageName : "Python",
        languageFileName : "py",

    },
    {
        languageName : "JAVA",
        languageFileName : "Java",

    }
] 

myCoding.forEach((item)=>{
console.log( item.languageName , item.languageFileName );
})
