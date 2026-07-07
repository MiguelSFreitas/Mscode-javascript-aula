const num1input = $("#first-number");
const num2input = $("#second-number");
const btnplus = $('#btn-plus');
const btnminus = $('#btn-minus');
const btnmulti = $('#btn-multi');
const btndivi = $('#btn-divi');
const resultSpan = $('#result');

btnplus.click(function () {
    const result = calculator(Number(num1input.val()), Number(num2input.val()), '+');
    resultSpan.text(result);
});

btnminus.click(function () {
    const result = calculator(Number(num1input.val()), Number(num2input.val()), '-');
    resultSpan.text(result);
});

btnmulti.click(function () {
    const result = calculator(Number(num1input.val()), Number(num2input.val()), '*');
    resultSpan.text(result);
});

btndivi.click(function () {
    const result = calculator(Number(num1input.val()), Number(num2input.val()), '/');
    resultSpan.text(result);
});

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