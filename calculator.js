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
     
    const prevDisplayString = this.previousDisplay.toString();
    const fullDisplayString = prevDisplayString + operation 
    
    const operators = ['+', '-', '÷', 'x'];

    if (this.previousDisplay !== '') { 
        this.solve(); 
      } 
      
    this.previousDisplay = this.currentDisplay;
    this.operation = operation; 
    this.currentDisplay = '';

     //else {
        //         // this.previousDisplay = this.currentDisplay;
        //         this.operation = this.operation.replace(lastChar, operation);
        //         console.log('correct')
        //         // this.currentDisplay = '';
        //     } //else {
            //     this.previousDisplay = this.currentDisplay;
            //     this.operation = operation; 
            //     this.currentDisplay = '';
            // }
  
    //    this.previousDisplay = this.currentDisplay;
    //    this.operation = operation; 
    //    this.currentDisplay = '';
    //    this.updateDisplay();
    //  }
    // this.previousDisplay = this.currentDisplay;
        
    //    this.currentDisplay = '';
  

     
    //  this.previousDisplay = changeOperation;
    //  console.log('correct sequence')
     //  let changeOperation = this.currentDisplay + this.previousDisplay.replace(/([÷x+-])+/g, );
  }
//   replace(operation) {
//     const rep = this.previousDisplay + this.operation;
//     const lastChar = this.previousDisplayTextElement[this.previousDisplayTextElement.length - 1];
//      if (this.previousDisplayTextElement !== '' && this.previousDisplayTextElement === rep) {
//         this.operation = rep.replace(lastChar, operation);
//      } 
//   }
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
   evaluation() {
       this.currentDisplayTextElement.value = '';
       let solve;
       if (this.currentDisplay !== '') {
           solve = Math.pow(this.currentDisplay, 2);
           this.currentDisplay = solve;
       }
       this.currentDisplayTextElement.value = solve;
   }
   neg() {
    this.currentDisplayTextElement.value = '';
    let solveNeg;
    if (this.currentDisplay !== '') {
        solveNeg = -this.currentDisplay;
        this.currentDisplay = solveNeg;
    }
    this.currentDisplayTextElement.value = solveNeg;
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
const negative = document.querySelector('.negative');
const percentage = document.querySelector('.percentage');

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
        percentage.addEventListener('click', () => {
                calculator.evaluation(); 
            }) 
        negative.addEventListener('click', () => {
                calculator.neg();
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