let val;

const today = new Date(); //by default today's date
let birthday = new Date('03-05-1991 08:20:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

// various 'get' Methods:

val = today.getMonth(); //get Month which is zero based,i.e. 0=>january
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);