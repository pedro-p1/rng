let number = 0
let digits = 2
const display = document.getElementById("generate")

function generate(){
    if (digits == 2) {
        number = Math.floor(Math.random() * (99 - 10 + 1)) + 10
    }
    if (digits == 3) {
        number = Math.floor(Math.random() * (999 - 100 + 1)) + 100
    }

    display.innerText = number;
}