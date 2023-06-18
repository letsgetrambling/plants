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
const accordionStandard = document.querySelector(".accordion.standard");
const accordionCare = document.querySelector(".accordion.care");
const basicsCloseButton = document.querySelector(".acc__btn__basics");
const standardCloseButton = document.querySelector(".acc__btn__standard");
const careCloseButton = document.querySelector(".acc__btn__care");
formBasics.addEventListener("click", activeBasics);
function activeBasics() {
    accordionBasics.classList.add("active");
    accordionStandard.classList.remove("active");
    accordionCare.classList.remove("active");
    };
basicsCloseButton.addEventListener("click", closeBasics);
function closeBasics() {
    accordionBasics.classList.remove("active");
}
formStandard.addEventListener("click", activeStandard);
function activeStandard() {
    accordionStandard.classList.add("active");
    accordionBasics.classList.remove("active");
    accordionCare.classList.remove("active");
    };

standardCloseButton.addEventListener("click", closeStandard);
function closeStandard() {
    accordionStandard.classList.remove("active");
}

formCare.addEventListener("click", activeCare);
function activeCare() {
    accordionCare.classList.add("active");
    accordionBasics.classList.remove("active");
    accordionStandard.classList.remove("active");
    };

careCloseButton.addEventListener("click", closeCare);
function closeCare() {
    accordionCare.classList.remove("active");
}
  /*  Contacts select */

  const contactButton = document.querySelector('.contacts__form');
  const dropdownList = document.querySelector('.dropdown__list');
  const select = document.querySelector('.contacts__form select');
  const item = document.querySelectorAll('.dropdown__list-item');
  const optionCity = document.querySelector('.contacts__form option');
  const canandaigua = document.querySelector('.canandaigua');
  const yonkers = document.querySelector('.yonkers');
  const sherill = document.querySelector('.sherill');
  const newYork = document.querySelector('.newYork');
  const offices = document.querySelector('.offices');
  const callUs = document.querySelector('.Callus');

  contactButton.addEventListener('click', visibleDropdown);
  function visibleDropdown() {
  dropdownList.classList.toggle('dropdown__list--visible');
  select.classList.toggle('select--active');
  };

  item.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
    e.stopPropagation();  
    optionCity.innerText = this.innerText;
    dropdownList.classList.remove('dropdown__list--visible');
    if ( this.dataset.value === 'canandaigua') {
    canandaigua.classList.add('canandaigua--visible');
    } else if (this.dataset.value === 'ny') {
        newYork.classList.add('canandaigua--visible');
    } else if (this.dataset.value === 'yonkers') {
        yonkers.classList.add('canandaigua--visible');
    } else {
        sherill.classList.add('canandaigua--visible');
    }
            })
  });

   // Клик снаружи дропдауна. Закрыть дропдаун
   document.addEventListener('click', function(e) {
    if (e.target !== canandaigua ) {
        console.log('Click');
        canandaigua.classList.remove('canandaigua--visible');
        yonkers.classList.remove('canandaigua--visible');
        sherill.classList.remove('canandaigua--visible');
        newYork.classList.remove('canandaigua--visible');
    }
   });

   //Вызов по номеру при нажатии кнопки


