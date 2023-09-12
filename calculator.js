class Calculator {
    constructor(previousDisplayTextElement, currentDisplayTextElement) {
        this.currentDisplayTextElement = currentDisplayTextElement;
        this.previousDisplayTextElement = previousDisplayTextElement;
        this.clear();
    } 
    clear() {
        this.currentDisplay = '0';
        this.previousDisplay = '';
        this.operation = ' ';
    }
   delete() {
      this.currentDisplay = this.currentDisplay.toString().substr(0, this.currentDisplay.length - 1);
   }
   appendNumber(number) { 
    if(number === "." && this.currentDisplay.includes('.')) return;
      if (this.currentDisplay === '0') {
         //alert('change');
        this.currentDisplay = number.toString();
      } else {
        this.currentDisplay = this.currentDisplay.toString() +  number.toString();
      } 
   }
   selectOperation(operation) {
    let lastValue = this.previousDisplay.slice(-1);
     if (this.previousDisplay !== '') { 
        if (lastValue) {
            lastValue = this.previousDisplay;
            // this.solve(); 
            console.log('replaces current operand')  
            // this.solve(); 
        }  
        this.solve(); 
     }    
    //    this.solve(); 
     this.operation = operation;
     this.previousDisplay = this.currentDisplay + lastValue;
     this.currentDisplay = '';
    //   this.solve();   
   }
   solve() {
      let evaluation;
      const prev = parseFloat(this.previousDisplay);
      const current = parseFloat(this.currentDisplay);
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operation) {
        case "+":
            evaluation = prev + current;
            break;
        case "-":
            evaluation = prev - current;
            break;
        case "x":
            evaluation = prev * current;
            break;
        case "÷":
            evaluation = prev / current;
            break;
          default:
            return;  
      }
      this.currentDisplay = evaluation;
      this.operation = ''
      this.previousDisplay = ""; 
   }
   showDisplayNumber(number, operation) {
    const floatNumber = parseFloat(number);
     if (isNaN(floatNumber)) return '';
     
     return floatNumber.toLocaleString('en');
   }
   updateDisplay() {
     this.currentDisplayTextElement.value = this.showDisplayNumber(this.currentDisplay);
     if (this.operation !== null) {
        this.previousDisplayTextElement.value = `${this.showDisplayNumber(this.previousDisplay)} ${this.operation}`;
     }
   }
}
const currentDisplayTextElement = document.querySelector(['#operations']);
const previousDisplayTextElement = document.querySelector(['#previous-display']); 
const clearButton = document.querySelector(['.clear-All']);
const deleteButton = document.querySelector(['.delete']);
const numberButtons = document.querySelectorAll(['.digits']);
const mathOperands = document.querySelectorAll(['.data-operations']);
const equalsButton = document.querySelector(['.equals']);

const calculator = new Calculator(previousDisplayTextElement, currentDisplayTextElement);

numberButtons.forEach(li => {
        li.addEventListener('click', () => {
                // alert('changes'); 
                calculator.appendNumber(li.innerText);
                calculator.updateDisplay();
            })
    })
    mathOperands.forEach(li => {
        li.addEventListener('click', () => {
                // alert('changes'); 
                calculator.selectOperation(li.innerText);
                calculator.updateDisplay();
            })
    })
        equalsButton.addEventListener('click', li => {
                // alert('changes'); 
                calculator.solve();
                calculator.updateDisplay();
            })
        clearButton.addEventListener('click', li => {
                // alert('changes'); 
                calculator.clear();
                calculator.updateDisplay();
            })
            deleteButton.addEventListener('click', li => { 
                calculator.delete();
                calculator.updateDisplay();
            })
/* function display(val) {
   document.getElementById('operations').value += val;
}
function solve() {
     button.value = eval(button.value); 
}
function percentage() {
    const percent = eval(button.value / 100);
    return percent;
}
function clearScreen() {
   document.getElementById('operations').value  = "";
}
function cancel() {
  button.value = button.value.substr(0, button.value.length - 1);
} */
    const darkTheme = document.getElementById('dark');
    const lightTheme = document.getElementById('light');
    const calcTheme = document.querySelector('div'); 

function light() {
    calcTheme.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
}
function dark() {
    calcTheme.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
}
const theme = localStorage.getItem('theme');
const isDark = localStorage.getItem('dark');

if (theme) {
    calcTheme.classList.add(theme);
    isDark && calcTheme.classList.add('dark');
}