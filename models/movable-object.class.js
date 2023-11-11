class MovableObject {
    x = 120;
    y = 250;
    height = 150;
    width = 100;
    img;
    imagecache = {};
    currentimage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imagecache[path]=img;
        });
    }
    moveRight() {

    }

    moveLeft() {

    }
}
