class MovableObject extends drawableobject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    lastHit = 0;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    };
    /**
     * gives thinks who can jump gravity pulls it down 
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }


        }, 1000 / 60);
    }
    /**
     * lets bottle fly above 180 
     * @returns 
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true
        } else {
            return this.y < 180
        }
    }
    /**
     * hit function getting damage in this case 5 
     */
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    /**
     * ishurt function 
     * @returns 
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;// zeit difference in ms seit dem letztem treffer
        timepassed = timepassed / 1000; // ms in sekunden umrechnen
        return timepassed < 1;
    }
    /**returns 0
     * 
     * @returns actuall energy 
     */
    isDead() {
        return this.energy == 0;
    }
    /**
     * colliding function
     * @param {class} mo 
     * @returns 
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }
    /**
     * animation functions 
     * @param {string} images 
     */
    playAnimation(images) {
        let i = this.currentimage % images.length;// das % wird modulu genannt welches dafür sorgt das wen das bild 5 erreicht hat -
        /////////////////////////////////////////////////////////wieder auf 0 springt es ist eine mathematische formel
        let path = images[i];
        this.img = this.imagecache[path];
        this.currentimage++;
    }
    /**
    * right walking speed 
    */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }
    /**
     * left walking speed 
     */
    moveLeft() {
        this.x -= this.speed;
    }
    /**
     * jump height and speed
     */
    jump() {
        this.speedY = 25;
    }
}
