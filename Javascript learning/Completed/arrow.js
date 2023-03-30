

/*Set
try..,  catch.., finally..,
this call()method
this bind()method
arrow function
*/

//Set
const letter = new Set(["a","p","r"]);
letter.add("b")
console.log(letter)
letter.delete("a")
console.log(letter)
a= letter.has("b")
console.log(a)

//try..,  catch.., finally..,
let x=3;
 try{
        new upperCase() 
 }
 catch(err){
    errors= err.name
    //errors= " error  "+err;
    console.log(errors);// Output= error too low
    
 }
 finally{
    console.log("Have a good day!!!!")  //Output =  Have a good day!!!!
 }

//this call()method
 const person={
    fullName: function(){
        return this.firstName+""+this.lastName;
    }
 }
 const member={
    firstName: "Ravikumar ",
    lastName:"Balasubramanian",
 }
 let x1=person.fullName.call(member);
 console.log(x1) //Output = Ravikumar Balasubramanian


 //this bind()method
 const person1={
    firstName: "Ravikumar ",
    lastName:"Balasubramanian",
    fullNames: function(){
        return this.firstName+""+this.lastName;
    }
 }
 const member1={
    firstName: "Kumar ",
    lastName:"Subramanian",
 }
 let fullNames=person1.fullNames.bind(member1);
 console.log(fullNames())   //Output = Kumar Subramanian

//arrow function
hello = function() {
console.log("hello world")  //hello world
}
hello()

a=10;
b=12;
  hello = () =>{
    sum= a+b;
    console.log(sum)
  }
  hello() // 22


//constructor
  class India{
    constructor(state, state_capial){
        this.state=state;
        this.state_capial=state_capial;
    }
  }
  const india= new India("tamilnadu", "chennai")
  console.log(india ); //Output: India { state: 'tamilnadu', state_capial: 'chennai' }

