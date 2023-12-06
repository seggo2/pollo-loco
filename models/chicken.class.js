class Chicken extends MovableObject {
    y = 350;

    width = 60;

    height = 80;

    chicken_sound=new Audio('audio/chicken.mp3');

    images_walking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    chicken_sound = new Audio('audio/chicken.mp3')

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.loadImages(this.images_walking);
        this.x = 800 + Math.random() * 2000;
        this.speed = 0.2 + Math.random() * 0.5;
        this.animate()
        // this.chicken_sound.play();
    }


    animate() {
        setInterval(() => {
            this.moveLeft()
        }, 1000 / 60)
        setInterval(() => {
            this.playAnimation(this.images_walking)
        }, 250);
    }
}