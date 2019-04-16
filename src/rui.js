//
R.createText = function(x, y, size, text, fill, isStroke, strokeThicknes, isWrap) {
    if (!fill) fill = '#ffffff';
    let label = game.add.text(x, y, text);
    label.font = R.fontName;
    label.anchor.set(0.5);
    label.align = 'center';
    label.fontSize = size;
    label.fill = fill;

    if (isStroke) {
        label.stroke = '#000000';
        label.strokeThickness = strokeThicknes;
    }
    if (isWrap) {
        label.wordWrap = true;
        label.wordWrapWidth = game.width - 10;
    }
    return label;
};

//GUI
R.ui = {

    btnTheme: null,
    btnSound: null,

    buttonsEnabled: function(group, enabled) {
        let i = group.total;
        while (i--)
            if (group.children[i].type === Phaser.BUTTON) group.children[i].inputEnabled = enabled;

    },

    //
    createHomeButton: function(x, y, group) {
        let btn = game.add.button(x, y, 'gui', this.onHomeButton, this, 'btn_home', 'btn_home', 'btn_home_pressed', 'btn_home');
        btn.anchor.set(0.5);
        if (R.sfx.button) btn.setDownSound(R.sfx.button);
        if (group) group.add(btn);
    },

    onHomeButton: function() {
        R.saveGame();

        Publisher.showAdvertising();

        game.state.start('menu');
    },

    createRankButton: function(x, y, group, big) {
        let btn = game.add.button(x, y, 'gui', this.onRankButton, this, 'btn_big_play', 'btn_big_play', 'btn_big_play_pressed', 'btn_big_play');
        btn.anchor.set(0.5);
        if (R.sfx.button) btn.setDownSound(R.sfx.button);
        if (group) group.add(btn);
        this.btnTheme = btn;
        this.btnTheme.big = big;
    },

    onRankButton: function() {
        Publisher.showRank(); 
    },

	
	 createShareButton: function(x, y, group, big) {
        let btn = game.add.button(x, y, 'gui', this.onShareButton, this, 'btn_big_play', 'btn_big_play', 'btn_big_play_pressed', 'btn_big_play');
        btn.anchor.set(0.5);
        if (R.sfx.button) btn.setDownSound(R.sfx.button);
        if (group) group.add(btn);
        this.btnTheme = btn;
        this.btnTheme.big = big;
    },
	 onShareButton: function() {
        Publisher.customShare(); 
    },

    customUpdateButton: function(x, y, group, big) {
        let btn = game.add.button(x, y, 'gui', this.customUpdate, this, 'btn_big_play', 'btn_big_play', 'btn_big_play_pressed', 'btn_big_play');
        btn.anchor.set(0.5);
        if (R.sfx.button) btn.setDownSound(R.sfx.button);
        if (group) group.add(btn);
        this.btnTheme = btn;
        this.btnTheme.big = big;
    },

    customUpdate: function() {
        Publisher.customUpdate();
    },

    customShowFriendsButton: function(x, y, group, big) {
        let btn = game.add.button(x, y, 'gui', this.customShowFriends, this, 'btn_big_play', 'btn_big_play', 'btn_big_play_pressed', 'btn_big_play');
        btn.anchor.set(0.5);
        if (R.sfx.button) btn.setDownSound(R.sfx.button);
        if (group) group.add(btn);
        this.btnTheme = btn;
        this.btnTheme.big = big;
    },

    customShowFriends: function() {
        Publisher.customShowFriends();
    },

    createSoundButton: function(x, y, group) {
        let frameNormal = game.sound.mute ? 'btn_sound_off' : 'btn_sound_on';
        let framePressed = game.sound.mute ? 'btn_sound_off_pressed' : 'btn_sound_on_pressed';

        let btn = game.add.button(x, y, 'gui', this.onSoundButton, this, frameNormal, frameNormal, framePressed, frameNormal);
        btn.anchor.set(0.5);
        if (R.sfx.button) btn.setDownSound(R.sfx.button);
        if (group) group.add(btn);
        this.btnSound = btn;

        btn.visible = R.canAudio;
    },

    onSoundButton: function() {
        game.sound.mute = !game.sound.mute;

        let frameNormal = game.sound.mute ? 'btn_sound_off' : 'btn_sound_on';
        let framePressed = game.sound.mute ? 'btn_sound_off_pressed' : 'btn_sound_on_pressed';

        this.btnSound.setFrames(frameNormal, frameNormal, framePressed, frameNormal);
    },

    createSmallPlayButton: function(x, y, group, callback, context) {
        let btn = game.add.button(x, y, 'gui', callback, context, 'btn_small_play', 'btn_small_play', 'btn_small_play_pressed', 'btn_small_play');
        btn.anchor.set(0.5);
        if (R.sfx.button) btn.setDownSound(R.sfx.button);
        if (group) group.add(btn);
    },

    createBigPlayButton: function(x, y, group, callback, context) {
        let btn = game.add.button(x, y, 'gui', callback, context, 'btn_big_play', 'btn_big_play', 'btn_big_play_pressed', 'btn_big_play');
        btn.anchor.set(0.5);
        if (R.sfx.button) btn.setDownSound(R.sfx.button);
        if (group) group.add(btn);
    },

    createTextButton: function(x, y, group, callback, context, string) {
        let btn = game.add.button(x, y, 'gui', callback, context, 'button', 'button', 'button_pressed', 'button');
        btn.anchor.set(0.5);
        if (R.sfx.button) btn.setDownSound(R.sfx.button);
        if (group) group.add(btn);

        if (string) {
            let label = R.createText(0, -10, 45, string, '#ffffff', true, 4);
            label.stroke = '#000000';
            btn.addChild(label);
        }
    }
};