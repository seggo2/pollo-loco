class character extends MovableObject {
    height = 250;
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



    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png')
        this.loadImages(this.images_walking);
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentimage % this.images_walking.length;// das % wird modulu genannt welches dafür sorgt das wen das bild 5 erreicht hat -
            /////////////////////////////////////////////////////////wieder auf 0 springt es ist eine mathematische formel
            let path = this.images_walking[i];
            this.img = this.imagecache[path];
            this.currentimage++;
        }, 200);
    }

    jump() {

    }
}