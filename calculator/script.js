const num1Input = document.getElementById("number1");
const num2Input = document.getElementById("number2");
const selectAction = document.getElementById("actions");
const calculateBtn = document.querySelector(".btn-primary");

function calculate() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const action = selectAction.value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = '<div class="alert alert-danger p-2 mt-4 fs-4" role="alert">Please enter both numbers!</div>';
        return;
    }

    let result;
    switch (action) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                document.getElementById('result').innerHTML = '<div class="alert alert-danger p-2 mt-4 fs-4" role="alert">Cannot divide by zero!</div>';
                return;
            }
            result = num1 / num2;
            break;
        default:
            document.getElementById('result').innerHTML = '<div class="alert alert-danger p-2 mt-4 fs-4" role="alert">Invalid operation!</div>';
            return;
    }

    document.getElementById('result').innerHTML = `<div class="p-2 fs-4 alert alert-success mt-4" role="alert">Result: ${result}</div>`;
}

calculateBtn.addEventListener("click", calculate);