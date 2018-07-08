const num1 = 100;
const num2 = 50;
//initialize val variable
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math => function inside an Object
val = Math.PI; //result PI value
val = Math.E;
val = Math.round(2.4); //2
val = Math.ceil(2.4);	//to round 'up' =>3
val = Math.floor(2.8); //to round 'down' =>3
val = Math.sqrt(64); //8
val = Math.abs(-3);   //3
val = Math.pow(8, 2); // 64
val = Math.min(2,33,4,1,55,6,3,-2); //-2
val = Math.max(2,33,4,1,55,6,3,-2); //55
val = Math.random(); //generate random decimal between 0 & 1

val = Math.floor(Math.random() * 20 + 1); //random nos between 1 and 20

console.log(val);