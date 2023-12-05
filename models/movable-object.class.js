class MovableObject extends drawableobject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    lastHit = 0;

    applyGravity() {//gravitaiton beim springen fallen etc...
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }

        }, 1000 / 60);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true
        } else {
            return this.y < 180
        }
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;// zeit difference in ms seit dem letztem treffer
        timepassed = timepassed / 1000; // ms in sekunden umrechnen
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height
    }

    playAnimation(images) {
        let i = this.currentimage % images.length;// das % wird modulu genannt welches dafür sorgt das wen das bild 5 erreicht hat -
        /////////////////////////////////////////////////////////wieder auf 0 springt es ist eine mathematische formel
        let path = images[i];
        this.img = this.imagecache[path];
        this.currentimage++;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 20;
    }
}
