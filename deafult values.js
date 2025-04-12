const [a = 5, b = 10] = [7];
console.log(a); // 7
console.log(b); // 10

//What happens:

//The array [7] is split into a and b.
//a gets 7 because it’s in the array.
//b gets 10 because there’s no second value in the array, so it uses the default.
