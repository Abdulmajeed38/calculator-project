let button = document.getElementById('operations'); 
function display(val) {
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
   document.getElementById('operations').value  = "0";
}
function cancel() {
  button.value = button.value.substr(0, button.value.length - 1);
} 
    const darkTheme = document.getElementById('dark');
    const lightTheme = document.getElementById('light');
    const calcTheme = document.querySelector('div'); 

function light() {
    calcTheme.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
}
function dark() {
   // alert("chessman");
   // event.preventDefault();
    calcTheme.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
}
const theme = localStorage.getItem('theme');
const isDark = localStorage.getItem('dark');

if (theme) {
    calcTheme.classList.add(theme);
    isDark && calcTheme.classList.add('dark');
}