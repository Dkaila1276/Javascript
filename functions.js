//in function ,if you cannot passed value in parameter then output will be undefined.
function addfun(a,b) {
    console.log(a+b); //7
}

const result = addfun(2,5); 
console.log("Result" , result); //Result undefined

function mulfun (a ,b) {
    const result = a * b;
    return result;
}

const mulresult = mulfun(2,2);
console.log( "multi " , mulresult) //multi 4

function userInfo (username) {
    if(!username)
    {
        console.log("Please enter username");
    }
    else{
    return `current user is ${username}`
    }
}

console.log(userInfo("Dhruvi")); //current user is Dhruvi
console.log(userInfo()); //Please enter username
