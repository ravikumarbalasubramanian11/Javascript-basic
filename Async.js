// synchronous program.
function greeting(named){
    return (named+ " is an Indian")
}
named="Bose"
var person= greeting(named)

console.log(person)

//Event handlers

const fetchPromise = fetch('https://www.rapidtables.com/convert/length/feet-to-inch.html');

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

fetchPromise.then((response) => {
    if (response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });