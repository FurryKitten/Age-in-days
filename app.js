// let objects = ['first', 'second', 'third', 'fourd', 'fifth'];

// // for (let i = 0; i < objects.length; i++) {
// //     console.log(objects[i]);
// // }




function summa(firstNumber, secondNumber) {
    console.log(firstNumber(5) + secondNumber(1))
}

summa(first, second)

function first() {

}

function second() {

}




let years = document.getElementById("years")

let months = document.getElementById("months")

let days = document.getElementById("days")

function calculateAll() {


    // if (!years.value && !months.value && !days.value) {
    //     document.querySelectorAll('#error').forEach(element => {
    //         element.style.display = 'block'
    //     });
    //     return
    // }

    // if (!years.value) {
    //     document.querySelector('.error-year').style.display = "block"

    //     return

    // }

    // if (!months.value) {
    //     document.querySelector('.error-month').style.display = "block"

    //     return
    // }
    // if (!days.value) {
    //     document.querySelector('.error-day').style.display = "block"

    //     return

    // }

    // function removeall() {
    //     document.querySelectorAll('#error').forEach(element => {
    //         element.style.display = 'none'
    //     });
    // }


    let sum = parseInt(years.value * 365) + parseInt(months.value * 31) + parseInt(days.value);
    document.getElementById("result").innerHTML = sum

}
document.getElementById("calcbtn").addEventListener('click', calculateAll);