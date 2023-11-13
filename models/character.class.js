class character extends MovableObject {

    height = 250;
    speed = 4;
    width = 100;

    y = 80;

    images_walking = [
        ' img/2_character_pepe/2_walk/W-21.png',
        ' img/2_character_pepe/2_walk/W-22.png',
        ' img/2_character_pepe/2_walk/W-23.png',
        ' img/2_character_pepe/2_walk/W-24.png',
        ' img/2_character_pepe/2_walk/W-25.png',
        ' img/2_character_pepe/2_walk/W-26.png',
    ];

    World;

    walking_Sound = new Audio('audio/footstep.mp3')

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png')
        this.loadImages(this.images_walking);
        this.applyGravity();
        this.animate();
    }


    animate() {
        setInterval(() => {//laufen character
            this.walking_Sound.pause();
            if (this.World.keyboard.right && this.x < this.World.level. level_end_x) {
                this.x += this.speed;
                this.otherDirection=false;
                this.walking_Sound.play();
            }
            if (this.World.keyboard.left && this.x >-500 ) {
                this.x -= this.speed;
                this.otherDirection=true;
                this.walking_Sound.play();
            }
            this.World.camera_x =-this.x + 100;
        }, 1000 / 60);

        setInterval(() => {

            if (this.World.keyboard.right || this.World.keyboard.left) {
              this.playAnimation(this.images_walking)
            }
        }, 40);
    }


    jump() {

    }
}