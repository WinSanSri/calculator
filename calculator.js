const outputDiv = document.querySelector('.output');
const equalBtn = document.querySelector('.equal');
const calBtn = document.querySelectorAll('#wrapper button');

let firstValue = '';
let secondValue = ''; 
let operatorValue = '';
let returnValue = '';

const patternOperator = /\+|\-|x|\÷/g;

//make keys clickable and add entered value to output
calBtn.forEach(item => {
    // console.log(item.textContent)
    item.addEventListener('click', function() {
        // console.log(item.textContent);
        
        //clear output on new calculation
        if(returnValue || item.textContent === 'C') {
            clearCalculator()
        }

        //replace existing output value
        if(outputDiv.textContent === '0') {
            return outputDiv.textContent = item.textContent;
        }else if(item.textContent === '=') {
            //call function operate

            const findOperator = outputDiv.textContent
                .split('')
                .find(item => patternOperator.test(item));

            const findValues = outputDiv.textContent
                .split(findOperator)

            firstValue = findValues[0];
            secondValue = findValues[1];
            operatorValue = findOperator;

            if(firstValue && secondValue && operatorValue) {
                // console.log(firstValue)
                // console.log(operatorValue)
                // console.log(secondValue)
                returnValue = operate(operatorValue, firstValue, secondValue);
                return outputDiv.textContent = returnValue;
            }else {
                return 0
            }
        }else{
            //keep adding values
            return outputDiv.textContent += item.textContent;
        }
    });
});

function clearCalculator() {
    outputDiv.textContent = '0';
    firstValue = '';
    secondValue = '';
    operatorValue = '';
    returnValue = '';
}

function operate(oper, num1, num2) {
    //convert operator to string
    // oper = oper.toString();

    //convert number values to numbers
    num1 = Number(num1);
    num2 = Number(num2);

    if(oper === '+') {
        console.log(add(num1, num2))
        return add(num1, num2);
    }else if(oper === '-') {
        return substract(num1, num2);
    }else if(oper === 'x') {
        return multiply(num1, num2);
    }else if(oper === '÷') {
        return divide(num1, num2);
    }else {
        //return nothing
        return 0;
    }
}

function add(num1, num2) {
    return num1 + num2;
};

function substract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};
