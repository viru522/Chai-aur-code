//for loop

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("half");
//     }
//     console.log(element);
// }

for (let index = 1; index <=100; index++) {
    const element = index;
    for (let i = 1; i <= 10; i++) {
        console.log(` ${index} * ${i} = ${index*i}`);
        const element = i;
    }
    console.log(index);
    
}