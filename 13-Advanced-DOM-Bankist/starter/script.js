'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  section1.scrollIntoView({ behavior: 'smooth' });
  // console.log(e.target.getBoundingClientRect());
  // console.log(`Current scroll (${window.pageXOffset} : ${window.pageYOffset})`);
  // console.log(
  //   `${document.documentElement.clientHeight}:${document.documentElement.clientWidth} viewport`
  // );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior:'smooth',
  // });
});

// Page navigation

// 1. Add event listner to common parent ellement
// 2. Determinate what ellement originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
})


// Tabbed component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab')
  console.log(clicked);

  // Guard clause
  if (!clicked) return

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  tabsContent.forEach(t => t.classList.remove('operations__content--active'))

  // Active tab
  clicked.classList.add('operations__tab--active')

  // Activate content area
  const tabId = clicked.dataset.tab
  document.querySelector(`.operations__content--${tabId}`).classList.add('operations__content--active')
})

// Menu fade animation
const handleHover = function (e) {
  // console.log(this, e.currentTarget, e.target);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this
    })
    logo.style.opacity = this
  }
}

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))

// Sticky navigation: Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// }

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions)
// observer.observe(section1)

const header = document.querySelector('.header');

const stickyNav = function(entries) {
  const [entry] = entries
  console.log(entry);

  if(!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${getComputedStyle(nav).height}`
})
headerObserver.observe(header)

/*
// Sticky navigation
const initialCoords = section1.getBoundingClientRect()
console.log(initialCoords);

window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
})
*/

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//////////////////////////////

/*
// Selectiog ellements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('#section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

document.getElementsByClassName('btn');

// Creating and inserting ellements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved vunctionality and analytics.'
message.innerHTML =
  'We use cookied for improved vunctionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true/));

// header.before(message);
// header.after(message);

// Delete ellements
// const deleteCookie = document.querySelector('.btn--close-cookie').addEventListener('click', () => message.remove())

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orange');

const logo = document.querySelector('.nav__logo')
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'Beautiful minimalisst logo'

console.log(logo.designer);
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist')

console.log(logo.src);
console.log(logo.getAttribute('src')); 

const link = document.querySelector('.nav__link--btn')
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c')
logo.classList.remove('c')
logo.classList.toggle('c')
logo.classList.contains('c')

// Don`t use
logo.className = 'jonas'
*/

/*


btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section.getBoundingClientRect();
  console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());
  console.log(`Current scroll (${window.pageXOffset} : ${window.pageYOffset})`);
  console.log(
    `${document.documentElement.clientHeight}:${document.documentElement.clientWidth} viewport`
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior:'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);

  e.stopPropagation()
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('nav', e.target, e.currentTarget);
});
*/

/*
const h1 = document.querySelector('h1')

// Children
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white'
h1.lastElementChild.style.color = 'orangered'

// Parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'

h1.closest('h1').style.background = 'var(--gradient-primary)'

// Siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// Nodes
console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el){
  if(el !== h1) el.style.transform = 'scale(0.5)'
})
*/