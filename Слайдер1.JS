const cards = Array.from(document.querySelectorAll(".card"));
/*Создание массива, считывание всех ячеек .card*/
const slider = document.querySelector(".slider");
/*Считывание слайдера*/
const sliderContainer = document.querySelector(".slider__box");
const picture = Array.from(document.querySelectorAll(".pic"));
/*Создание массива*/
const sliderBtnLeft = document.querySelector(".slider__btn_left");
const sliderBtnRight = document.querySelector(".slider__btn_right");
const sliderClose = document.querySelector(".slider__close");

let cardIndex = -1;
/*Создание переменной*/
let pictureFull;

for (const card of cards) {
  card.addEventListener("click", (event) => {
    cardIndex = cards.indexOf(card);
    /*Определяет индекс ячейки по которой кликнули*/
    pictureFull = picture[cardIndex].cloneNode();
    /*Повторение вставляемой картинки*/
    pictureFull.style.objectFit = "contain";
    /*Полноразмерная картинка*/
    sliderContainer.append(pictureFull);
    /*Передача самой картинки (вставка в слайдер)*/
    slider.classList.add("active");
  });
}
/*Цикл для каждой ячейки при клике*/


function changePicture(dir) {
  if (dir === "left") {
    if (cardIndex > 0) {
      cardIndex--;
      /*Вычитаем единицу*/
    } else {
      cardIndex = cards.length - 1;
    }
    /*Вернуться к предыдущему значению*/
  } else if (dir === "right") {
    if (cardIndex < cards.length - 1) {
      cardIndex++;
    } else {
      cardIndex = 0;
    }
  }


  let newPictureFull = picture[cardIndex].cloneNode();
  /*Изменение картинок*/
  newPictureFull.style.objectFit = "contain";
  pictureFull.replaceWith(newPictureFull);
  /*Изменённая картинка*/
  pictureFull = newPictureFull;
}

//Кнопка закрытия

sliderClose.addEventListener("click", (event) => {
  slider.classList.remove("active");
  pictureFull.remove();
  newPictureFull.remove();

  //Кнопка "Влево"
  
});
sliderBtnLeft.addEventListener("click", (event) => {
  changePicture("left");
});

//Кнопка "Вправо"

sliderBtnRight.addEventListener("click", (event) => {
  changePicture("right");
});

