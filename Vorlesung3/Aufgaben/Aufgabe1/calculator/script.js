let currentResult = '';

function appendNumber(number) {
    currentResult = currentResult + number;
    document.querySelector("#result").value = currentResult;
}

function appendOperator(operator) {
    currentResult = currentResult + operator;
    document.querySelector("#result").value = currentResult;
}

function calculate() {
    document.querySelector("#result").value = `${eval(currentResult)}`;
}

function clearResult() {
    currentResult = '';
    document.querySelector("#result").value = '';
}
