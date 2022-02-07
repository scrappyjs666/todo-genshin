import '../styles/style.css'

import './includes/test'
const animation = document.querySelector('.animation');
const animationtext = document.querySelector('.animation-block__text');
const form = document.querySelector('.hero__form');
const formbtn = document.querySelector('.hero-form__button');
const hero__list = document.querySelector('.hero__list');
const btn__hero = document.querySelectorAll('.hero-list__btn');
const listitem = document.querySelectorAll('.hero-list__item');
const hero__input = document.querySelector('.hero__input');
const li = document.querySelector('li');


//const style
const listyle = "hero-list__item";
const btnstyle = "hero-list__btn";

//paimon random words
const randomPaimon = Math.floor(Math.random() * 4);
const randomArray = [
  "Ты самый милый странник!",
  "Я очень рад знакомству!",
  "Ты очень приятный собеседник!",
  "С тобой приятно иметь дело!"
];

animation.addEventListener('click', function() {
  animationtext.innerHTML = (randomArray[Math.floor(Math.random() * 4)]);
});


// task display



const resultinputvalue = function() {
  const resultinput = hero__input.value;
  console.log(resultinput)
};
formbtn.addEventListener('click', resultinputvalue);




function makeUser(resultinputvalue) {
  return {
    const resultinputvalue1 = resultinputvalue;
  };
}

animation.addEventListener('click', makeUser);



