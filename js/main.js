var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

document.querySelectorAll('.cadre').forEach((cadre) => {
   cadre.addEventListener('mouseover', () => {
      cadre.querySelector('.time-circle').classList.add('tc-colorize');
   });
   cadre.addEventListener('mouseout', () => {
      cadre.querySelector('.time-circle').classList.remove('tc-colorize');
   })
});

document.querySelectorAll('.progress-bar').forEach((bar) => {
   bar.style.width = bar.getAttribute('aria-valuenow') + "%";
});

document.querySelector('.backtoup').addEventListener('click', () => {
   window.scrollTo(0,document.body.scrollTop);
});

document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('.photo').forEach((face) => {
      face.style.transition = '1s';
   });
})


let avatar = document.querySelector('.avatar');
let me = document.querySelector('.me');
let fond = document.querySelector('.fond');

document.querySelector('.transition').addEventListener('mouseover', () => {
   me.style.transform = 'rotate3d(0,1,0,180deg)';
   fond.style.transform = 'rotate3d(0,1,0,180deg)';
   avatar.style.transform = 'rotate3d(0,1,0,180deg)';
});

document.querySelector('.transition').addEventListener('mouseout', () => {
   me.style.transform = 'rotate3d(0,1,0,0deg)';
   fond.style.transform = 'rotate3d(0,1,0,0deg)';
   avatar.style.transform = 'rotate3d(0,1,0,0deg)';
});

/*
let deg = 0;

setInterval(() => {
   deg += 45
   document.querySelector('.cube').style.transform = "rotate3d(1,2,1," + deg + "deg)";
},1000);

*/