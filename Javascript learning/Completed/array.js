/*
position
Push
Pop
concat
Indexof
shift
unshift
sort
Reverse
 */
const array=["India", "England", "singapore", "Malaysia"]
const array1=["Cambodia"]

console.log(array[0]);  //Output: India

array.push("Srilanka"); 
console.log(array);  //Output: [ 'India', 'England', 'singapore', 'Malaysia', 'Srilanka' ]

array.pop()
console.log(array);  //Output: [ 'India', 'England', 'singapore', 'Malaysia' ]

concat= array.concat(array1)
console.log(concat);   //Output: [ 'India', 'England', 'singapore', 'Malaysia', 'Cambodia' ]

console.log(array.indexOf("England"))    //Output: 1

console.log(array.shift())  //Output: India
console.log(array);   //Output: [ 'England', 'singapore', 'Malaysia' ]

console.log(array.unshift("Philipines"));   //Output: 4

console.log(array);   //Output: [ 'Philipines', 'England', 'singapore', 'Malaysia' ]

console.log(array.sort());  //Output: [ 'England', 'Malaysia', 'Philipines', 'singapore' ]

sliced=array.slice(0,1)
console.log(sliced);   //Output: [ 'England' ]

console.log(array.reverse());   //Output: [ 'singapore', 'Philipines', 'Malaysia', 'England' ]


numb=[90,88,99,22,1,3]
console.log(numb.sort(function(a,b){return a-b}))   //Output: [ 1, 3, 22, 88, 90, 99 ]

const d= Math.random();
console.log(d); //Output: 0.26669021599719644
