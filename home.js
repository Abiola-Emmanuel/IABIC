new PureCounter({
  selector: ".purecounter",

  start: 0,
  end: 10,
  duration: 1,
  delay: 10,
  once: false,
  pulse: false,
  decimals: 0,
  legacy: true,
});

new PureCounter({
  selector: '.purecounter2',

  start: 0,
  end: 300,
  duration: 1,
  delay: 10,
  once: false,
  pulse: false,
  decimals: 0,
  legacy: true,
})

new PureCounter({
  selector: '.purecounter3',

  start: 0,
  end: 5,
  duration: 1,
  delay: 10,
  once: false,
  pulse: false,
  decimals: 0,
  legacy: true,
})

AOS.init({
  once: true
})

const menuOverlay = document.getElementById('menuOverlay');
const overlayButton = document.querySelector('.menuOverlay button')

function showMenu() {
  menuOverlay.style.width = '50%';
  overlayButton.style.display = 'block'
}

function closeMenu() {
  menuOverlay.style.width = '0';
  overlayButton.style.display = 'none'
}

const title = document.querySelector('.title')
const textWhite = document.getElementById('text-white')
const numLeft = document.querySelector('.num-left .title')
const numLeft2 = document.querySelector('.num-left p')
const missionLeft = document.querySelector('.mission-left h2');
const workTitle = document.querySelector('.work .title')
const coreP = document.querySelector('.core .d-white')
const coreP2 = document.querySelector('.core .d-white2')
const coreP3 = document.querySelector('.core .d-white3')
const coreP4 = document.querySelector('.core .d-white4')
const coreP5 = document.querySelector('.core .d-white5')

function darkMode() {
  const body = document.getElementById('body');
  const modeIcon = document.querySelector('.mode i');

  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    modeIcon.className = 'fa fa-tree';
  } else {
    body.classList.add('dark');
    modeIcon.className = 'fa fa-sun-o';
    numLeft.style.color = 'white'
    numLeft2.style.color = 'white'
    missionLeft.style.color = 'white'
    workTitle.style.color = 'white'
    coreP.style.color = 'white'
    coreP2.style.color = 'white'
    coreP3.style.color = 'white'
    coreP4.style.color = 'white'
    coreP5.style.color = 'white'
  }
}

const footDate = document.getElementById('date')

const getDate = new Date();
const year = getDate.getFullYear()

footDate.innerHTML = year

