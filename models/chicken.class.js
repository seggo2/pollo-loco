class Chicken extends MovableObject {
    y = 350;

    width = 60;

    height = 80;

    energy = 5;

    chicken_sound = new Audio('audio/chicken.mp3');
    
    offset={
        top:0,
        bottom:0,
        left:0,
        right:0,
    };

    isdead=false;

    images_walking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    images_dead = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.loadImages(this.images_walking);
        this.loadImages(this.images_dead);
        this.x = 800 + Math.random() * 2000;
        this.speed = 0.6 + Math.random() * 1;
        this.animate()
    }


    animate() {
        setInterval(() => {
            this.moveLeft()
        }, 1000 / 60)

        setInterval(() => {
            this.playAnimation(this.images_walking)
        }, 250);

        setInterval(() => {
            if (this.isDead()) {
                this.speed = 0
                this.playAnimation(this.images_dead)
                this.isdead=true;
            }
        }, 250);
    }
}
