const name = "Dhruvi"; //store in stack memory

let age = 23;

console.log(typeof(name)); //String
console.log(typeof(age)); //Number
console.log(typeof(true)); //Boolean
console.log(typeof({})); //Object
console.log(typeof([])); //Object
console.log(typeof(BigInt(999))); //BigINT
console.log(typeof(NaN)); //Number //Not a Number

//Primitive : String ,Number, Boolean, BigINT, Null, Undefined, Symbol

//Non-Primitive : Array , Object , Function [It is also know as Reference type variable.]


//Stack[Primitive] and Heap[non-primitive] 

//Stack
let myname = name;
myname = "Ankur" //change the value of copy variable not original variable.
console.log(name);
console.log(myname);

//Heap
let car = {
    company : "TATA",
    name : "Altroz",
    color : "White"
}

let carinfo = car; //Reference of original variable's value.

console.log(car); //{ company: 'TATA', name: 'Altroz', color: 'White' }
console.log(carinfo);  //{ company: 'TATA', name: 'Altroz', color: 'White' }

carinfo.color = "Black"; // also change original value .
console.log(car);  //{ company: 'TATA', name: 'Altroz', color: 'Black' }
console.log(carinfo);  //{ company: 'TATA', name: 'Altroz', color: 'Black' }
