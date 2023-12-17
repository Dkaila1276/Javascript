//obejct literals

//symbols
const mySym = Symbol("value1");

const myObj = {
    fname: "Dhruvi",
    lname: "Patel",
    "full name": "Dhruvi Patel",
    [mySym]: "values",  //how to use symbol as key in object.
    age: 19,
    email: "dhruvi2024@gmail.com",
    city: "Baroda",
    isLoggedIn: true
}


console.log(myObj.fname); //Dhruvi
//console.log(myObj.full name); this create an error which is syntaxError
console.log(myObj["full name"]); //Dhruvi Patel
console.log(myObj[mySym] + " " + typeof (myObj[mySym])) //values string


console.log(myObj);
//{fname: 'Dhruvi',lname: 'Patel','full name': 'Dhruvi Patel',age: 19, email: 'dhruvi2024@gmail.com',city: 'Baroda',isLoggedIn: true,[Symbol(value1)]: 'values'}

myObj.email = "dp2024@google.com";
console.log(myObj)
//{fname: 'Dhruvi',lname: 'Patel','full name': 'Dhruvi Patel',age: 19, email: 'dp2024@google.com',city: 'Baroda',isLoggedIn: true,[Symbol(value1)]: 'values'}

//freeze method for object[which cannot allow user to change value of any object's key.]
Object.freeze(myObj);
myObj.lname = "Kaila"
console.log(myObj);
//{fname: 'Dhruvi',lname: 'Patel','full name': 'Dhruvi Patel',age: 19, email: 'dp2024@google.com',city: 'Baroda',isLoggedIn: true,[Symbol(value1)]: 'values'}



const myObj2 = {
    fname: "Dhruvi",
    lname: "Patel",
    "full name": "Dhruvi Patel",
    [mySym]: "values",  //how to use symbol as key in object.
    age: 19,
    email: "dhruvi2024@gmail.com",
    city: "Baroda",
    isLoggedIn: true
}

myObj2.greeting = function () {
    console.log(`Welcome to Nodejs..:), ${this["full name"]}`);
}

console.log(myObj2.greeting); //[Function (anonymous)]
console.log(myObj2.greeting()); //Welcome to Nodejs..:), Dhruvi Patel
