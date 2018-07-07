const firstName = 'Pankaj';
const lastName = 'Singh';
const age = 26;
const str = 'Hello there my name is Pankaj';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Appending(add on to a variable)
val = 'Pankaj ';
val += 'Singh';

val = 'Hi, my name is ' + firstName + ' and I am ' + age + ' years old';

// Escaping
val =  'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//getting item as index value
val = firstName[0];

// indexOf()
val = firstName.indexOf('P');
val = firstName.lastIndexOf('j');

// charAt() => Method
val = firstName.charAt('0');

// Get last charcter => Method
val = firstName.charAt(firstName.length - 1);

// substring() => Method
val = firstName.substring(0, 4);

// slice() => Method(some what same as substring)
val = firstName.slice(0,4);
val = firstName.slice(-3); //starts from back

// split() => Method
val = str.split(' '); //split at the space
val = tags.split(','); //split at the ','

// replace() => Method
val = str.replace('Pankaj', 'Jack');

// includes() => Method
val = str.includes('foo'); //gives ,true or false value

console.log(val);