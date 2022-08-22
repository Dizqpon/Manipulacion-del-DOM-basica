const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

console.log({
    h1,
    input1,
    input2,
    btn
});


const img = document.createElement('img');;
img.setAttribute('src', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
h1.innerHTML = '';
h1.append(img);



const sumarInputValues = (event) => {
    event.preventDefault();
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    const result = num1 + num2;
    resultado.innerText = `Resultado: ${result}`;
};

form.addEventListener('submit', sumarInputValues);