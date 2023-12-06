console.log(Math); //Object [Math] {}
console.log(Math.abs(-3)); //3  [convert negative to positive]
console.log(Math.round(5.6)) //6
console.log(Math.min(2,4,1,3,10)); //1
console.log(Math.max(2,4,1,3,10));  //10
console.log(Math.sqrt(25)); //5

console.log(Math.random()); //give some random value or number which is between 0 and 1.
console.log((Math.random()*10)); // 0 that's why we need to add 1 in this equation.
console.log((Math.random()*10) +1); 
console.log(Math.floor((Math.random()*10))+1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) + min);