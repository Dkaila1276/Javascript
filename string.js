const name = "Dhruvi Patel";
const age =  30;

console.log(typeof(name));  //String

console.log("Employee name is " + name + ". she is " + age + "years old.")
console.log(`Employee full name is ${name} .
She is ${age} years old`) //you can see difference between "" and `` in output.

const username = new String("Ashka Patel");//also define string by using new keyword which is make string as object

console.log(typeof(username)); //Object
console.log(username[0]); //A
console.log(username.length); //5
console.log(username.toUpperCase());  //ASHKA
console.log(username.charAt(3)); //k
console.log(username.indexOf('k')); //3


//Substring
      //[//last value is not include in output ex . last value is 2 then ouput will [As].]
     //positive value in parameter . nagetive value count as 0 in this method.
const newString = username.substring(0,2); 
console.log(newString);  //As 

//Slice 
    //negative value is count.[reverse count in string].

const sliceString = username.slice(-3);
console.log(sliceString); //tel

const somestring = "    hel-lo    ";
console.log(somestring.length);
console.log(somestring.trim().length);
console.log(somestring.replace("hel-lo" , "hi"))
console.log(somestring.includes('he'));
console.log(somestring.split("-"));