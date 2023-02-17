
let arr = new Array();
arr = ["02/14/2023", "19/02/2023", "2023/02/16","02/17/2023","31/01/1999","23/09/2025","12/12/2000","2023/16/03","02/23/2023","05/23/2023","07/23/2023","09/23/2023"] ;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=new Array();
const obj = {}
function month(mon){
    let swap=mon[0];
    mon[0]=mon[1];
    mon[1]=swap;
}
function yearSwap(mon){
    let swap=mon[0];
    mon[0]=mon[2];
    mon[2]=swap;
}
arr.forEach((elem, i) => {
    const mon = elem.split("/");
    if(mon[0]>=13 && mon[0]<32){
       month(mon);
    }
    if(mon[0].length==4){
       yearSwap(mon);
       if(mon[0]>=13){
        month(mon);
     }
    }
    let text = mon.toString();
    const d = new Date(text);
    day[i] = weekday[d.getDay()];
    obj[`${arr[i]}`] = day[i];
})
 console.log(obj)
