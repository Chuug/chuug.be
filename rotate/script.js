
let deg = 0;

setInterval(() => {
   deg += 45
   // 
   // document.querySelector('.back').style.transform = `rotateY(${ deg }deg) translateZ(200px)`
},1000);

let cube = document.querySelector('.cube')
let toggle = false

cube.addEventListener('mouseover', () => {
   cube.style.transform = "rotate3d(1,0,0,-90deg)"
})

cube.addEventListener('mouseout', () => {
   cube.style.transform = "rotate3d(1,0,0,0deg)"
   resetCube()
})

cube.addEventListener('click', () => {
   cube.style.width = "400px"
   cube.style.height = "300px"
})

const resetCube = () => {
   cube.style.width = "200px"
   cube.style.height = "50px"
}

function getPos(el) {
   // yay readability
   for (var lx=0, ly=0;
        el != null;
        lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
   return {x: lx,y: ly};
}