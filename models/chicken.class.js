class Chicken extends MovableObject {
    y = 350;

    width = 60;

    height = 80;


    images_walking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    chicken_sound =new Audio('audio/chicken.mp3')

        constructor() {
    super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
    this.loadImages(this.images_walking);
    this.x = 400 + Math.random() * 500;
    this.speed = 0.2 + Math.random() * 0.5;
    this.animate()
}


animate() {
    this.moveLeft()
    setInterval(() => {
        this.playAnimation(this.images_walking)
    }, 250);
}
}