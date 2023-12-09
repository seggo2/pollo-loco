class ThrowableObject extends MovableObject {
    throw_sound = new Audio('audio/wurf.mp3')
    bottle_collision = new Audio('audio/aufprall_glas.mp3')

    salsa_Image = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png')
        this.loadImages(this.salsa_Image);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.throw();
    }
    throw() {
        this.throw_sound.play();
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.playAnimation(this.salsa_Image)
            this.x += 30;
        }, 25);
    }
}