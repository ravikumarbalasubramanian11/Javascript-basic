/*In JavaScript, objects are king

Booleans can be objects
Numbers can be objects
Strings can be objects 
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects

primitive data types
string
number
boolean
null
undefined
symbol
bigint
*/

//Single value Object
let person ="Guru"

//Multiple value Objects
const person1={
    firstName:"Ravikumar",
    lastName:"B",
    address: "India",
    age:21
}

//using object literal
const member={
    fName:"ravikumar"
}

//using new keyword
const member1=new Object();
member.firstName="ravikumar";
member.lastName="b";
member.age=21;
console.log(member.age)  //Output= 21



//accessing the objects
const people2 = {
    firstname: "Gandhi",
    lastname: "Mohan",
    age: 50,
    eyecolor: "blue",
  };
console.log(people2.firstname)  //Output= Gandhi
//adding new properties
people2.nationality="India"; //nationality:India


const people3 = {
    firstname: "Gandhi",
    lastname: "Mohan",
    age: 50,
    eyecolor: "blue",
  };
//delete properties
delete people3.eyecolor;  //delete eyecolor



const people4 = {
    firstname: "Gandhi",
    lastname: "Mohan",
    age: 50,
    eyecolor: "blue",
  };

//accessing multiple objects 
console.log("My name is "+ people4.firstname +" "+people4.lastname + " ."+"I am " +people4.age+" Years old ." +"I am an " +people4.nationality)
//Output= My name is Gandhi Mohan .I am 50 Years old

const peoples = {
    firstname: "Gandhi",
    lastname: "Mohan",
    age: 50,
    eyecolor: "blue",
    languages:{
        languages1:"Gujarathi",
        languages2:"Hindi",
    }
  };
//accessing nested objects
  console.log(peoples["languages"]["languages1"]) //Output= Gujarathi




// call
const person6={
    fullName: function(){
        return this.firstName+""+this.lastName;
    }
 }
 const member2={
    firstName: "Ravikumar ",
    lastName:"Balasubramanian",
 }
 let x1=person6.fullName.call(member2);
 console.log(x1) //Output = Ravikumar Balasubramanian


 //this bind()method
 const person7={
    firstName: "Ravikumar ",
    lastName:"Balasubramanian",
    fullNames: function(){
        return this.firstName+""+this.lastName;
    }
 }
 const member3={
    firstName: "Kumar ",
    lastName:"Subramanian",
 }
 let fullNames=person7.fullNames.bind(member3);
 console.log(fullNames())   //Output = Kumar Subramanian

//Constructor using Objects
 function Person9(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
let person10= new Person9("Ravi","Kumar","21","Brown");
console.log(person10)

//prototypes
function Person10(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    
  }
  
  Person10.prototype.nationality = "Indian";  //used to inhertited the object property

  let person11= new Person10("Guru","L",30,"Brown")
  let person12= new Person10("Chidhambaram","VOC",50,"Red")
  console.log(person11);
  console.log(person12);

//sets
 
const letter = new Set(["a","b","c"])
//add=1
 x=letter.add(1) 
 console.log(letter); //Set(4) { 'a', 'b', 'c', 1 }

//delete
 x=letter.delete(1)
 console.log(letter); //  Set(3) { 'a', 'b', 'c' }

 //has
 x=letter.has("a")
 console.log(x); //true

 //values
 x=letter.values;
 console.log(x);   //[function: values]
 
 //delete
 letter.clear();
 console.log(letter);  //Set(0) {}


 //Maps
 const leader = new Map([
  ["Mahatma", 1947],
  ["Ambedkar", 1940],
  ["Bose", 1930]
]);

c=leader.size
console.log(c)  //3

var x =leader.set("vivekanadha",1948)
console.log(x) //'vivekanadha' => 1948

var x= leader.get("vivekanadha")
console.log(x) //1948

let y= leader.forEach(
  function(value){
    console.log(value);
  }    
)                      //   1948 1947 1940 1930 1948
text="  "
for (const x of leader.entries()){
    text += x +" ";
  }
  console.log(text);  //  Mahatma,1947 Ambedkar,1940 Bose,1930 vivekanadha,1948
  
