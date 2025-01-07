const birRaqam = +prompt("1-raqamni kiriting");
const tanlang = +prompt("Tanlang \n1) + \n2) - \n3) * \n4) / ");
const ikiRaqam = +prompt("2-raqamni kiriting");


const birSon = document.querySelector(".qora__va");
const Spn = document.querySelector(".qora__va1");
const ikiSon = document.querySelector(".qora__va2");
const checkButton = document.querySelector(".qora__va3");


birSon.textContent = birRaqam;
ikiSon.textContent = ikiRaqam;

checkButton.addEventListener("click", function () {
    let result;

    if (tanlang === 1) {
        Spn.textContent = "+";
        result = birRaqam + ikiRaqam;
    } else if (tanlang === 2) {
        Spn.textContent = "-";
        result = birRaqam - ikiRaqam;
    } else if (tanlang === 3) {
        Spn.textContent = "*";
        result = birRaqam * ikiRaqam;
    } else if (tanlang === 4) {
        Spn.textContent = "/";
        result = ikiRaqam !== 0 ? birRaqam / ikiRaqam : "Nolga bo'lib bo'lmaydi!";
    } else {
        result = "Noto'g'ri amal tanlandi";
    }

    checkButton.textContent = result; 
});
