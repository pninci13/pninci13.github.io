let concatValue = ''; 
let flag = 0;
let btn = '';


function onClick(value) {
    concatValue += value;
    console.log(concatValue);  
    document.getElementById('current-number').innerHTML = concatValue;
}


function validate(value) {
    operationsList = ['+', '-', '+', '/'];
    if (concatValue.length > 0 && !operationsList.includes(concatValue.charAt(concatValue.length - 1))) {
        onClick(value);
    }
    console.log(operationsList - 1);
}

function doAction(value) {
    let result = '';

    if (value == 'AC') {
        document.getElementById('current-number').innerHTML = '';
        concatValue = '';
    }
    if (value == '=') {
        result = eval(concatValue);
        console.log(result);
        document.getElementById('current-number').innerHTML = result;
    }
}

function computeResult() {
    
}