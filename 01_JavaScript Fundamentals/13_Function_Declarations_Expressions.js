// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
	//defaut params in ES5
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  //ES6
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet());

// FUNCTION EXPRESIONS
const square = function(x = 3){
  return x*x;
};

// console.log(square());
//IIFEs
(function(){
  console.log('IIFE Ran..');
})();

(function(name){
  console.log('Hello '+ name);
})('Pankaj');

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(44);
todo.delete();
