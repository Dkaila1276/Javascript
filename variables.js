var a = 10;
const b = 20;
let c = 30;

console.log(a); //10
console.log(b); //20
console.log(c);  //30

//Block Scope
{
    var a = 40;
    let b = 30;
    const c = 50;
    console.log("in the block "+a); //40
    console.log("in the block "+b); //30
    console.log("in the block "+c); //50
}

//let and const have block scope.
console.log("after block declaration " + a); //40
console.log("after block declaration " + b); //20
console.log("after block declaration " + c); //30