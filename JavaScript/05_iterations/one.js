//for loop

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("half");
//     }
//     console.log(element);
// }
// this is a time table

// for (let index = 1; index <=100; index++) {
//     const element = index;
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${index} * ${i} = ${index*i}`);
//         const element = i;
//     }
//     console.log(index);
// }

 // Array 
MyArray =["flash","batman","superman"]
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    console.log(element);
    
    
}


//Break & Contiune
// continue
for (let i = 0; i <= 20; i++) {
    const element = i;
    if(element== 5){
        console.log("detected 5 ");
        continue;
        // break;
        
    }
    console.log(element);
}
    // break
for (let i = 0; i <= 20; i++) {
    const element = i;
    if(element== 5){
        console.log("detected 5 ");
        break;
        
    }
    console.log(element);  
}

