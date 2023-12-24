let canvas;

let world;

let keyboards = new keyboard();

background_sound = new Audio('audio/background.mp3');

let startgame = false;

function init() {
   // this.background_sound.play()
   if (!startgame) {
      startScreen();
   } else {
      start();
      canvas = document.getElementById('canvas');
      world = new World(canvas, keyboard);
   }
}

function startScreen() {
   let canvas = document.getElementById('fullscreen');
   canvas.innerHTML = "";
   canvas.innerHTML += `
      <div class="startScreen">
         <img  class="startScreenImage"  src='img/9_intro_outro_screens/start/startscreen_1.png'>
         <img  onclick="howTo()" class="controller"  src='img/controller-1784573_1280.png'>
         <button onclick="gameStart()" class="buttonPlay">PLAY</button>
         <img  onclick="informations()" class="information"  src='img/info-803717_1280.png'>
         <img  onclick="mute()" class="music"  src='img/music.png'>
         <img class="fullScreenStart" onclick="fullscreen()" src="img/fullscreen.png" alt="">
      </div>`;
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

function fullscreen() {
   let element = document.getElementById('fullscreen')
   enterFullscreen(element)
}

function enterFullscreen(element) {
   if (element.requestFullscreen) {
      element.requestFullscreen();
   } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
      element.msRequestFullscreen();
   } else if (element.webkitRequestFullscreen) {  // iOS Safari
      element.webkitRequestFullscreen();
   }
}


function exitFullscreen() {
   if (document.exitFullscreen) {
      document.exitFullscreen();
   } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
   }
}

function mute() {
   this.background_sound.pause()
}

function howTo() {
   document.getElementById(`howPlay`).classList.toggle('d-none');
   let canvas = document.getElementById('howPlay');
   canvas.innerHTML = "";
   canvas.innerHTML += `
         <b>To Walk and To Jump </b> 
         <img src="img/pngwing.com.png" alt="">
         <img src="img/space-button-icon.png" alt="">
         <b>Press D to Atack</b>
  `;
}

function informations() {
   document.getElementById(`howPlay`).classList.toggle('d-none');
   let canvas = document.getElementById('howPlay');
   canvas.innerHTML = "";
   canvas.innerHTML += `
   <div class="inforStart">
         <b>1.To win this game u have to defeat the Endboss<br>
         2.if he reaches the start Point of the character or kills
         the character you lose.!<br>3. but be aware! u only have Limited 
         Throwable Bottles which u have to Collect in order to Throw One! </b>
   </div>
  `;
}

function toggleDnone(name) {
   document.getElementById(`${name}`).classList.toggle('d-none');
}
function gameStart() {
   startgame = true;
   init();
}
function start() {
   let canvas = document.getElementById('fullscreen');
   canvas.innerHTML = "";
   canvas.innerHTML = ` <canvas id="canvas" width="720" height="480"></canvas>
      <div class="fullscreen">
          <img onclick="mute()" src="img/music.png" alt="">
          <img onclick="fullscreen()" src="img/fullscreen.png" alt="">
      </div>`;
}