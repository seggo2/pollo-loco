class character extends MovableObject {

    height = 250;

    speed = 4;

    width = 100;

    y = 180;

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

    World;

    walking_Sound = new Audio('audio/footstep.mp3')

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png')
        this.loadImages(this.images_walking);
        this.loadImages(this.images_jump);
        this.applyGravity();
        this.animate();
    }


    animate() {
        setInterval(() => {//laufen character
            this.walking_Sound.pause();
            if (this.World.keyboard.right && this.x < this.World.level.level_end_x) {
                this.moveRight();
                this.walking_Sound.play();
            }
            if (this.World.keyboard.left && this.x > -500) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_Sound.play();
            }

            if (this.World.keyboard.space && !this.isAboveGround()) {
                this.jump();
            }

            this.World.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.images_jump)

            } else {

                if (this.World.keyboard.right || this.World.keyboard.left) {
                    this.playAnimation(this.images_walking)
                }
            }
        }, 60);

    }

}