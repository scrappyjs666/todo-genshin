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


//form newtask
form.addEventListener('submit', formhandler);

function formhandler(event) {
  event.preventDefault();
  const taskText = hero__input.value;
  const newli = document.createElement('li');
  newli.innerText = taskText;
  hero__list.append(newli);

  const newbtn = document.createElement('button');
  newli.append(newbtn);
  newli.className = listyle;
  newbtn.className = btnstyle; 
}



// btn__hero.forEach(btn__hero => {
//   btn__hero.addEventListener('click', function(){
//     btn__hero.remove();
//     listitemdelete();
//   })
// })

// function listitemdelete() {
//   listitem.forEach(listitem => {
//   listitem.addEventListener('click', function(){
//     listitem.remove();
//   })
// })
// };

let targetli = (event) => {
    const removeItems = event.target;
    console.log(removeItems);
    if (event.target.matches(".hero-list__btn")) {
        removeItems.remove();
    } 
}
hero__list.addEventListener('click', targetli);


// listitem.forEach(listitem => {
//   listitem.addEventListener('click', function(){
//     alert('1');
//   })
// })







