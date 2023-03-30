/*String Search


String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
*/

text="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area and the second-most populous country.";
console.log("IndexOf =")
let index=text.indexOf("the",40);
console.log(index);   //Output: 75

console.log("LastIndexof =")
let lastindex=text.lastIndexOf("ravi");
console.log(lastindex); //Output: -1

console.log("Search =")
let locate=text.search("country");
console.log(locate);    //Output: 46

console.log("Match =")
let match=text.match(/ally/);
console.log(match); /*Output: [
    'ally',
    index: 13,
    input: 'India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area and the second-most populous country.',
    groups: undefined
  ] */ 

console.log("MatchAll =")
let matchall=text.matchAll("lly");
console.log(matchall);  //Output: Object [RegExp String Iterator] {}

console.log("Includes =")
let include= text.includes("India")
console.log(include);   //Output: true

console.log("Startswith =")
let startswith=text.startsWith("India");
console.log(startswith);    //Output: true

console.log("Endswith =")
let endwith=text.endsWith("officially",6);
console.log(endwith);   //Output: false