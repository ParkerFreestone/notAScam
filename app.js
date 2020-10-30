
const text = document.getElementById("text-result")

function getRandomInt() {

    var number = Math.floor(Math.random() * Math.floor(3));
    number += 1;

    if (number == 1) {
        text.innerHTML = ("Go hang with the main homies :)")
    } else if (number == 2) {
        text.innerHTML = ("Stay home like a lamo and watch criminal minds.")
    } else if (number == 3) {
        text.innerHTML = ("Go to the 23 year old guys cabin 🤔")
    } else if (number == 4) {
        text.innerHTML = ("Watch Stars wif me? :)")
    }

}

