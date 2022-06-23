const stepCalc = function (a, b, operator) {
    let result;
    if (typeof a != 'number' && typeof b != 'number') {
        return 'Invalid operands';

    }
    else {


        switch (operator) {
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            default:
                console.log('no valid operator found');
        };

    };
    return result;
}

console.log(stepCalc(6, 5, '%'));