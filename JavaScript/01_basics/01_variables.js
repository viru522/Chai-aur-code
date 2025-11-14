const accountId = 24313;
let accountEmail = "viru123";
let accountPass = "zxcvbnm234";
let accountName = "virendra";
var branchName = "kopri";
let accountState;
/*
Perfer not to use var
because of issuse in block scope and functional scope
*/
cityname = "Thane";
//for seeing one condition at a time 
console.log(accountId);
// Id cannot change 
// accountId = 2 

accountEmail = "viru";
accountPass = "zxcvbnm";
cityname = "Ahmedabad";
console.log([accountId,accountName,cityname]);

console.table([accountId,branchName,accountName,cityname,accountEmail,accountPass,accountState]);