
let deg = 0;

setInterval(() => {
   deg += 45
   document.querySelector('.cube').style.transform = "rotate3d(1,2,1," + deg + "deg)";
   // document.querySelector('.back').style.transform = `rotateY(${ deg }deg) translateZ(200px)`
},1000);