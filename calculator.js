const outputDiv = document.querySelector('.output');
const equalBtn = document.querySelector('.equal');
const calBtn = document.querySelectorAll('#wrapper button');

let firstValue = '';
let secondValue = '';
let operatorValue = '';
let sum = '';

const operators = ['+','-','*','/','='];
const numValues = ['0','1','2','3','4','5','6','7','8','9'];

//make keys clickable and add entered value to output
calBtn.forEach(item => {
    item.addEventListener('click', function() {

        //reset after every calculation
        if(sum) {
            clearCalculator('')
        }
        
        //reset when AC is clicked
        if(item.textContent === 'AC') {
            clearCalculator('0')
        }

        //operator is entered
        if(operators.filter(operator => operator === item.textContent).length > 0) {
            if(item.textContent !== '=') {
                
                if(outputDiv.textContent.length > 0) {
                    //save firstvalue
                    firstValue = outputDiv.textContent;
                    //save operatorvalue
                    operatorValue = item.textContent;
                }else {
                    //do nothing if output is empty
                    clearCalculator('0')
                    return
                }
                console.log('first: ' + firstValue)
                console.log('oper: ' + operatorValue)
            }else {
                if(outputDiv.textContent.length > 0) {
                    //save secondvalue
                    secondValue = outputDiv.textContent;
                    console.log('sec: ' + secondValue)
                }else {
                    //do nothing if output is empty
                    clearCalculator('0')
                    return
                }
            }
            
            //start calculation if all variables have values
            if(firstValue && secondValue && operatorValue) {
                sum = operate(operatorValue, firstValue, secondValue);
                outputDiv.textContent = sum;
            }
        }
        //number is pressed
        if(numValues.filter(num => num === item.textContent).length > 0) {
            //firstvalue
            if(!firstValue) {
                //replace 0 with number pressed
                if(outputDiv.textContent === '0') {
                    outputDiv.textContent = item.textContent;
                }else {
                    //continue add numbers pressed
                    outputDiv.textContent += item.textContent;
                }
            }else {
                //first number of secondvalue
                if(!secondValue) {
                    //add numbers pressed
                    outputDiv.textContent = item.textContent;
                    secondValue = item.textContent;
                }else {
                    //continue add numbers to secondvalue
                    if(outputDiv.textContent === '0' && item.textContent === '0') {
                        return
                    }else {
                        outputDiv.textContent += item.textContent;
                    }
                }
            }       
        }   
    });
});


//reset calculator
function clearCalculator(initialValue) {
    if(outputDiv.textContent !== initialValue) {
        outputDiv.textContent = initialValue;
    }
    firstValue = '';
    secondValue = '';
    operatorValue = '';
    sum = '';
}

//return sum depending on operator
function operate(oper, num1, num2) {
    //convert number values to numbers
    num1 = Number(num1);
    num2 = Number(num2);

    if(oper === '+') {
        return add(num1, num2);
    }else if(oper === '-') {
        return substract(num1, num2);
    }else if(oper === '*') {
        return multiply(num1, num2);
    }else if(oper === '/') {
        return divide(num1, num2);
    }else {
        //return nothing
        return 0;
    }
}

//mutiple calculation functions
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
