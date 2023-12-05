// string to number
let number = "55";

console.log(typeof(number)); //String

var valueinNumber = Number(number);
console.log(typeof(valueinNumber)); //Number
console.log(valueinNumber); //55

//if value is not a number than it will convert in number and gave you number datatype.
console.log(typeof(NaN)); //Number


// number to boolean
let result = 1;

let boolean = Boolean(result);
console.log(typeof(boolean) +" " + boolean); //Boolean true

// number to string
let marks = 67;

let marksinString =  String(marks);
console.log(typeof(marksinString) + " " + marksinString); //String 67