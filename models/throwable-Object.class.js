class ThrowableObject extends MovableObject {
    throw_sound = new Audio('audio/wurf.mp3')

    splashed = false;

    mute=false;

    salsa_Image = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    salsa_splash = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];


    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png')
        this.loadImages(this.salsa_Image);
        this.loadImages(this.salsa_splash);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.throw();
    }
    throw() {
        let throwTime = new Date().getTime();
        if (!this.mute) {
            this.throw_sound.play();
        }
        this.speedY = 8;
        this.applyGravity();
        setInterval(() => {
                if (this.splashed == true) {
                    this.playAnimation(this.salsa_splash)
                    this.playAnimation(this.salsa_splash)
                    this.playAnimation(this.salsa_splash)
                    this.speedY += 1;
                    this.x += 0;
                    this.splashed = false
                } else {
                    this.playAnimation(this.salsa_Image)
                    this.x += 20;
                }
        }, 20);
    }
}