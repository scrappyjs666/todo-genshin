import '../styles/style.css'

import './includes/test'

//swiper settings
const slider = document.querySelector('.swiper-container');
let mySwiper = new Swiper('.swiper-container', {
  spaceBetween: 10,
  slidesPerView: 5,
  slidesPerGroup: 2,
  speed: 500,
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  mousewheel: {
    sensitivity: 2,
  }
  });



//global const
const animation = document.querySelector('.animation');
const animationtext = document.querySelector('.animation-block__text');
const animation__image = document.querySelector('.animation__image');
const form = document.querySelector('.hero__form');
const formbtn = document.querySelector('.hero-form__button');
const hero__list = document.querySelector('.hero__list');
const btn__hero = document.querySelectorAll('.hero-list__btn');
const listitem = document.querySelectorAll('.hero-list__item');
const hero__input = document.querySelector('.hero__input');
const img__hero = document.querySelector('.img__hero');

//const style
const listyle = "hero-list__item";
const btnstyle = "hero-list__btn";
const textdecor ="textdecor";

//paimon random words
const randomPaimon = Math.floor(Math.random() * 4);
const randomArray = [
  "Ты самый милый странник!",
  "Я очень рад знакомству!",
  "Ты очень приятный собеседник!",
  "С тобой приятно иметь дело!",
];

animationtext.addEventListener('click', function() {
  animationtext.style.color = '#000';
  animationtext.innerHTML = (randomArray[Math.floor(Math.random() * 4)]);
});
animation__image.addEventListener('click', function() {
  animationtext.style.color = '#000';
  animationtext.innerHTML = (randomArray[Math.floor(Math.random() * 4)]);
});


//task  display
let todoList = [];
function createItem() {
  const todoText = hero__input.value;
  if (todoText.length >= 1 && todoList.length <= 10) {
    todoList.unshift(todoText);
    hero__input.value = "";
    localStorage.setItem("todoList", JSON.stringify(todoList));
    renderTodo();
  } else if(todoText.length >= 1) {
    animationtext.innerHTML = '10 задач - максимальное количество!';
    animationtext.style.color = '#ff0000';
    animationtext.style.fontSize = '12px';
  } else if(todoList.length <= 10) {
    animationtext.innerHTML = 'Введи какой-нибудь символ!';
    animationtext.style.color = '#ff0000';
    animationtext.style.fontSize = '13px';
  }
  hero__input.focus();
}

function renderTodo() {
  hero__list.innerHTML = "";
  todoList.forEach((text, index) => {
    const item = document.createElement("li");
    const itemButton = document.createElement("button");
    item.classList.add("hero-list__item");
    item.innerText = text;
    itemButton.classList.add("hero-list__btn");
    item.addEventListener("click", (event) => {
      item.classList.toggle('textdecor');
      hero__list.appendChild(item);
    });
    
    itemButton.addEventListener("click", (event) => {
      todoList.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(todoList));
      event.stopPropagation();
      renderTodo();
    });
    item.appendChild(itemButton);
    hero__list.appendChild(item);
  });
}

formbtn.addEventListener("click", () => {
  createItem();
});

hero__input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    createItem();
  }
});

if (localStorage.getItem("todoList")) {
  todoList = JSON.parse(localStorage.getItem("todoList"));
  setTimeout(() => {
    renderTodo();
  });
}

//delete default task
btn__hero.forEach(function(item) {
    item.addEventListener("click", function(event){
      item.parentNode.parentNode.removeChild(item.parentNode);
      event.stopPropagation();
    });
});

//changed default task item(text-decor)
listitem.forEach(listitem => {
  listitem.addEventListener('click', function() {
    listitem.classList.toggle('textdecor');
    todoList.push(listitem);
    hero__list.append(listitem);
  })
})


//bgimage after reload  page
const bgimage = document.querySelectorAll('.bg__image');

const changebg = (event) => {
  let bgitem = (event.target.src);
  console.log(bgitem);
  img__hero.setAttribute('src', bgitem);
  localStorage.setItem("bgitem", JSON.stringify(bgitem));
}

bgimage.forEach(bgimage => {
  bgimage.addEventListener('click', changebg);
})

if (localStorage.getItem("bgitem")) {
  const bgitem = JSON.parse(localStorage.getItem("bgitem"));
  console.log(bgitem);
  img__hero.setAttribute('src', bgitem);
}