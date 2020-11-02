
const text = document.getElementById("text-result")

function getRandomInt() {

    var number = Math.floor(Math.random() * Math.floor(2));
    number += 1;

    if (number == 1) {
        text.innerHTML = ("Break up with him")
    } else if (number == 2) {
        text.innerHTML = ("Stay with him")
    } 

}

