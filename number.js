//normal way to declaration 
const number = 100;
console.log(number); // 100

//declartion with new keyword
const newNumber = new Number(200.4567);
console.log(newNumber) //[Number: 200.4567]

console.log(newNumber.toString().length); //8
console.log(newNumber.toFixed(1));  //200.5
console.log(typeof(newNumber.toPrecision(3)) + " " + newNumber.toPrecision(3)); //String 200