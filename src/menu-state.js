//
let MenuState = {

    bg: null,

    shutdown: function() {
        this.bg = null;
    },

    //
    create: function() {
        this.bg = game.add.image(0, 0, 'bg_home_' + R.playerData.theme);

        let label = R.createText(355, 45, 40, R.playerData.score.toString(), '#000000');

        //
        R.ui.createBigPlayButton(320, 470, game.world, this.onPlayButton, this);
        R.ui.createRankButton(320, 680, game.world, true);
        R.ui.createShareButton(320, 880, game.world, true);

        //
        Publisher.analyticsMenu();
    },

    onPlayButton: function() {
        game.state.start('play');
    },

};