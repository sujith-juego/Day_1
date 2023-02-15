
/*
Given an array of dates, Find the particular day on which the date falls (like Monday, Tuesday). Return the objects with key as date and day as value. 
Eg –  
input - arr = [‘12/02/2023’, ‘11/02/2023’, ‘10/02/2023’] 
*/


let arr = new Array();
arr = ["12/02/2023", "11/02/2023", "10/02/2023"];

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const obj = {};
let day = new Array();

weekday.forEach((elem,i) => {
  const d = new Date(arr[i]);
  day[i] = weekday[d.getDay()];
   obj[`${arr[i]}`] = day[i];
})

console.log(obj);

//j = .getDay();

//for(i=0;i<arr.length;i++){
  // const obj = {arr[i],day[j]};
//}

//console.log(obj);

//const d = new Date();
//let day = d.getDay();
//console.log(day);
//console.log(d);