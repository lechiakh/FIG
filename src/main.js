//
let R = {};
let game = null;

//
R.BASE_GAME_WIDTH = 640;
// R.BASE_GAME_HEIGHT = 960;
R.BASE_GAME_HEIGHT = 1127;

//
R.BANNER_HEIGHT = 10;

//
R.gameHeight = R.BASE_GAME_HEIGHT;
R.prevWindowHeight = 0;

//
R.fontName = 'YatraOne';
R.strings = null;

//
R.canAudio = false;
R.sfx = {};

//
R.score = 0;
R.sctoringEnabled = true;

R.playerData = {
    score: 0,
    theme: 0,
    tutorialCompleted: false
};

//
let startGame = function() {
    game = new Phaser.Game(R.BASE_GAME_WIDTH, R.BASE_GAME_HEIGHT, Phaser.AUTO, 'gameContainer', BootState);
};

//
window.onunload = function() {
    R.saveGame();
};