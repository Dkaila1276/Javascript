console.log(1>2); //false
console.log(1<2); //true

//when both value's datatype are different then output will not same as your predict.

console.log("2" > 1); //true
console.log("06" > 1); //true
console.log("06" > "1"); //false // 0 is smaller than 1.


//comparison convert null as 0  that's why null>= 0 is true and other two are false.
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true 

// ==  compare two value if both values are same but datatypes are different , give true;
// ===  compare two value ,both values are same but datatypes are different , give false;
console.log("5" == 5); //true
console.log("5" === 5); //false