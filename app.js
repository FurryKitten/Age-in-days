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




let birthday = document.getElementById("birthday")

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


    let dateStart = Date.parse(birthday.value);
    let dateEnd = Date.now();
    document.getElementById("result").innerHTML = Math.round((dateEnd - dateStart) / 86400000);

}
document.getElementById("calcbtn").addEventListener('click', calculateAll);