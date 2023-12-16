const firstArray = ["a","b","c","d","e","f"];

console.log(firstArray[0]); //a

//Array's Method

firstArray.push("g")
console.log(firstArray) //[a,b,c,d,e,f,g]
firstArray.push("xyz"); 
console.log(firstArray); //[a,b,c,d,e,f,g,xyz]
firstArray.pop();
console.log(firstArray);//[a,b,c,d,e,f,g]

//push and unshift work as similar but have some difference
//[push add value at the end of array,unshift add value at the begging of array]
firstArray.unshift("A");
console.log(firstArray); //[A,a,b,c,d,e,f,g]
console.log(firstArray.includes("A")); //true
console.log(firstArray.indexOf("A")); //0
firstArray.shift();
console.log(firstArray); //[a,b,c,d,e,f,g]

console.log(firstArray.includes("A")); //false
console.log(firstArray.indexOf("A")); //-1


//Join
console.log(firstArray); //[a,b,c,d,e,f,g]
console.log(typeof(firstArray)); //Object

const secondArray = firstArray.join();
console.log(secondArray); //a,b,c,d,e,f,g
console.log(typeof(secondArray)); //string

//Slice,splice

//work similar but have some difference 
//slice cannot manuplate original array.it will giv you copy of original array.
//splice can manuplate original array.it will change the value of original value.
const slicearray = firstArray.slice(1,4);
console.log(slicearray); //[b,c,d]

const splicearray = firstArray.splice(1,4);
console.log("array " ,firstArray); //[a,,f,g]
console.log(splicearray); //[b,c,d,e]