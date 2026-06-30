const num1input = document.getElementById('first-number');
const num2input = document.getElementById('second-number');
const btnplus = document.getElementById('btn-plus');
const btnminus = document.getElementById('btn-minus');
const btnmulti = document.getElementById('btn-multi');
const btndivi = document.getElementById('btn-divi');
const resultSpan = document.getElementById('result');

btnplus.onclick = function () {
    const result = calculator(Number(num1input.value), Number(num2input.value), '+');
    resultSpan.innerText = result;
}

btnminus.onclick = function () {
    const result = calculator(Number(num1input.value), Number(num2input.value), '-');
    resultSpan.innerText = result;
}

btnmulti.onclick = function () {
    const result = calculator(Number(num1input.value), Number(num2input.value), '*');
    resultSpan.innerText = result;
}

btndivi.onclick = function () {
    const result = calculator(Number(num1input.value), Number(num2input.value), '/');
    resultSpan.innerText = result;
}

function calculator(num1, num2, operation){
    if (operation === '+'){
        return num1 + num2;
    } else if (operation === '-') {
        return num1 - num2;
    } else if (operation === '*') {
        return num1 * num2;
    } else if (operation === '/') {
        if (num2 === 0) return "Erro (Divisão por 0)"; 
        return num1 / num2;
    }
}