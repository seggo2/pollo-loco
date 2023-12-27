class drawableobject {

    img;
    imagecache = {};
    currentimage = 0;
    x = 120;
    y = 250;
    height = 150;
    width = 100;

    /**
     * loading images function
     * @param {string} path 
     */

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    /**
     * images getting drawed functions
     * @param {map} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    }
    /**
     * hitbox funktion which is not active right now is needed when i want to implement more stuff in the game to see the hitbox
     * @param {map} ctx 
     */
    drawFrame(ctx) {
        //hitbox//
        if (this instanceof character || this instanceof Endboss) {
            ctx.beginPath();//
            ctx.lineWidth = "3";//
            ctx.strokeStyle = "blue";//
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right, this.height - this.offset.bottom,);//
            ctx.stroke();//
        }
        //hitbox//
    }


/**
 * multiple images gettting loaded
 * @param {string} arr 
 */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imagecache[path] = img;
        });
    }
}