class Chicken extends MovableObject {
    y = 350;

    width = 60;

    height = 80;
  

    images_walking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];


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
            let i = this.currentimage % this.images_walking.length;
            let path = this.images_walking[i];
            this.img = this.imagecache[path];
            this.currentimage++;
        }, 250);
    }
}