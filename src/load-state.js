//
let LoadState = {

    loadingBarFull: null,
    loadText: null,
    sfx_key: null,

    //
    init: function() {
        game.load.onFileComplete.add(this.fileComplete, this);
        game.load.onLoadComplete.add(this.loadComplete, this);
    },

    //
    create: function() {
        game.load.image('bg_home_0', 'assets/bg_home_0.jpg');
        game.load.image('bg_home_1', 'assets/bg_home_1.jpg');

        game.load.image('bg_play_0', 'assets/bg_play_0.jpg');
        game.load.image('bg_play_1', 'assets/bg_play_1.jpg');

        game.load.image('quad_1', 'assets/quad_1.png');

        game.load.image('quad_shadow', 'assets/quad_shadow.png');

        game.load.atlas('gui', 'assets/gui.png', 'assets/gui.json');
        game.load.json('strings', 'text/en.json');

        //sfx
        if (R.canAudio) {
            let sfx = ['error', 'new_shapes', 'new_game', 'put_stone', 'row_removed', 'button'];
            for (var i in sfx) game.load.audio(sfx[i], ['assets/sfx/' + sfx[i] + '.ogg', 'assets/sfx/' + sfx[i] + '.mp3']);
            this.sfx_key = sfx;
        }


        //
        this.createEnvironment();

        //
        game.load.start();
    },

    shutdown: function() {
        this.loadingBarFull = null;
        this.loadText = null;
        this.sfx_key = null;
    },

    createEnvironment: function() {
        game.stage.backgroundColor = game.canvas.parentElement.style.backgroundColor = '#0c0c26';

        let cx = game.world.centerX;

        let logo = game.add.image(320, 700, 'loading', 'logo');
        logo.anchor.set(0.5);

        this.loadingBarFull = game.add.image(cx - 149, 506, 'loading', 'bar_full');
        let cropRect = new Phaser.Rectangle(0, 0, 0, 53);
        this.loadingBarFull.crop(cropRect);

        let loadingBar = game.add.image(cx - 156, 500, 'loading', 'bar_empty');

        this.loadText = R.createText(cx - 4, loadingBar.y + 32, 40, '', '#ffffff', true, 4);
    },

    //
    fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.loadingBarFull.cropRect.width = 315 * progress * 0.01;
        this.loadingBarFull.updateCrop();

        this.loadText.setText(progress + "%");
        Publisher.setLoadingProgress(progress);
    },

    //
    loadComplete: function() {
        //sfx
        if (R.canAudio)
            for (let i in this.sfx_key) R.sfx[this.sfx_key[i]] = game.add.audio(this.sfx_key[i]);

        // 
        R.strings = game.cache.getJSON('strings');

        //
        R.loadGame();

        

        //
        //game.renderer.clearBeforeRender = false;
        //game.state.start('menu');
    }
};

//
R.saveGame = function() {
    Publisher.submitScore(R.score); 
};

//
R.loadGame = function() {
    Publisher.initScore();
};

R.startGame = function(){
    game.state.start('menu')
}