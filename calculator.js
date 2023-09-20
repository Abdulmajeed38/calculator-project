class Calculator {
    constructor(previousDisplayTextElement, currentDisplayTextElement) {
        this.currentDisplayTextElement = currentDisplayTextElement;
        this.previousDisplayTextElement = previousDisplayTextElement;
        this.clear();
    } 
    clear() {
        this.currentDisplay = '';
        this.previousDisplay = '';
        this.operation = ' ';
    }
   delete() {
      this.currentDisplay = this.currentDisplay.toString().substr(0, this.currentDisplay.length - 1);
   }
   appendNumber(number) { 
    if(number === "." && this.currentDisplay.includes('.')) return;
      if (this.currentDisplay === '0') {
        this.currentDisplay = number.toString();
      } else {
        this.currentDisplay = this.currentDisplay.toString() +  number.toString();
      } 
   }
   selectOperation(operation) {
    if (this.currentDisplay === '') return;
     if (this.previousDisplay !== '') { 
        this.solve(); 
     }

     this.operation = operation; 
     this.previousDisplay = this.currentDisplay;
     console.log('correct sequence')
     this.currentDisplay = '';
    
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
   showDisplayNumber(number) {
    const floatNumber = parseFloat(number);
     if (isNaN(floatNumber)) return '';
     
     return floatNumber;
   }
   updateDisplay() {
     this.currentDisplayTextElement.value = this.showDisplayNumber(this.currentDisplay);
     if (this.operation != null) {
        this.previousDisplayTextElement.value = `${this.showDisplayNumber(this.previousDisplay)} ${this.operation}`;
     } else {
        this.previousDisplayTextElement.value = '';
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
// let mathOperators = ["+"| "-"|"x"| "÷"];
const calculator = new Calculator(previousDisplayTextElement, currentDisplayTextElement);

numberButtons.forEach(li => {
        li.addEventListener('click', () => {
                calculator.appendNumber(li.innerText);
                calculator.updateDisplay();
            })
    })
    mathOperands.forEach(li => {
        li.addEventListener('click', () => {
                calculator.selectOperation(li.innerText);
                calculator.updateDisplay();
            })
    })
        equalsButton.addEventListener('click', li => { 
                calculator.solve();
                calculator.updateDisplay();
            })
        clearButton.addEventListener('click', li => { 
                calculator.clear();
                calculator.updateDisplay();
            })
            deleteButton.addEventListener('click', li => { 
                calculator.delete();
                calculator.updateDisplay();
            })

     //THEME       
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