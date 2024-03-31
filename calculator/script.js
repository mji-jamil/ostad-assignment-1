const num1Input = document.getElementById("number1");
const num2Input = document.getElementById("number2");
const selectAction = document.getElementById("actions");
const calculateBtn = document.querySelector(".btn-primary");
const resultValue = document.querySelector(".result-value");

function calculate() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const action = selectAction.value;

    let result;
    switch (action) {
        case "Addition ( + )":
            result = num1 + num2;
            break;
        case "Subtraction ( - )":
            result = num1 - num2;
            break;
        case "Multiplication ( * )":
            result = num1 * num2;
            break;
        case "Division ( / )":
            result = num1 / num2;
            break;
        default:
            result = "Invalid action";
    }

    resultValue.textContent = `Result: ${result}`;
}

calculateBtn.addEventListener("click", calculate);