
// グローバルに展開
phina.globalize();

//シーン定義
//GameAppに渡すと使えるようになる

// アセット
var ASSETS = {
  // 画像
  image: {
    "BG": "./image/BG.png", // 背景画像
    'Ghed':'./image/Ghed.png',
    'Gbody':'./image/Gbody.png',
    'Greg':'./image/Greg.png',
    'Bhed':'./image/Bhed.png',
    'Bbody':'./image/Bbody.png',
    'Breg':'./image/Breg.png',
    'Rhed':'./image/Rhed.png',
    'Rbody':'./image/Rbody.png',
    'Rreg':'./image/Rreg.png',
    'SGhed':'./image/SGhed.png',
    'SGbody':'./image/SGbody.png',
    'SGreg':'./image/SGreg.png',
    'SBhed':'./image/SBhed.png',
    'SBbody':'./image/SBbody.png',
    'SBreg':'./image/SBreg.png',
    'SRhed':'./image/SRhed.png',
    'SRbody':'./image/SRbody.png',
    'SRreg':'./image/SRreg.png',
    'Title':'./image/Title.png',
    'DRUMS':'./image/DRUMS.png',
    'MELODY':'./image/MLODY.png',
    'BACKING':'./image/BACKING.png',
    '2Ghed':'./image/2Ghed.png',
    '2Bhed':'./image/2Bhed.png',
    '2Rhed':'./image/2Rhed.png',
    '2Gbody':'./image/2Gbody.png',
    '2Bbody':'./image/2Bbody.png',
    '2Rbody':'./image/2Rbody.png',
    '2Greg':'./image/2Greg.png',
    '2Breg':'./image/2Breg.png',
    '2Rreg':'./image/2Rreg.png',
    'yazi':'./image/Yazirushi.png',
  },
  sound: {
    '111':'./music/111.wav',
    '112':'./music/112.wav',
    '113':'./music/113.wav',
    '121':'./music/121.wav',
    '122':'./music/122.wav',
    '123':'./music/123.wav',
    '131':'./music/131.wav',
    '132':'./music/132.wav',
    '133':'./music/133.wav',

    '211':'./music/211.wav',
    '212':'./music/212.wav',
    '213':'./music/213.wav',
    '221':'./music/221.wav',
    '222':'./music/222.wav',
    '223':'./music/223.wav',
    '231':'./music/231.wav',
    '232':'./music/232.wav',
    '233':'./music/233.wav',

    '311':'./music/311.wav',
    '312':'./music/312.wav',
    '313':'./music/313.wav',
    '321':'./music/321.wav',
    '322':'./music/322.wav',
    '323':'./music/323.wav',
    '331':'./music/331.wav',
    '332':'./music/332.wav',
    '333':'./music/333.wav',
  },

 // スプライトシート
 spritesheet: {
  "Title_ss":
  {
    // フレーム情報
    "frame" : {
      "width": 640, // 1フレームの画像サイズ（横）
      "height": 960, // 1フレームの画像サイズ（縦）
      "cols": 2, // フレーム数（横）
      "rows": 1, // フレーム数（縦）
    },
    // アニメーション情報
    "animations" : {
      "tikatika": { // アニメーション名
        "frames": [0,0,0,1], // フレーム番号範囲
        "next": "tikatika", // 次のアニメーション
        "frequency": 10, // アニメーション間隔}
      },
    }
  },

  "Ghed_ss":
  {
    // フレーム情報
    "frame" : {
      "width": 160, // 1フレームの画像サイズ（横）
      "height": 160, // 1フレームの画像サイズ（縦）
      "cols": 5, // フレーム数（横）
      "rows": 6, // フレーム数（縦）
    },
    // アニメーション情報
    "animations" : {
      "dance": { // アニメーション名
        "frames": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], // フレーム番号範囲
        "next": "dance", // 次のアニメーション
        "frequency": 4, // アニメーション間隔}
      },
    }
  },
  "Gbody_ss":
  {
    // フレーム情報
    "frame" : {
      "width": 160, // 1フレームの画像サイズ（横）
      "height": 160, // 1フレームの画像サイズ（縦）
      "cols": 5, // フレーム数（横）
      "rows": 6, // フレーム数（縦）
    },
    // アニメーション情報
    "animations" : {
      "dance": { // アニメーション名
        "frames": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], // フレーム番号範囲
        "next": "dance", // 次のアニメーション
        "frequency": 4, // アニメーション間隔}
      },
    }
  },
  "Greg_ss":
  {
    // フレーム情報
    "frame" : {
      "width": 160, // 1フレームの画像サイズ（横）
      "height": 160, // 1フレームの画像サイズ（縦）
      "cols": 5, // フレーム数（横）
      "rows": 6, // フレーム数（縦）
    },
    // アニメーション情報
    "animations" : {
      "dance": { // アニメーション名
        "frames": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], // フレーム番号範囲
        "next": "dance", // 次のアニメーション
        "frequency": 4, // アニメーション間隔}
      },
    }
  },
  "Bhed_ss":
  {
    // フレーム情報
    "frame" : {
      "width": 160, // 1フレームの画像サイズ（横）
      "height": 160, // 1フレームの画像サイズ（縦）
      "cols": 5, // フレーム数（横）
      "rows": 6, // フレーム数（縦）
    },
    // アニメーション情報
    "animations" : {
      "dance": { // アニメーション名
        "frames": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], // フレーム番号範囲
        "next": "dance", // 次のアニメーション
        "frequency": 4, // アニメーション間隔}
      },
    }
  },
  "Bbody_ss":
  {
    // フレーム情報
    "frame" : {
      "width": 160, // 1フレームの画像サイズ（横）
      "height": 160, // 1フレームの画像サイズ（縦）
      "cols": 5, // フレーム数（横）
      "rows": 6, // フレーム数（縦）
    },
    // アニメーション情報
    "animations" : {
      "dance": { // アニメーション名
        "frames": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], // フレーム番号範囲
        "next": "dance", // 次のアニメーション
        "frequency": 4, // アニメーション間隔}
      },
    }
  },
  "Breg_ss":
  {
    // フレーム情報
    "frame" : {
      "width": 160, // 1フレームの画像サイズ（横）
      "height": 160, // 1フレームの画像サイズ（縦）
      "cols": 5, // フレーム数（横）
      "rows": 6, // フレーム数（縦）
    },
    // アニメーション情報
    "animations" : {
      "dance": { // アニメーション名
        "frames": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], // フレーム番号範囲
        "next": "dance", // 次のアニメーション
        "frequency": 4, // アニメーション間隔}
      },
    }
  },
  "Rhed_ss":
  {
    // フレーム情報
    "frame" : {
      "width": 160, // 1フレームの画像サイズ（横）
      "height": 160, // 1フレームの画像サイズ（縦）
      "cols": 5, // フレーム数（横）
      "rows": 6, // フレーム数（縦）
    },
    // アニメーション情報
    "animations" : {
      "dance": { // アニメーション名
        "frames": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], // フレーム番号範囲
        "next": "dance", // 次のアニメーション
        "frequency": 4, // アニメーション間隔}
      },
    }
  },
  "Rbody_ss":
  {
    // フレーム情報
    "frame" : {
      "width": 160, // 1フレームの画像サイズ（横）
      "height": 160, // 1フレームの画像サイズ（縦）
      "cols": 5, // フレーム数（横）
      "rows": 6, // フレーム数（縦）
    },
    // アニメーション情報
    "animations" : {
      "dance": { // アニメーション名
        "frames": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], // フレーム番号範囲
        "next": "dance", // 次のアニメーション
        "frequency": 4, // アニメーション間隔}
      },
    }
  },
  "Rreg_ss":
  {
    // フレーム情報
    "frame" : {
      "width": 160, // 1フレームの画像サイズ（横）
      "height": 160, // 1フレームの画像サイズ（縦）
      "cols": 5, // フレーム数（横）
      "rows": 6, // フレーム数（縦）
    },
    // アニメーション情報
    "animations" : {
      "dance": { // アニメーション名
        "frames": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], // フレーム番号範囲
        "next": "dance", // 次のアニメーション
        "frequency": 4, // アニメーション間隔}
      },
    }
  },

}
};


//メインシーン

phina.define('Scene01', {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function() {
    // 親クラス初期化
    this.superInit();
    // 背景色
    this.backgroundColor = 'SkyBlue';
    // 背景
    Sprite('BG').addChildTo(this).setPosition(this.gridX.center(), this.gridY.center());
//タイトル
var sp0 = Sprite('Title', 640, 960).addChildTo(this).setPosition(this.gridX.center(), this.gridY.center());
 // スプライトにフレームアニメーションをアタッチ
var anim = FrameAnimation('Title_ss').attachTo(sp0);
// アニメーションを指定する
anim.gotoAndPlay('tikatika');
     //仮

     var label3 = Label('Electro.D         Electro.M         Electro.B').addChildTo(this);
     label3.setPosition(this.gridX.center(), 430);
     label3.fontSize = 25;
     label3.fontFamily = "'Arial Black'";
     label3.fill = 'black';
     label3.strokeWidth = 4;
     label3.stroke = 'white';

     var label3 = Label('Rock.D            Rock.M             Rock.B').addChildTo(this);
     label3.setPosition(this.gridX.center(), 620);
     label3.fontSize = 25;
     label3.fontFamily = "'Arial Black'";
     label3.fill = 'black';
     label3.strokeWidth = 4;
     label3.stroke = 'white';

     var label3 = Label('China.D            China.M           China.B').addChildTo(this);
     label3.setPosition(this.gridX.center(), 810);
     label3.fontSize = 25;
     label3.fontFamily = "'Arial Black'";
     label3.fill = 'black';
     label3.strokeWidth = 4;
     label3.stroke = 'white';

     var self = this;

     var num1 = false;
     var num2 = false;
     var num3 = false;
     var num4 = false;
     var num5 = false;
     var num6 = false;
     var num7 = false;
     var num8 = false;
     var num9 = false;
     var rnum = 0;

// Sprite
Sprite('DRUMS').addChildTo(this).setPosition(125, 270).setScale(0.7, 0.7);
Sprite('BACKING').addChildTo(this).setPosition(525, 270).setScale(0.7, 0.7);
Sprite('MELODY').addChildTo(this).setPosition(323, 270).setScale(0.7, 0.7);

var group1 = DisplayElement().addChildTo(this);
var group2 = DisplayElement().addChildTo(this);
var group3 = DisplayElement().addChildTo(this);

Sprite('2Ghed').addChildTo(group1).setPosition(120, 420).setScale(1.2, 1.2).setInteractive(true);
var H1 = Sprite('SGhed').addChildTo(group1).setPosition(120, 420).setScale(1.2, 1.2).setInteractive(true);
H1.onpointend = function() {
  group1.children.swap(0, 1);
  num1 = !num1;
};
Sprite('2Rhed').addChildTo(group1).setPosition(120, 600).setScale(1.2, 1.2).setInteractive(true);
var H2 = Sprite('SRhed').addChildTo(group1).setPosition(120, 600).setScale(1.2, 1.2).setInteractive(true);
H2.onpointend = function() {
  group1.children.swap(2,3);
  num2 = !num2;
};
Sprite('2Bhed').addChildTo(group1).setPosition(120, 790).setScale(1.2, 1.2).setInteractive(true);
var H3 = Sprite('SBhed').addChildTo(group1).setPosition(120, 790).setScale(1.2, 1.2).setInteractive(true);
H3.onpointend = function() {
  group1.children.swap(4,5);
  num3 = !num3;
};
Sprite('2Gbody').addChildTo(group2).setPosition(320, 330).setScale(1.2, 1.2).setInteractive(true);
var H4 = Sprite('SGbody').addChildTo(group2).setPosition(320, 330).setScale(1.2, 1.2).setInteractive(true);
H4.onpointend = function() {
  group2.children.swap(0,1);
  num4 = !num4;
};
Sprite('2Rbody').addChildTo(group2).setPosition(320, 520).setScale(1.2, 1.2).setInteractive(true);
var H5 = Sprite('SRbody').addChildTo(group2).setPosition(320, 520).setScale(1.2, 1.2).setInteractive(true);
H5.onpointend = function() {
  group2.children.swap(2,3);
  num5 = !num5;
};
Sprite('2Bbody').addChildTo(group2).setPosition(320, 710).setScale(1.2, 1.2).setInteractive(true);
var H6 = Sprite('SBbody').addChildTo(group2).setPosition(320, 710).setScale(1.2, 1.2).setInteractive(true);
H6.onpointend = function() {
  group2.children.swap(4,5);
  num6 = !num6;
};
Sprite('2Greg').addChildTo(group3).setPosition(520, 300).setScale(1.2, 1.2).setInteractive(true);
var H7 = Sprite('SGreg').addChildTo(group3).setPosition(520, 300).setScale(1.2, 1.2).setInteractive(true);
H7.onpointend = function() {
  group3.children.swap(0,1);
  num7 = !num7;
};
Sprite('2Rreg').addChildTo(group3).setPosition(520, 490).setScale(1.2, 1.2).setInteractive(true);
var H8 = Sprite('SRreg').addChildTo(group3).setPosition(520, 490).setScale(1.2, 1.2).setInteractive(true);
H8.onpointend = function() {
  group3.children.swap(2,3);
  num8 = !num8;
};
Sprite('2Breg').addChildTo(group3).setPosition(520, 680).setScale(1.2, 1.2).setInteractive(true);
var H9 = Sprite('SBreg').addChildTo(group3).setPosition(520, 680).setScale(1.2, 1.2).setInteractive(true);
H9.onpointend = function() {
  group3.children.swap(4,5);
  num9 = !num9;
};




var Ya = Sprite('yazi').addChildTo(this).setPosition(550,890).setScale(0.8,0.8).setInteractive(true);
Ya.onpointend = function(){
  if(num1 == true && num4 == true &&  num7 == true){rnum=1}
  if(num1 == true && num4 == true &&  num8 == true){rnum=2}
  if(num1 == true && num4 == true &&  num9 == true){rnum=3}
  if(num1 == true && num5 == true &&  num7 == true){rnum=4}
  if(num1 == true && num5 == true &&  num8 == true){rnum=5}
  if(num1 == true && num5 == true &&  num9 == true){rnum=6}
  if(num1 == true && num6 == true &&  num7 == true){rnum=7}
  if(num1 == true && num6 == true &&  num8 == true){rnum=8}
  if(num1 == true && num6 == true &&  num9 == true){rnum=9}
  if(num2 == true && num4 == true &&  num7 == true){rnum=10}
  if(num2 == true && num4 == true &&  num8 == true){rnum=11}
  if(num2 == true && num4 == true &&  num9 == true){rnum=12}
  if(num2 == true && num5 == true &&  num7 == true){rnum=13}
  if(num2 == true && num5 == true &&  num8 == true){rnum=14}
  if(num2 == true && num5 == true &&  num9 == true){rnum=15}
  if(num2 == true && num6 == true &&  num7 == true){rnum=16}
  if(num2 == true && num6 == true &&  num8 == true){rnum=17}
  if(num2 == true && num6 == true &&  num9 == true){rnum=18}
  if(num3 == true && num4 == true &&  num7 == true){rnum=19}
  if(num3 == true && num4 == true &&  num8 == true){rnum=20}
  if(num3 == true && num4 == true &&  num9 == true){rnum=21}
  if(num3 == true && num5 == true &&  num7 == true){rnum=22}
  if(num3 == true && num5 == true &&  num8 == true){rnum=23}
  if(num3 == true && num5 == true &&  num9 == true){rnum=24}
  if(num3 == true && num6 == true &&  num7 == true){rnum=25}
  if(num3 == true && num6 == true &&  num8 == true){rnum=26}
  if(num3 == true && num6 == true &&  num9 == true){rnum=27}
  self.exit({
    touchedPos: rnum,
  });
};
},
})
/*
 * シーン02
 */
phina.define("Scene02", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function(param) {
    // 親クラス初期化
    this.superInit(param);
    // 背景色
    this.backgroundColor = 'blue';
     // 背景
     Sprite('BG').addChildTo(this).setPosition(this.gridX.center(), this.gridY.center());

     //タイトル
var sp0 = Sprite('Title', 640, 960).addChildTo(this).setPosition(this.gridX.center(), this.gridY.center());
// スプライトにフレームアニメーションをアタッチ
var anim = FrameAnimation('Title_ss').attachTo(sp0);
// アニメーションを指定する
anim.gotoAndPlay('tikatika');

var numA = param.touchedPos;

var sp1 = Sprite('Ghed', 64, 64).addChildTo(this).setPosition(320, 480).setScale(2.5, 2.5).hide();
 // スプライトにフレームアニメーションをアタッチ
var anim = FrameAnimation('Ghed_ss').attachTo(sp1);
// アニメーションを指定する
anim.gotoAndPlay('dance');

var sp2 = Sprite('Gbody', 64, 64).addChildTo(this).setPosition(320, 480).setScale(2.5, 2.5).hide();
// スプライトにフレームアニメーションをアタッチ
var anim = FrameAnimation('Gbody_ss').attachTo(sp2);
// アニメーションを指定する
anim.gotoAndPlay('dance');

var sp3 = Sprite('Greg', 64, 64).addChildTo(this).setPosition(320, 480).setScale(2.5, 2.5).hide();
// スプライトにフレームアニメーションをアタッチ
var anim = FrameAnimation('Greg_ss').attachTo(sp3);
// アニメーションを指定する
anim.gotoAndPlay('dance');

var sp4 = Sprite('Rhed', 64, 64).addChildTo(this).setPosition(320, 480).setScale(2.5, 2.5).hide();
 // スプライトにフレームアニメーションをアタッチ
var anim = FrameAnimation('Rhed_ss').attachTo(sp4);
// アニメーションを指定する
anim.gotoAndPlay('dance');

var sp5 = Sprite('Rbody', 64, 64).addChildTo(this).setPosition(320, 480).setScale(2.5, 2.5).hide();
// スプライトにフレームアニメーションをアタッチ
var anim = FrameAnimation('Rbody_ss').attachTo(sp5);
// アニメーションを指定する
anim.gotoAndPlay('dance');

var sp6 = Sprite('Rreg', 64, 64).addChildTo(this).setPosition(320, 480).setScale(2.5, 2.5).hide();
// スプライトにフレームアニメーションをアタッチ
var anim = FrameAnimation('Rreg_ss').attachTo(sp6);
// アニメーションを指定する
anim.gotoAndPlay('dance');

var sp7 = Sprite('Bhed', 64, 64).addChildTo(this).setPosition(320, 480).setScale(2.5, 2.5).hide();
 // スプライトにフレームアニメーションをアタッチ
var anim = FrameAnimation('Bhed_ss').attachTo(sp7);
// アニメーションを指定する
anim.gotoAndPlay('dance');

var sp8 = Sprite('Bbody', 64, 64).addChildTo(this).setPosition(320, 480).setScale(2.5, 2.5).hide();
// スプライトにフレームアニメーションをアタッチ
var anim = FrameAnimation('Bbody_ss').attachTo(sp8);
// アニメーションを指定する
anim.gotoAndPlay('dance');

var sp9 = Sprite('Breg', 64, 64).addChildTo(this).setPosition(320, 480).setScale(2.5, 2.5).hide();
// スプライトにフレームアニメーションをアタッチ
var anim = FrameAnimation('Breg_ss').attachTo(sp9);
// アニメーションを指定する
anim.gotoAndPlay('dance');

var L111 = Label('Electro.D : Electro.M : Electro.B').setPosition(this.gridX.center(), 800);
L111.fontSize =33;
L111.fontFamily = "'Arial Black'";
L111.fill = 'black';
L111.strokeWidth = 4;
L111.stroke = 'white';
var L112 = Label('Electro.D : Electro.M : Rock.B').setPosition(this.gridX.center(), 800);
L112.fontSize =33;
L112.fontFamily = "'Arial Black'";
L112.fill = 'black';
L112.strokeWidth = 4;
L112.stroke = 'white';
var L113 = Label('Electro.D : Electro.M : China.B').setPosition(this.gridX.center(), 800);
L113.fontSize =33;
L113.fontFamily = "'Arial Black'";
L113.fill = 'black';
L113.strokeWidth = 4;
L113.stroke = 'white';
var L121 = Label('Electro.D : Rock.M : Electro.B').setPosition(this.gridX.center(), 800);
L121.fontSize =33;
L121.fontFamily = "'Arial Black'";
L121.fill = 'black';
L121.strokeWidth = 4;
L121.stroke = 'white';
var L122 = Label('Electro.D : Rock.M : Rock.B').setPosition(this.gridX.center(), 800);
L122.fontSize =33;
L122.fontFamily = "'Arial Black'";
L122.fill = 'black';
L122.strokeWidth = 4;
L122.stroke = 'white';
var L123 = Label('Electro.D : Rock.M : China.B').setPosition(this.gridX.center(), 800);
L123.fontSize =33;
L123.fontFamily = "'Arial Black'";
L123.fill = 'black';
L123.strokeWidth = 4;
L123.stroke = 'white';
var L131 = Label('Electro.D : China.M : Electro.B').setPosition(this.gridX.center(), 800);
L131.fontSize =33;
L131.fontFamily = "'Arial Black'";
L131.fill = 'black';
L131.strokeWidth = 4;
L131.stroke = 'white';
var L132 = Label('Electro.D : China.M : Rock.B').setPosition(this.gridX.center(), 800);
L132.fontSize =33;
L132.fontFamily = "'Arial Black'";
L132.fill = 'black';
L132.strokeWidth = 4;
L132.stroke = 'white';
var L133 = Label('Electro.D : China.M : China.B').setPosition(this.gridX.center(), 800);
L133.fontSize =33;
L133.fontFamily = "'Arial Black'";
L133.fill = 'black';
L133.strokeWidth = 4;
L133.stroke = 'white';

var L211 = Label('Rock.D : Electro.M : Electro.B').setPosition(this.gridX.center(), 800);
L211.fontSize =33;
L211.fontFamily = "'Arial Black'";
L211.fill = 'black';
L211.strokeWidth = 4;
L211.stroke = 'white';
var L212 = Label('Rock.D : Electro.M : Rock.B').setPosition(this.gridX.center(), 800);
L212.fontSize =33;
L212.fontFamily = "'Arial Black'";
L212.fill = 'black';
L212.strokeWidth = 4;
L212.stroke = 'white';
var L213 = Label('Rock.D : Electro.M : China.B').setPosition(this.gridX.center(), 800);
L213.fontSize =33;
L213.fontFamily = "'Arial Black'";
L213.fill = 'black';
L213.strokeWidth = 4;
L213.stroke = 'white';
var L221 = Label('Rock.D : Rock.M : Electro.B').setPosition(this.gridX.center(), 800);
L221.fontSize =33;
L221.fontFamily = "'Arial Black'";
L221.fill = 'black';
L221.strokeWidth = 4;
L221.stroke = 'white';
var L222 = Label('Rock.D : Rock.M : Rock.B').setPosition(this.gridX.center(), 800);
L222.fontSize =33;
L222.fontFamily = "'Arial Black'";
L222.fill = 'black';
L222.strokeWidth = 4;
L222.stroke = 'white';
var L223 = Label('Rock.D : Rock.M : China.B').setPosition(this.gridX.center(), 800);
L223.fontSize =33;
L223.fontFamily = "'Arial Black'";
L223.fill = 'black';
L223.strokeWidth = 4;
L223.stroke = 'white';
var L231 = Label('Rock.D : China.M : Electro.B').setPosition(this.gridX.center(), 800);
L231.fontSize =33;
L231.fontFamily = "'Arial Black'";
L231.fill = 'black';
L231.strokeWidth = 4;
L231.stroke = 'white';
var L232 = Label('Rock.D : China.M : Rock.B').setPosition(this.gridX.center(), 800);
L232.fontSize =33;
L232.fontFamily = "'Arial Black'";
L232.fill = 'black';
L232.strokeWidth = 4;
L232.stroke = 'white';
var L233 = Label('Rock.D : China.M : China.B').setPosition(this.gridX.center(), 800);
L233.fontSize =33;
L233.fontFamily = "'Arial Black'";
L233.fill = 'black';
L233.strokeWidth = 4;
L233.stroke = 'white';

var L311 = Label('China.D : Electro.M : Electro.B').setPosition(this.gridX.center(), 800);
L311.fontSize =33;
L311.fontFamily = "'Arial Black'";
L311.fill = 'black';
L311.strokeWidth = 4;
L311.stroke = 'white';
var L312 = Label('China.D : Electro.M : Rock.B').setPosition(this.gridX.center(), 800);
L312.fontSize =33;
L312.fontFamily = "'Arial Black'";
L312.fill = 'black';
L312.strokeWidth = 4;
L312.stroke = 'white';
var L313 = Label('China.D : Electro.M : China.B').setPosition(this.gridX.center(), 800);
L313.fontSize =33;
L313.fontFamily = "'Arial Black'";
L313.fill = 'black';
L313.strokeWidth = 4;
L313.stroke = 'white';
var L321 = Label('China.D : Rock.M : Electro.B').setPosition(this.gridX.center(), 800);
L321.fontSize =33;
L321.fontFamily = "'Arial Black'";
L321.fill = 'black';
L321.strokeWidth = 4;
L321.stroke = 'white';
var L322 = Label('China.D : Rock.M : Rock.B').setPosition(this.gridX.center(), 800);
L322.fontSize =33;
L322.fontFamily = "'Arial Black'";
L322.fill = 'black';
L322.strokeWidth = 4;
L322.stroke = 'white';
var L323 = Label('China.D : Rock.M : China.B').setPosition(this.gridX.center(), 800);
L323.fontSize =33;
L323.fontFamily = "'Arial Black'";
L323.fill = 'black';
L323.strokeWidth = 4;
L323.stroke = 'white';
var L331 = Label('China.D : China.M : Electro.B').setPosition(this.gridX.center(), 800);
L331.fontSize =33;
L331.fontFamily = "'Arial Black'";
L331.fill = 'black';
L331.strokeWidth = 4;
L331.stroke = 'white';
var L332 = Label('China.D : China.M : Rock.B').setPosition(this.gridX.center(), 800);
L332.fontSize =33;
L332.fontFamily = "'Arial Black'";
L332.fill = 'black';
L332.strokeWidth = 4;
L332.stroke = 'white';
var L333 = Label('China.D : China.M : China.B').setPosition(this.gridX.center(), 800);
L333.fontSize =33;
L333.fontFamily = "'Arial Black'";
L333.fill = 'black';
L333.strokeWidth = 4;
L333.stroke = 'white';


  if(numA == 1){sp1.show(),sp2.show(),sp3.show(), SoundManager.play('111'),
  L111.addChildTo(this);};
  if(numA == 2){sp1.show(),sp2.show(),sp6.show(), SoundManager.play('112'),
  L112.addChildTo(this);};
  if(numA == 3){sp1.show(),sp2.show(),sp9.show(), SoundManager.play('113'),
  L113.addChildTo(this);};
  if(numA == 4){sp1.show(),sp5.show(),sp3.show(), SoundManager.play('121'),
  L121.addChildTo(this);};
  if(numA == 5){sp1.show(),sp5.show(),sp6.show(), SoundManager.play('122'),
  L122.addChildTo(this);};
  if(numA == 6){sp1.show(),sp5.show(),sp9.show(), SoundManager.play('123'),
  L123.addChildTo(this);};
  if(numA == 7){sp1.show(),sp8.show(),sp3.show(), SoundManager.play('131'),
  L131.addChildTo(this);};
  if(numA == 8){sp1.show(),sp8.show(),sp6.show(), SoundManager.play('132'),
  L132.addChildTo(this);};
  if(numA == 9){sp1.show(),sp8.show(),sp9.show(), SoundManager.play('133'),
  L133.addChildTo(this);};
  if(numA == 10){sp4.show(),sp2.show(),sp3.show(), SoundManager.play('211'),
  L211.addChildTo(this);};
  if(numA == 11){sp4.show(),sp2.show(),sp6.show(), SoundManager.play('212'),
  L212.addChildTo(this);};
  if(numA == 12){sp4.show(),sp2.show(),sp9.show(), SoundManager.play('213'),
  L213.addChildTo(this);};
  if(numA == 13){sp4.show(),sp5.show(),sp3.show(), SoundManager.play('221'),
  L221.addChildTo(this);};
  if(numA == 14){sp4.show(),sp5.show(),sp6.show(), SoundManager.play('222'),
  L222.addChildTo(this);};
  if(numA == 15){sp4.show(),sp5.show(),sp9.show(), SoundManager.play('223'),
  L223.addChildTo(this);};
  if(numA == 16){sp4.show(),sp8.show(),sp3.show(), SoundManager.play('231'),
  L231.addChildTo(this);};
  if(numA == 17){sp4.show(),sp8.show(),sp6.show(), SoundManager.play('232'),
  L232.addChildTo(this);};
  if(numA == 18){sp4.show(),sp8.show(),sp9.show(), SoundManager.play('233'),
  L233.addChildTo(this);};
  if(numA == 19){sp7.show(),sp2.show(),sp3.show(), SoundManager.play('311'),
  L311.addChildTo(this);};
  if(numA == 20){sp7.show(),sp2.show(),sp6.show(), SoundManager.play('312'),
  L312.addChildTo(this);};
  if(numA == 21){sp7.show(),sp2.show(),sp9.show(), SoundManager.play('313'),
  L313.addChildTo(this);};
  if(numA == 22){sp7.show(),sp5.show(),sp3.show(), SoundManager.play('321'),
  L321.addChildTo(this);};
  if(numA == 23){sp7.show(),sp5.show(),sp6.show(), SoundManager.play('322'),
  L322.addChildTo(this);};
  if(numA == 24){sp7.show(),sp5.show(),sp9.show(), SoundManager.play('323'),
  L323.addChildTo(this);};
  if(numA == 25){sp7.show(),sp8.show(),sp3.show(), SoundManager.play('331'),
  L331.addChildTo(this);};
  if(numA == 26){sp7.show(),sp8.show(),sp6.show(), SoundManager.play('332'),
  L332.addChildTo(this);};
  if(numA == 27){sp7.show(),sp8.show(),sp9.show(), SoundManager.play('333'),
  L333.addChildTo(this);};


 },
});
/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
 // アセット読み込み
    assets: ASSETS,
   // MainScene から開始
   startLabel: 'scene01',
   scenes: [
    {
      className: 'Scene01',
      label: 'scene01',
      nextLabel: 'scene02',
    },

    {
      className: 'Scene02',
      label: 'scene02',
      nextLabel: 'scene01',
    },
  ]

  });
  // アプリケーション実行
  app.run();
});