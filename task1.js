/*
Given an array of dates, Find the particular day on which the date falls (like Monday, Tuesday). Return the objects with key as date and day as value. 
Eg –  
input - arr = [‘12/02/2023’, ‘11/02/2023’, ‘10/02/2023’] 
output -  {  
    ‘10/02/2023’: “MONDAY”,             ‘11/02/2023’: “TUESDAY”, 
            ‘12/02/2023’: “WEDNESDAY” } 
*/

// method 1

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
  

//method 2
const objct =["12/02/2023", "11/02/2023", "10/02/2023"];
objct.reverse();
const kys = ["monday","tuesday","wednesday"];

const obje = {};

for (var i = 0; i < kys.length; i++) {
    obje[objct[i]] = kys[i];

} 
console.log(obje);

//mrthod 3
const objc =["12/02/2023", "11/02/2023", "10/02/2023"];
objc.reverse();
const keys = ["monday","tuesday","wednesday"];

const map = new Map(); 

for(var i = 0; i < keys.length; i++){ 
    map.set(objc[i], keys[i]); 
}
console.log(map);
