//this keyword refer current object's properties.

const user = {
    username : "Dhruvi",
    email : "dpatel9876@gmail.com",

    LoginMessage : function(){
        console.log(`${this.username} , Log In Successfully`);
    }
}

user.LoginMessage();  //Dhruvi , Log In Successfully
user.username = "Ankur";
user.LoginMessage();  //Ankur , Log In Successfully
console.log(this); //{} in node environment this refer empty object.

//DEclartion of Arror Function

//{} return keyword is required. without {} or In () no need of return keyword.
//If you want to return object in output than you need to write object into () paraphasing. 
const AddNum = (num1 , num2) => {
    return num1 + num2
}

console.log("AddNum value" , AddNum(2,2)); // AddNum value 4

const Mulnum = ( num1 ) => num1 *2; // also const Mulnum = (num1) => (num1 * 2);
console.log("Mulnum value " , Mulnum(3)); //Mulnum value 6