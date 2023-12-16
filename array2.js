const evenNumber = [2,4,6,8,10];
const oddNumber = [1,3,5,7,9];
evenNumber.push(oddNumber);
console.log(evenNumber); // [2,4,6,8,10 , [ 1,3,5,7,9]]
console.log(evenNumber[5][1]); //3

const copyevenNumber = [2,4,6,8,10];
const copyoddNumber = [1,3,5,7,9];

const allNumbers = copyevenNumber.concat(copyoddNumber);
console.log(allNumbers); //[2,4,6,8,10,1,3,5,7,9]
console.log(allNumbers[8]); //7

const copyevenNumber1 = [2,4,6,8,10,12];
const copyoddNumber1 = [1,3,5,7,9,11];

const allNewNumbers = [...copyevenNumber1, ...copyoddNumber1];
console.log(allNewNumbers); //[2,4,6,8,10,12,1,3,5,7,9,11]
console.log(allNewNumbers[7]); //3

const newArray = [1,2,3,[4,5,6],7,8,[10,[11,12]]];
console.log(newArray); //[1,2,3,[4,5,6],7,8,[10,[11,12]]]
const flatarray = newArray.flat(1);
console.log(flatarray); //[1,2,3,4,5,6,7,8,9,10,[11,12]]
const newflatarray = newArray.flat(Infinity);
console.log(newflatarray); //[1,2,3,4,5,6,7,8,9,10,11,12]

console.log(Array.isArray(newflatarray));//true
console.log(Array.isArray("newflatarray"));//false
console.log(Array.from("newflatarray"));//["n","e","w","f","l","a","t","a","r","r","a","y"]

console.log(Array.from({name : "newflatarray"})); //[] //because we didnot clarify which value want to convert into array.