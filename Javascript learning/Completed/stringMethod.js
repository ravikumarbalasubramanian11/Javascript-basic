console.log("string method");

/*
String length
String slice()
String substring()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
*/
let text="     India, officially the Republic of India, is a country in South Asia.   "
let text1=" It is the seventh-largest country by area and the second-most populous country. "


console.log("Length ="); 
let length = text.length;

console.log(length);  //Output: 76

console.log("Slice = ");   
let slice = text.slice(0,59);
console.log(slice);     //Output: India, officially the Republic of India, is a country

console.log("Substring = ")
let substrs = text.substring(59,0);
console.log(substrs);   //Output: India, officially the Republic of India, is a country

console.log("Uppercase= ");
let upperCase = text.toUpperCase();
console.log(upperCase); //Output: INDIA, OFFICIALLY THE REPUBLIC OF INDIA, IS A COUNTRY IN SOUTH ASIA.

console.log("Lowercase = ");
let lowerCase = text.toLowerCase();
console.log(lowerCase); //Output: india, officially the republic of india, is a country in south asia.

console.log("Concat = ");
let concat= text.concat(""+text1);
console.log(concat);    //Output: India, officially the Republic of India, is a country in South Asia.    It is the seventh-largest country by area and the second-most populous country.

console.log("Trim = ");
let trim= text.trim();
console.log(trim.length);   //Output: 68

console.log("TrimStart = ")
let trimstart= text.trimStart();
console.log(trimstart.length);  //Output:71

console.log("TrimEnd = ")
let trimEnd= text.trimEnd();
console.log(trimEnd.length);    //Output:73

let number="5";
console.log("Padding =");
let pad =number.padStart(5,"x")
console.log(pad);   //Output: xxxx5

console.log("Padding =");
let padend =number.padEnd(5,"x");
console.log(padend);    //Output: 5xxxx

console.log("CharAt postion =");
let chart= text.charAt(6);
console.log(chart); //Output: n

console.log("CharAt postion =");
let charts= text.charCodeAt(8);
console.log(charts);    //Output: 105

console.log("Split using commas, spaces=")
let split= text.split(",");
console.log(split)  /*Output: [
                        '     India',
                        ' officially the Republic of India',
                        ' is a country in South Asia.   '
                    ]*/
