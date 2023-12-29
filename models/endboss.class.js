class Endboss extends MovableObject {
    y = 150;

    width = 200;

    height = 300;

    energy = 100;

    died = false;

    hadFirstContact = false;

    mute = false;

    atackTouch = false;

    endboss_Sound = new Audio('audio/441364_6142149-lq.mp3')

    endGame = false;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    };

    images_alert = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ]

    images_walk = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    images_hurt = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    images_dead = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    images_atack = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];

    constructor() {
        super().loadImage(this.images_walk[0])
        this.loadImages(this.images_walk);
        this.loadImages(this.images_alert);
        this.loadImages(this.images_atack);
        this.loadImages(this.images_hurt);
        this.loadImages(this.images_dead);
        this.x = 2500;
        this.animate()
    }
    /**
     * overall animate functions 
     */
    animate() {
        setInterval(() => {
            this.conditions();
        }, 120)
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.images_dead)
                this.died = true;
            } else if (this.isHurt()) {
                this.playAnimation(this.images_hurt)
            }
            if (this.atackTouch == true) {
                this.playAnimation(this.images_atack)
                this.atackTouch = false;
            }
        }, 60);

    }
    /**
     * condition functions for game end and walking
     */
    conditions() {
        if (this.hadFirstContact == true) {
            this.playAnimation(this.images_walk)
            this.speed = 22;
            this.moveLeft()
          
            this.endboss_Sound.play();
        } else {
            this.playAnimation(this.images_alert)
        }

        if (this.died == true) {
            setTimeout(() => {
                this.y = 500;
                gameOver()
            }, 500);
        }
        if (this.x < 150) {
            this.hadFirstContact = false;
            this.speed = 0
            this.endGame = true;
        }
        if (this.mute == true) {
            this.endboss_Sound.pause();
        }
    }

}