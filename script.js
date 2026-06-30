const num1input = document.getElementById('first-number');
const num2input = document.getElementById('second-number');
const btnplus = document.getElementById('btn-plus');
const btnminus = document.getElementById('btn-minus');

document.getElementById('btn-plus').onclick = function () {
    const resultado = calculator(Number(num1input.value), Number(num2input.value), '+');
    document.getElementById('resultado').innerText = resultado
}

btnminus.onclick = function () {
    const resultado = calculator(Number(num1input.value), Number(num2input.value), '-');
    document.getElementById('resultado').innerText = resultado
}

function calculator(num1input, num2input, operation ){
    if (operation === '+'){
        return num1input + num2input;
    } else {
        return num1input - num2input
    }

}

