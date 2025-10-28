let number = 0
let digits = 2
const display = document.getElementById("generate")
const digit_button = document.getElementById("digit")

function generate(){
    if (digits == 2) {
        number = Math.floor(Math.random() * (99 - 10 + 1)) + 10
    }
    if (digits == 3) {
        number = Math.floor(Math.random() * (999 - 100 + 1)) + 100
    }

    display.innerText = number;
}

function digit(){
    if (digits == 2){
        digits = 3
    }
    else{
        digits = 2
    }

    digit_button.innerText = `${digits} digit`;
}