let canvas;

let world;

let keyboards = new keyboard();

background_sound = new Audio('audio/background.mp3');

let startgame = false;

retry = false;

/**
 * init function which commands what starts first and when
 */
function init() {
   // this.background_sound.play()
   if (!startgame) {
      if (retry == true) {
         retryScreen()
      } else {
         startScreen();
      }
   } else {
      start();
      canvas = document.getElementById('canvas');
      world = new World(canvas, keyboard);
   }
}

/**
 * html start screeen
 */
function startScreen() {
   let canvas = document.getElementById('fullscreen');
   canvas.innerHTML = "";
   canvas.innerHTML += `
      <div class="startScreen">
         <img  class="startScreenImage"  src='img/9_intro_outro_screens/start/startscreen_1.png'>
         <img  onclick="howTo()" class="controller"  src='img/controller-1784573_1280.png'>
         <button onclick="gameStart()" class="buttonPlay">PLAY</button>
         <img  onclick="informations()" class="information"  src='img/info-803717_1280.png'>
         <img  onclick="muteBackground()" class="music"  src='img/music.png'>
         <img class="fullScreenStart" onclick="fullscreen()" src="img/fullscreen.png" alt="">
      </div>`;
}

/**
 * game won html
 */
function winGame() {
   let canvas = document.getElementById('fullscreen');
   canvas.innerHTML = "";
   canvas.innerHTML = `  <div class="startScreen">
   <img  class="startScreenImage"  src='img/9_intro_outro_screens/game_over/game over.png'>
   <button onclick="winStart()" class="buttonPlay">Win!</button>
</div>`;
}

function winStart() {
   retry = false
   startgame = true;
   location.reload();
}

/**
 * html gameover screen
 */
function retryScreen() {
   let canvas = document.getElementById('fullscreen');
   canvas.innerHTML = "";
   canvas.innerHTML = `  <div class="startScreen">
   <img  class="startScreenImage"  src='img/9_intro_outro_screens/game_over/you lost.png'>
   <button onclick="gameStart()" class="buttonPlay">Retry</button>
</div>`;
}

/**
 * id for enter fullscreeen function
 */
function fullscreen() {
   let element = document.getElementById('fullscreen')
   enterFullscreen(element)
}

/**
 * enter fullscreen function
 * @param {id} element 
 */
function enterFullscreen(element) {
   if (element.requestFullscreen) {
      element.requestFullscreen();
   } else if (element.msRequestFullscreen) {    
      element.msRequestFullscreen();
   } else if (element.webkitRequestFullscreen) { 
      element.webkitRequestFullscreen();
   }
}

/**
 * exit fullscreen function
 */
function exitFullscreen() {
   if (document.exitFullscreen) {
      document.exitFullscreen();
   } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
   }
}

/**
 * mute the sound function
 */
function mute() {
   this.background_sound.pause()
   world.character.mute = true;
   world.endboss.mute = true;
   world.mute = true;
}

/**
 * mutes only background at start screen
 */
function muteBackground() {
   this.background_sound.pause()
}
/**
 * html for how to controlle the game
 */
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

/**
 * information html to now how to play the game
 */
function informations() {
   document.getElementById(`howPlay`).classList.toggle('d-none');
   let canvas = document.getElementById('howPlay');
   canvas.innerHTML = "";
   canvas.innerHTML += `
   <div class="inforStart">
         <b>1.To win this game u have to defeat the Endboss<br>
         2.if he reaches the start Point of the character or kills
         the character you lose.!<br>3. but be aware! u only have Limited 
         Throwable Bottles which u have to Collect in order to Throw One This is your only Damage Resource! </b>
   </div>
  `;
}

/**
 * toggles d-none class
 * @param {id} name 
 */
function toggleDnone(name) {
   document.getElementById(`${name}`).classList.toggle('d-none');
}

/**
 * gamestart function 
 */
function gameStart() {
   if (retry == true) {
      retry = false;
      location.reload();
   } else {
      startgame = true;
      init();
   }
}

/**
 * start screeen html
 */
function start() {
   let canvas = document.getElementById('fullscreen');
   canvas.innerHTML = "";
   canvas.innerHTML = ` <canvas id="canvas" width="720" height="480"></canvas>
      <div class="fullscreen">
          <img class="mutePhone" onclick="mute()" src="img/music.png" alt="">
          <img onclick="fullscreen()" src="img/fullscreen.png" alt="">
      </div>
      <div  id="positionSmartphone" class="positionSmartphone">
      <div class="leftRight">
          <img ontouchstart="eventlistenerPhone()" id="leftKey" src="img/left-arrow-key.png" alt="">
          <img ontouchstart="eventlistenerPhone()" id="righttKey" src="img/right-arrow (1).png" alt="">
      </div>
      <div class="jumpThrow">
          <img ontouchstart="eventlistenerPhone()" id="upKey" src="img/up-arrow.png" alt="">
          <img ontouchstart="eventlistenerPhone()" id="throwKey" src="img/arrow.png" alt="">
      </div>`;
}

/**
 * gameover function switches variables 
 * @returns true
 */
function gameOver() {
   if (retry == true) {
      return true
   } else {
      if (world.character.died == true) {
         startgame = false;
         retry = true;
         world = "";
         world.character = "";
         init()
      } else {
         if (world.endboss.died == true) {
            startgame = false;
            retry = true;
            world = "";
            world.character = "";
            winGame();
         }
      }
   }
}

/**
 * event listener for smartphones
 */
function eventlistenerPhone() {

   document.getElementById('leftKey').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.left = true;
   });
   document.getElementById('leftKey').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.left = false;
   });
   document.getElementById('righttKey').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.right = true;
   });
   document.getElementById('righttKey').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.right = false;
   });
   document.getElementById('upKey').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.space = true;
   });
   document.getElementById('upKey').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.space = false;
   });
   document.getElementById('throwKey').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.d = true;
   });
   document.getElementById('throwKey').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.d = false;
   });
}

/**
 * keyboard press variables
 */
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

/**
 * keyboard press variables
 */
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