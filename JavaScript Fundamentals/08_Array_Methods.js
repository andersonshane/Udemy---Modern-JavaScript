// Create arrays
const numbers = [11,22,33,44,55,36,58];
const numbers2 = new Array(55,35,67,22,36);
const fruit = ['Pear', 'Banana', 'Orange', 'Grapes'];
const mixed = [87, 'Hi', true, undefined, null, {a:14, b:15}, new Date()]; //hetrogeneous component

let val;

// Get array length
val = numbers.length;

// Check if it is an array
val = Array.isArray(numbers);

// Get single value
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// Mutating Arrays

// Add on the end
numbers.push(50);

//Add on to front
numbers.unshift(40);

//Take off from end
numbers.pop();

//Take off from front
numbers.shift();

//Splice values
numbers.splice(1,3);

//Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the "compare function"
val = numbers.sort(function(x, y){
return x - y;
});

//Reverse sort
val = numbers.sort(function(x, y){
return y - x;
});

// Find
//under
function under50(num){
  return num > 50;
}

val = numbers.find(under50);
//over
function over50(num){
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);
