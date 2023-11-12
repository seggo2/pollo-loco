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

    World;


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png')
        this.loadImages(this.images_walking);
        this.animate();
    }


    animate() {
        setInterval(() => {//laufen character
            if (this.World.keyboard.right) {
                this.x += this.speed;
                this.otherDirection=false;
            }
            if (this.World.keyboard.left) {
                this.x -= this.speed;
                this.otherDirection=true;
            }
            this.World.camera_x =-this.x;
        }, 1000 / 60);

        setInterval(() => {

            if (this.World.keyboard.right || this.World.keyboard.left) {
                let i = this.currentimage % this.images_walking.length;// das % wird modulu genannt welches dafür sorgt das wen das bild 5 erreicht hat -
                /////////////////////////////////////////////////////////wieder auf 0 springt es ist eine mathematische formel
                let path = this.images_walking[i];
                this.img = this.imagecache[path];
                this.currentimage++;
            }
        }, 40);
    }


    jump() {

    }
}