/*If
else if
else
*/
a=35;
if(a>50){
    console.log("The number is greater than 50")
}
else if(a>25){
    console.log("The number is greater than 25")
}
else{
console.log("The number is less than 50");
}


///switch
let day;
switch (new Date().getDay()) {
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    default:
    day="this is weekend"
}
console.log(day);