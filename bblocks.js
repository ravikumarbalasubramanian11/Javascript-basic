/*If
else if
else
switch
for loop
for in loop
While loop
do while loop
continue
break
*/

/*If
else if
else*/
//
a=25;
if(a>50){
    console.log("The number is greater than 50")
}
else if(a<25){
    console.log("The number is less than 25") //Output= The number is greater than 25
}
else if(a===25){ //strictly equals to
    console.log("The number is equals to 25") //Output= The number is greater than 25
}
else{
console.log("The number is less than 50");
}


///switch
let x=0
switch (x) {
    case 1:
    day = "Sunday";
    break;
    case 2:
    day = "Monday";
    break;
    case 3:
    day = "Tuesday";
    break;
    case 4:
    day = "Wednesday";
    break;
    case 5:
    day = "Thursday";
    break;
  case 6:
    day = "Friday";
    break;
  case  7:
    day = "Saturday";
    default:
    day="this is weekend"
}
console.log(day);  //output= this is weekend


//for loop
let sum =0
let n=100;
for(var i=0 ;i<=100; i++){
  sum +=i;
}
console.log(sum) //output= 5050

n=1
for(var i=0; i<5; i++){
  console.log(i)    //output= 0 1 2 3 4 
}


//for in method objects
const person={name:"ravikumar", lastName:"B",age:21}
text=""
for(let x in person){
  text +=person[x]+" ";
}
console.log(text) //Output= Ravikumar B 21

//for in method array 
const persons=[fname="kumar", lastName="B",age=21]
text1=""
for(let x in persons){
  text1 +=persons[x]+" ";
}
console.log(text1) //Output= kumar B 21


//While loop
sum=0
i=0;
while(i<10){
  sum=i
  console.log(sum);  //output=0 1 2 3 4 5 6 7 8 9 
  i++
}


//do while loop
 sum=0
 i=0
do{
  sum=i
  console.log(sum) //output=0 1 2 3 4 5 6 7 8 9 10
  i++
}
while(sum<10);

//break
//continue
let numb =0;
for(let i=0;i<8;i++){
  if(i==2){ continue;}  //skip the value 2
  if(i==7){ break;}    //break it in 7
  console.log(i);
}

//For of
const country="India"
let title=""
for(const x of country){
  title += x+"   "
}
console.log(title);  //Output= I  n   d   i   a





a=8
//Functional reusable code
function named(x){
    console.log(a+=x)
}
// calling the function
named(10)

//arrow function
named =(x)=>{
    console.log(a+=x)
}
// calling the function
named(10)

