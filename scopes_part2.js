
//Nested Scopes

function UserInfo(){
    const username = "Dhruvi Patel"

    function UserPersonalDetails(){
        const email = "DhruviPatel@gmail.com"
        const age = 20

        //access username from parent function
        console.log("User's Name is " + username) //User's Name is Dhruvi Patel
    }

    //access age from child function
   //console.log(age); //ReferenceError

    //call the function
    UserPersonalDetails();
}
UserInfo();


console.log(addNum(2)); //3
function addNum(num){
    return num + 1;
}

//console.log(MulNum(4));  //ReferenceError: Cannot access 'MulNum' before initialization
const MulNum = function(num){
    return num * 2;
}
console.log(MulNum(2)); //4