/*
Given an array of dates, Find the particular day on which the date falls (like Monday, Tuesday). Return the objects with key as date and day as value. 
Eg –  
input - arr = [‘12/02/2023’, ‘11/02/2023’, ‘10/02/2023’] 
*/


function dateday(arr){

  arr.sort();
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// mm/dd//yyyy

  const obj = {};
  let day = new Array();

  arr.forEach((elem,i) => {
    const d = new Date(arr[i]);
    day[i] = weekday[d.getDay()];
    obj[`${arr[i]}`] = day[i]
  })
  return obj;
}
const output = dateday(["12/02/2023" , "11/02/2023", "10/20/2023","09/02/2023", "08/02/2023", "7/02/2023","8/02/2023", "7/02/2023", "8/15/2023","6/02/2023", "5/02/2023",,"4/02/2023"]);

console.log(output);
