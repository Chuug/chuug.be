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
