const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');


const dayOutput = document.getElementById('resultDays');
const monthOutput = document.getElementById('resultMonths');
const yearOutput = document.getElementById('resultYears');

const button = document.getElementById('button');


const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];





function validate() {
    const inputs = document.querySelectorAll('.input');
    const inputColor = document.querySelectorAll('.input-day-text');
    let isValid = true;

    inputs.forEach((x, index) => {
        const parent = x.parentElement;

        if (!x.value) {
            x.style.borderColor = 'red';
            parent.querySelector("small").innerText = 'This field is required';
            inputColor[index].style.color = "red";
            isValid = false;
        } else if (x === monthInput && (x.value < 1 || x.value > 12)) {
            monthInput.style.borderColor = "red";
            monthInput.parentElement.querySelector("small").innerText = 'must be valid month';
            inputColor[index].style.color = "red";
            isValid = false;
        } else if (x === dayInput && (x.value < 1 || x.value > 31)) {
            dayInput.style.borderColor = "red";
            dayInput.parentElement.querySelector("small").innerText = "must be valid Day";
            inputColor[index].style.color = "red";
            isValid = false;
        } else if (x === yearInput && (x.value < 1950 || x.value > 2023)) {
             yearInput.style.borderColor = "red";
             yearInput.parentElement.querySelector("small").innerText = "Incorrect Year";
             inputColor[index].style.color = "red";
             isValid = false;
        } else {
            x.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
            inputColor[index].style.color = 'black';
            isValid = true

        }
    });

    return isValid;
};


function final() {
    if (validate()) {
        console.log("passed");
    }
}

button.addEventListener('click', final);


