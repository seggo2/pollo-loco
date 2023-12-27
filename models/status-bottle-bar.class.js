class bottlebar extends drawableobject {
    images_bottle = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
    ]
    percentage_bottle = 0;

    constructor() {
        super();
        this.loadImages(this.images_bottle);
        this.setpercentage_bottle(0);
        this.y = 90;
        this.x = 20;
        this.width = 200;
        this.height = 60;
    }
    /**
    * loads the img 
    * @param {number} percentage_health 
    */
    setpercentage_bottle(percentage_bottle) {
        this.percentage_bottle += percentage_bottle;
        let path = this.images_bottle[this.resolveImageIndex_bottle()];
        this.img = this.imagecache[path];
    }
    /**  
    * returns the img who should be showen 
    */
    resolveImageIndex_bottle() {
        if (this.percentage_bottle > 100) {
            return 5;
        } else if (this.percentage_bottle > 80) {
            return 4;
        } else if (this.percentage_bottle > 60) {
            return 3;
        } else if (this.percentage_bottle > 40) {
            return 2;
        } else if (this.percentage_bottle > 20) {
            return 1;
        } else {
            (this.percentage_bottle == 0)
            return 0;
        }
    }
}