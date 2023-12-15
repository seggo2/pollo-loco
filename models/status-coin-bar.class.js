class coinbar extends drawableobject {
    images_coin = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ]

    percentage_coin = 0;

    constructor() {
        super();
        this.loadImages(this.images_coin)
        this.setpercentage_coin(0);
        this.x = 20;
        this.y = 45;
        this.width = 200;
        this.height = 60;
    }

    setpercentage_coin(percentage_coin) {
        this.percentage_coin += percentage_coin;
        let path = this.images_coin[this.resolveImageIndex_coin()];
        this.img = this.imagecache[path];
    }

    resolveImageIndex_coin() {
        if (this.percentage_coin == 100) {
            return 5;
        } else if (this.percentage_coin > 80) {
            return 4;
        } else if (this.percentage_coin > 60) {
            return 3;
        } else if (this.percentage_coin > 40) {
            return 2;
        } else if (this.percentage_coin > 20) {
            return 1;
        } else {
            (this.percentage_coin == 0)
            return 0;
        }
    }
}