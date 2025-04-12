const person = { name: "Alice", address: { city: "New York", zip: "10001" } };
const { address: { city, zip } } = person;
console.log(city); // New York
console.log(zip); // 10001

//What happens:

//The person object has a nested address field.
//Using nested destructuring, city and zip are taken directly from address.
//city gets "New York" and zip gets "10001".