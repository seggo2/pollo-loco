class drawableobject {

    img;
    imagecache = {};
    currentimage = 0;
    x = 120;
    y = 250;
    height = 150;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    }

    drawFrame(ctx) {
        //hitbox//
        if (this instanceof character  || this instanceof collectable) {
            ctx.beginPath();//
            ctx.lineWidth = "3";//
            ctx.strokeStyle = "blue";//
            ctx.rect(this.x, this.y, this.width, this.height);//
            ctx.stroke();//
        }
        //hitbox//
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imagecache[path] = img;
        });
    }
}