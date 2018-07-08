let val;

// Number to string =>String() ==> A function
val = String(555);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString() => Method
val = (5).toString();
val = (true).toString();

// String to number using Number() function
val = Number('5'); //5
val = Number(true); //0
val = Number(false); //0
val = Number(null); //0
val = Number('hello'); // NaN
val = Number([1,2,3]); // NaN

//Methods
val = parseInt('100.30');
val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

//Type coercion
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum); //output = 56
console.log(typeof sum);
