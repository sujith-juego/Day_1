/*
Given an array of dates, Find the particular day on which the date falls (like Monday, Tuesday). Return the objects with key as date and day as value. 
Eg –  
input - arr = [‘12/02/2023’, ‘11/02/2023’, ‘10/02/2023’] 
output -  {  
    ‘10/02/2023’: “MONDAY”,             ‘11/02/2023’: “TUESDAY”, 
            ‘12/02/2023’: “WEDNESDAY” } 
*/

let arr = new Array();
arr = ["12/02/2023", "11/02/2023", "10/02/2023"];
let day = new Array();
day = ["monday","tuesday","wednesday"];
arr.reverse();
//console.log(arr);

const obj  = {}

day.forEach((elem,i) => {
    obj[`${arr[i]}`] = elem
})
        console.log(obj);
    

