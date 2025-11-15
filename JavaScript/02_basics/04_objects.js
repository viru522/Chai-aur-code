// const tinderUser = new Object()

const tinderUser= {}

tinderUser.id = "123acas"
tinderUser.name = "virendra" 
tinderUser.isLoggedIn =false;
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname:{
            firstname:"virendra",
            lastname:"kanojiya"
        }
    }
}
// console.log(regularUser.fullName.userfullname.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// assign methods
// const obj3 = Object.assign({},obj1, obj2)
// console.log(obj3);

// using spread methods
// const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users =[
    {
        id:1232,
        name:"virendra",
        email:"asd@outlook.com",
        psw:"csdocn123"
    },
    {
        id:1232,
        name:"sahil",
        email:"assahil@outlook.com",
        psw:"csdocn123"
    },
    {
        id:1232,
        name:"sumit",
        email:"asumitd@outlook.com",
        psw:"csdocn123"
    },
    {
        id:1232,
        name:"sagar",
        email:"asagard@outlook.com",
        psw:"csdocn123"
    }
]
//  console.log(users[2].name);

// console.log(Object.keys(users));
// // get both keys and values
// console.log(Object.entries(users));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// destructuring of object 

const course ={
    coursename : "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// const {courseInstructor} = course;
// console.log(courseInstructor);
 // rename also by this way
// const {courseInstructor: Instrcutor} = course;
// console.log(Instrcutor);

// Destructuring in arrow function

// const navbar =({company}) => {

// console.log(company);
// }
// navbar({company :"virendra"})

// small intro to JSON

// {
//     "name":"virendra",
//     "coursename":"full stack in JAVA",
//     "fees":"91000"   
// }

// [
//     {},
//     {},
//     {},
//     {}
// ]