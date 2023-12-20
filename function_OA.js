//Function in object
const User = { 
    username : "Aashu",
    Price : 400,
}

function inObejct(anyObject){
    console.log(`User is ${anyObject.username} and Total Price is ${anyObject.Price}`)
}

inObejct(User);
inObejct({
    username:"Ankur",
    Price : 800
});


//Function in Array

const OddNumber = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]

function multiOddNumber(){
    return OddNumber[3] * 2;
}

console.log(multiOddNumber(OddNumber))