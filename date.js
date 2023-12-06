const todayDate = new Date();

//Today's Date with time.
console.log(todayDate); //2023-12-06T17:24:48.487Z
//convert date into string.
console.log(todayDate.toString()); //Wed Dec 06 2023 22:54:48 GMT+0530 (India Standard Time)
console.log(todayDate.toDateString());  //Wed Dec 06 2023
console.log(todayDate.toISOString());  //2023-12-06T17:26:52.474Z
console.log(todayDate.toLocaleDateString()); //06/12/2023
console.log(todayDate.toLocaleString()); //06/12/2023, 22:58:27


//Type of Date
console.log(typeof(todayDate)); //Object

//In javascript month index start with 0 .
//that's means jan-0,fab-1,march-2,...,dec-11.
//user define date:
const myDate = new Date(2023, 4, 23);
console.log(myDate.toDateString()); //Tue May 23 2023

//convert milisecond to second.
console.log(Date.now()/1000); //1701884287.998
console.log(Math.floor(Date.now()/1000)); //1701884331

//get particular information from date.
console.log(todayDate.getMonth() + 1); //12 [+ 1 because dec = 11 so output will be 11 .]
console.log(todayDate.getDay()); // 3[monday=1,tuesday=2,wednesday=3,...,sunday=7]
console.log(todayDate.getFullYear()); //2023