// Primitive Types
/*
console.log(typeof 1);
console.log(typeof "Pankaj");
console.log(typeof true);
*/

//Non Primitive Types
/*
console.log(typeof {"Name":"Pankaj"});
console.log(typeof [1, 2,3]);
*/

// == equal to values
/*
console.log(5==5);
console.log(5=="5");
console.log(1==true);
console.log(1==true);
*/


// === equal to values and type
/*
console.log(5==="5");
console.log(5===5);
console.log(1===true);
*/

/*

const a = 5;
console.log(a);


a = 6;
console.log(a); // Trough an error for redeclearing constant
*/

/*

const a = {b:5}
console.log(a);

a.b = 6;
console.log(a);// Run with successfully


a = {b:7};
console.log(a);// Through erroe

*/


/*
const a = [5];
console.log(a);

a[0] = 6;
console.log(a);// Run with successfully


// a = [7];
// console.log(a);// Through error

*/


// a = 5;

// console.log(global.a);




// Always use const

// If reassignment is needed in any logic then only use let

// Never use var

// Never global scope


// Function Declearation
/*
function sum1(a, b){
    return a + b;
}

const sum2 = function(a, b){
    return a + b;
}

const sum3 = (a, b) =>{
    return a + b;
}

const sum4 = (a, b) => a + b;

console.log(sum1(1,2));
console.log(sum2(2,2));
console.log(sum3(3,2));
console.log(sum4(4,2));

*/

// Async Function
/*
async function run(){
    const sum = async (a, b) => a + b;// Give the sum of values

    const a = await sum(5, 1);// It will wait for getting response from sum function

    console.log(a);
}
run();
*/

/*
async function run(){
    const sum = async (a, b) => a + b;// Give the sum of values

    const a = sum(5, 1);//

    console.log(a);// Return Promise { 6 }
}
run();

*/

/*
async function run(){
    const sum = async (a, b) => a + b;// Give the sum of values

    sum(5, 1).then(a => console.log(a));// this will run after sum

    console.log("Done");// This will run faster
}
run();

*/

//npm i node-fetch

//npm i axios





