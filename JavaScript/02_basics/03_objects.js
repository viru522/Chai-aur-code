//singleton
// object.create


// object literals
 const mySym = Symbol("key")
 const JsUser ={
    name :"virendra",
    "full Name":"virendra kanojiya",
    [mySym] : "mykey1",
    age:" 24",
    location:"Thane",
    email: "vireu@gmail.com",
    isLoggidIn: false,
    lastLoginDays: ["Monday", "Satu"]
 }

//  console.log(JsUser.email); // vireu@gmail.com
//  console.log(JsUser["email"]); //vireu@gmail.com
//  console.log(JsUser["full Name"]); //virendra kanojiya
 console.log(JsUser[mySym]);
 
//  Object.freeze(JsUser)
 JsUser.email = "virendra@gmail.com"
//  console.log(JsUser);
 
