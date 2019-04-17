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
       R.ui.createPopupButton(320, 880, game.world, this.openWindowForProfile, this);
        //
   
        Publisher.analyticsMenu();
    },
 
 openWindowForProfile: function() {
  this.bg = game.add.image(0, 0, 'bg_home_' + R.playerData.theme);
  //let label = R.createText(355, 45, 40, R.playerData.score.toString(), '#000000');
  // let div =  document.getElementById("table_popup").innerHTML;
  /*  var style = { font: "16px Courier", fill: "#fff", tabs: [ 164, 120, 80 ] };

    var headings = [ 'Rank', 'PlayerPhoto', 'PlayerName', 'Score' ];

    text = game.add.text(32, 330, '', style);
    text.parseList(headings);*/

/*var swords = [
        [ 'Knife', '1d3', '1', '' ],
        [ 'Dagger', '1d4', '1', 'May be thrown' ],
        [ 'Rapier', '1d6', '2', 'Max strength damage bonus +1' ],
        [ 'Sabre', '1d6', '3', 'Max strength damage bonus +3' ],
        [ 'Cutlass', '1d6', '5', '' ],
        [ 'Scimitar', '2d4', '4', '' ],
        [ 'Long Sword', '1d8+1', '6', '' ],
        [ 'Bastard Sword', '1d10+1', '8', 'Requires 2 hands to use effectively' ],
        [ 'Great Sword', '1d12+1', '10', 'Must always be used with 2 hands']
    ];*/
   Publisher.getRankScoreList();
  /*  var text2 = game.add.text(32, 390, '', style);
   text2.parseList(swords);*/

    

},

    onPlayButton: function() {
        game.state.start('play');
    },

};