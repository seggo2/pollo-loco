class statusbar extends drawableobject {

    IMAGES_health = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
    ]

    percentage_health = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_health);
        this.setpercentage_health(100);
        this.y = 0;
        this.x = 20;
        this.width = 200;
        this.height = 60;
    }
    /**
     * loads the img 
     * @param {number} percentage_health 
     */
    setpercentage_health(percentage_health) {
        this.percentage_health = percentage_health;
        let path = this.IMAGES_health[this.resolveImageIndex_health()];
        this.img = this.imagecache[path];
    }
    /**
     * returns the img who should be showen 
     */
    resolveImageIndex_health() {
        if (this.percentage_health == 100) {
            return 5;
        } else if (this.percentage_health > 80) {
            return 4;
        } else if (this.percentage_health > 60) {
            return 3;
        } else if (this.percentage_health > 40) {
            return 2;
        } else if (this.percentage_health > 20) {
            return 1;
        } else {
            (this.percentage_health == 0)
            return 0;
        }
    }

}

