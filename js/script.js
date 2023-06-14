const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav__list");
const body = document.querySelector("body");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("active");
};

const navLink = document.querySelectorAll(".link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
};

/* Blur Services

const btnGardens = document.querySelector(".btn__gardens");
const btnLawn = document.querySelector(".btn__lawn");
const btnPlanting = document.querySelector(".btn__planting");
const cardGardens = document.querySelectorAll(".card__gardens");
const cardPlanting = document.querySelectorAll(".card__planting");
const cardLawn = document.querySelectorAll(".card__lawn");

btnGardens.addEventListener("click", blur1);
function blur1() {
    cardPlanting.forEach(function (element) {
        element.classList.toggle("blur");
    });
    cardLawn.forEach(function (element) {
        element.classList.toggle("blur");
    });
    btnGardens.classList.toggle("btn__active");
};

btnLawn.addEventListener("click", blur2);
function blur2() {
    cardPlanting.forEach(function (element) {
        element.classList.toggle("blur");
    });
    cardGardens.forEach(function (element) {
        element.classList.toggle("blur");
    });
    btnLawn.classList.toggle("btn__active");
};

btnPlanting.addEventListener("click", blur3);
function blur3() {
    cardLawn.forEach(function (element) {
        element.classList.toggle("blur");
    });
    cardGardens.forEach(function (element) {
        element.classList.toggle("blur");
    });
    btnPlanting.classList.toggle("btn__active");
};
*/

/* Blur services second attempt */
const btnGardens = document.querySelector(".btn__gardens");
const btnLawn = document.querySelector(".btn__lawn");
const btnPlanting = document.querySelector(".btn__planting");
const cardGardens = document.querySelectorAll(".card__gardens");
const cardPlanting = document.querySelectorAll(".card__planting");
const cardLawn = document.querySelectorAll(".card__lawn");

btnGardens.addEventListener("click", blur1);
function blur1() {
    cardPlanting.forEach(function (element) {
        element.classList.toggle("blur");
    });
    cardLawn.forEach(function (element) {
        element.classList.toggle("blur");
    });
    btnGardens.classList.toggle("btn__active");
};

/* Prices accordion */
const formBasics = document.querySelector(".form__basics");
const formStandard = document.querySelector(".form__standard");
const formCare = document.querySelector(".form__care");
const accordionBasics = document.querySelector(".accordion.basics");
formBasics.addEventListener("click", activeBasics);
function activeBasics() {
    accordionBasics.classList.add("active");
    accordionStandard.classList.remove("active");
    accordionCare.classList.remove("active");
    };
const basicsCloseButton = document.querySelector(".acc__btn__basics");
basicsCloseButton.addEventListener("click", closeBasics);
function closeBasics() {
    accordionBasics.classList.remove("active");
}



const accordionStandard = document.querySelector(".accordion.standard");
formStandard.addEventListener("click", activeStandard);
function activeStandard() {
    accordionStandard.classList.add("active");
    };
const standardCloseButton = document.querySelector(".acc__btn__standard");
standardCloseButton.addEventListener("click", closeStandard);
function closeStandard() {
    accordionStandard.classList.remove("active");
}


const accordionCare = document.querySelector(".accordion.care");
formCare.addEventListener("click", activeCare);
function activeCare() {
    accordionCare.classList.add("active");
    };
const careCloseButton = document.querySelector(".acc__btn__care");
careCloseButton.addEventListener("click", closeCare);
function closeCare() {
    accordionCare.classList.remove("active");
}


