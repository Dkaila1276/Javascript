//Immediately Invoked Function Expressions IIFE

//(this is use for declare function or defination)(this is for call the function)
//; this is impto end the function in js specially in IIFE Otherwise you got this error
//TypeError: (intermediate value)(...) is not a function

(function addTwo(num1,num2){
    console.log(num1 + num2);  //2+3=5
})(2,3);

(() => {
    console.log("this is Arrow function."); //this is Arrow function.
})();