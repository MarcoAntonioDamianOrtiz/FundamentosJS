// Strings en Javascripts


let name = "Francisco";
let city = 'Huamantla';
let message = "Hello, I'm " + name + "and I'm from" + city;
console.log(message)
message = 'Hello, I\'m ' + name + 'and I\'m from' + city;
console.log(message);

//Template literals
message = `Hello, I'm ${ name } and I'm from  ${ city }`;
console.log(message);

//Funciones para string
console.log(message.toLowerCase());
console.log(message.length);
console.log(message.toLowerCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hello'));
console.log(message.endsWith(','));
