// high order function 
// son funciones que reciben funciones como 
//parametros 

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const operations = (a, b, callback) => {
    const result = callback(a, b);
    console.log('el resultado es:' + result)

}

operations(12, 5, suma);
operations(12, 5, resta);
operations(12, 5, (a, b) => a * b);

const cars = ['vocho', 'athos', 'pointer', 'tsuru', 'VW'];

cars.forEach((car) => { console.log(car) });

let filtrados = cars.filter(car => car === 'tsuru');
console.log(filtrados);

filtrados = cars.filter(car => car.includes('o'));
console.log(filtrados);
// regresar los que comiencen con a
filtrados = cars.filter(car => car.includes('a'));
console.log(filtrados);
// regresar los que termine con u
filtrados = cars.filter(car => car.includes('u'));
console.log(filtrados);
// regresar los que tengan menos de 5 letras
filtrados = cars.filter(car => car.length < 5);
console.log(filtrados);

//metodo map
const CARS = cars.map(car => car.toUpperCase());
console.log(cars);
console.log(CARS);

const reves = cars.map(car => car.split('').reverse().join(''));
console.log(reves);

function wrapping(gifts) {
    return gifts.map(gift => {
        let tapa = '*'.repeat(gift.length + 2);
        let g = `${tapa}\n*${gift}*\n${tapa}`;
        return g;
    })
}
const carsEnvueltos = wrapping(cars);
carsEnvueltos.forEach(car => console.log(car));


const numbers = [1, 2, 3, 4, 5, 67, 8, 9, 10];

const sumatoria = numbers.reduce((a, b) => a + b)
console.log(numbers);
console.log(sumatoria);
const factorial = numbers.reduce((a, b) => a * b);
console.log(factorial);

// every regresa verdader si todos cumples
const ages = [23, 4, 12, 9, 10, 32, 15, 23];
const olders = ages.every(age => age >= 10);
const youngers = ages.every(age => age < 18);

// some regresa verdader con uno que cumpla
const olders2 = ages.some(age => age >= 10);
const youngers2 = ages.some(age => age < 18);
console.log(olders2);
console.log(youngers2);

// Ejericios 
//
// crear un array con elementos del 1 al 10
const array = [1,2,3,4,5,6,7,8,9,10];
console.log(array)
// crear uno nuevo con los cuadrados
const pairs = array.map[n => n * 2];
console.log(pairs);
// crear uno nuevo con los cubos 
// crear uno nuevo con las mitades

// crear uno nuevo con los pares
// crear uno nuevo  con los impares
// crear uno nuevo con valores entre 3 y 8
