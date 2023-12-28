class endbossBar extends drawableobject {
    images_endboss = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ]

    percentage_endboss = 100;

    constructor() {
        super();
        this.loadImages(this.images_endboss)
        this.setpercentage_endboss(100);
        this.x = 800;
        this.y = 100;
        this.width = 200;
        this.height = 60;
    }
    /**
    * loads the img 
    * @param {number} percentage_health 
    */
    setpercentage_endboss(percentage_endboss) {
        this.percentage_endboss = percentage_endboss;
        let path = this.images_endboss[this.resolveImageIndex_health()];
        this.img = this.imagecache[path];
    }
    /**
     * returns the img who should be showen 
     */
    resolveImageIndex_health() {
        if (this.percentage_endboss == 100) {
            return 5;
        } else if (this.percentage_endboss > 80) {
            return 4;
        } else if (this.percentage_endboss > 60) {
            return 3;
        } else if (this.percentage_endboss > 40) {
            return 2;
        } else if (this.percentage_endboss > 20) {
            return 1;
        } else {
            (this.percentage_endboss == 0)
            return 0;
        }
    }
}