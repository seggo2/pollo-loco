class character extends MovableObject {

    height = 250;

    speed = 5;

    width = 100;

    y = 180;

    energy = 100;

    died = false;

    images_walking = [
        ' img/2_character_pepe/2_walk/W-21.png',
        ' img/2_character_pepe/2_walk/W-22.png',
        ' img/2_character_pepe/2_walk/W-23.png',
        ' img/2_character_pepe/2_walk/W-24.png',
        ' img/2_character_pepe/2_walk/W-25.png',
        ' img/2_character_pepe/2_walk/W-26.png',
    ];

    images_jump = [
        ' img/2_character_pepe/3_jump/J-31.png',
        ' img/2_character_pepe/3_jump/J-32.png',
        ' img/2_character_pepe/3_jump/J-33.png',
        ' img/2_character_pepe/3_jump/J-34.png',
        ' img/2_character_pepe/3_jump/J-35.png',
        ' img/2_character_pepe/3_jump/J-36.png',
        ' img/2_character_pepe/3_jump/J-37.png',
        ' img/2_character_pepe/3_jump/J-38.png',
        ' img/2_character_pepe/3_jump/J-39.png',
    ];

    images_dead = [
        ' img/2_character_pepe/5_dead/D-51.png',
        ' img/2_character_pepe/5_dead/D-52.png',
        ' img/2_character_pepe/5_dead/D-53.png',
        ' img/2_character_pepe/5_dead/D-54.png',
        ' img/2_character_pepe/5_dead/D-55.png',
        ' img/2_character_pepe/5_dead/D-56.png',
        ' img/2_character_pepe/5_dead/D-57.png',
    ];

    images_hurt = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];

    offset = {
        top: 100,
        bottom: 70,
        left: 20,
        right: 50,
    };

    World;

    walking_Sound = new Audio('audio/footstep.mp3')
    jumping_audio = new Audio('audio/jump.mp3')

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png')
        this.loadImages(this.images_walking);
        this.loadImages(this.images_jump);
        this.loadImages(this.images_dead);
        this.loadImages(this.images_hurt);
        this.applyGravity();
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.x > 2000 && !this.World.endboss.hadFirstContact) {
                this.World.endboss.hadFirstContact = true;
            }
        }, 1000 / 60)

        setInterval(() => {//laufen character
            this.walking_Sound.pause();
            if (this.World.keyboard.right && this.x < this.World.level.level_end_x) {
                this.moveRight();
                this.walking_Sound.play();
            }
            if (this.World.keyboard.left && this.x > -0) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_Sound.play();
            }

            if (this.World.keyboard.space && !this.isAboveGround()) {
                this.jump();
                this.jumping_audio.play();
            }
            if (this.died == true) {
                this.World.keyboard.right = false
                this.World.keyboard.left = false
                this.World.keyboard.space = false
                setTimeout(() => {
                    this.y = 500;
                }, 1000);
            }
            if (this.x < 2200) {
                this.World.camera_x = -this.x + 100;
            }
        }, 1000 / 60);

        setInterval(() => {

            if (this.isDead()) {

                this.playAnimation(this.images_dead)
                this.died = true;

            } else if (this.isHurt()) {

                this.playAnimation(this.images_hurt)

            } else if (this.isAboveGround()) {
                this.playAnimation(this.images_jump)

            } else {

                if (this.World.keyboard.right || this.World.keyboard.left) {
                    this.playAnimation(this.images_walking)
                }
            }
        }, 60);

    }
    mute(){
        this.walking_Sound.pause()
        this.jumping_audio.pause()
      }

}