class MovableObject {

    x = 120;

    y = 250;

    height = 150;

    width = 100;

    img;

    imagecache = {};

    currentimage = 0;

    speed = 0.15;

    otherDirection = false;

    speedY = 0;

    acceleration = 0.5;


    applyGravity() {//gravitaiton beim springen fallen etc...
        setInterval(() => {
            if (this.isAboveGround()) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }

        }, 1000 / 60);
    }


    isAboveGround() {
        return this.y < 180
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imagecache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentimage % this.images_walking.length;// das % wird modulu genannt welches dafür sorgt das wen das bild 5 erreicht hat -
        /////////////////////////////////////////////////////////wieder auf 0 springt es ist eine mathematische formel
        let path = images[i];
        this.img = this.imagecache[path];
        this.currentimage++;
    }


    moveRight() {

    }


    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }
}
