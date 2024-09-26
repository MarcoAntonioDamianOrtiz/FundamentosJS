const main = document.querySelector('main');
const h1 = document.querySelector('h1');

const eightball = () => {
    const question  = prompt('pregunta:')
    const random = Math.floor(Math.random() * 8);
    const options = [
        'Si',
        'No',
        'Pregunatale a alguien mas',
        'no se',
        'probablemente',
        'un 20 porciento que si',
        'Quien sabe',
        'yo no se',
    ]
    h1.innerText = options[random];
}

main.addEventListener('click', eightball);