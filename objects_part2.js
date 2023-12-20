const myObj = {}

myObj.fname = "Dhruvi"
myObj.lname ="Patel"
myObj.age = 19

console.log(myObj); //{ fname: 'Dhruvi', lname: 'Patel', age: 19 }

const comObj = {
    fullname : {
        userName : {
            fname : "Ankur",
            lname : "Patel"
        }
    },
    age : 20,
    email : "Ankur@google.com"
}

console.log(comObj);
//{fullname: { userName: { fname: 'Ankur', lname: 'Patel' } },age: 20,email: 'Ankur@google.com'}

console.log(comObj.fullname);  //{ userName: { fname: 'Ankur', lname: 'Patel' } }
console.log(comObj.fullname.userName); //{ fname: 'Ankur', lname: 'Patel' }
console.log(comObj.fullname.userName.fname); //Ankur

const obj1 = { 1 : "a" , 2: "b"}
const obj2 = { 3 : "c" , 4 : "d"}
const obj3 = { 5 : "e" , 6 : "f"}
const obj4 = { 7 : "g" , 8 : "h"}

//concat 2 object
const fullobj1 = Object.assign(obj1,obj2)
console.log(fullobj1);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//that's why {} is imp ll value store in {} this otherwise all source value are store in obj1.
const fullobj = Object.assign({},obj3,obj4)
console.log(fullobj);  //{ '5': 'e', '6': 'f', '7': 'g', '8': 'h' }

//second type to concat 2objects.
const fullobj2 = {...obj3 , ...obj4}
console.log(fullobj2);  //{ '5': 'e', '6': 'f', '7': 'g', '8': 'h' }

console.log(Object.keys(obj3)); // ['5','6']
console.log(Object.values(obj3)); // {'e','f'}
//key values convert into array.
console.log(Object.entries(obj3)); //[ [ '5', 'e' ], [ '6', 'f' ] ]

//check object has particular property.
console.log(comObj.hasOwnProperty('age') + " , " + comObj.hasOwnProperty('age1')); //true , false