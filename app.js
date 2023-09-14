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
    let validate = true;

    inputs.forEach((x) => {
        const parent = x.parentElement;

        if (!x.value) {
            x.style.borderColor = 'red';
            parent.querySelector("small").innerText = 'This field is required';
            validate = false;
        } else if (monthInput.value > 12) {
            monthInput.style.borderColor = "red";
            monthInput.parentElement.querySelector("small").innerText = 'must be valid month';
            validate = false;
        } else if (dayInput.valid > 31) {
            dayInput.style.borderColor = "red";
            dayInput.parentElement.querySelector("small") = "day incorrect";
            validate = false;
        } else {
            x.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
            validate = true;
        }
    });

    return validate;
};

button.addEventListener('click', validate);
