let canvas;

let world;

let keyboards = new keyboard();


function init() {
   canvas = document.getElementById('canvas');
   world = new World(canvas, keyboard);

}


window.addEventListener("keydown", (e) => {
   if (e.keyCode == 37) {
      keyboard.left = true;
   }
   if (e.keyCode == 39) {
      keyboard.right = true;
   }
   if (e.keyCode == 38) {
      keyboard.up = true;
   }
   if (e.keyCode == 40) {
      keyboard.down = true;
   }
   if (e.keyCode == 32) {
      keyboard.space = true;
   }
   if (e.keyCode == 68) {
      keyboard.d = true;
   }
 
});


window.addEventListener("keyup", (e) => {
   if (e.keyCode == 37) {
      keyboard.left = false;
   }
   if (e.keyCode == 39) {
      keyboard.right = false;
   }
   if (e.keyCode == 38) {
      keyboard.up = false;
   }
   if (e.keyCode == 40) {
      keyboard.down = false;
   }
   if (e.keyCode == 32) {
      keyboard.space = false;
   }
   if (e.keyCode == 68) {
      keyboard.d = false;
   }
   
});

function fullscreen(){
   let element=document.getElementById('fullscreen')
   enterFullscreen(element)
}

function enterFullscreen(element) {
   if(element.requestFullscreen) {
     element.requestFullscreen();
   } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
     element.msRequestFullscreen();
   } else if(element.webkitRequestFullscreen) {  // iOS Safari
     element.webkitRequestFullscreen();
   }
 }


 function exitFullscreen() {
   if(document.exitFullscreen) {
     document.exitFullscreen();
   } else if(document.webkitExitFullscreen) {
     document.webkitExitFullscreen();
   }
 }