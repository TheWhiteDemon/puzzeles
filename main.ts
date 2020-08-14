scene.setBackgroundColor(9)
effects.clouds.startScreenEffect()
let Player1 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 f 1 1 1 1 f 1 1 1 1 1 f 
    f 1 1 1 f 1 1 1 1 f 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 f 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 f f f 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
let Player2 = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f f 1 
    1 f f f f 1 f f f f 1 f f f f 1 
    1 f f f f 1 f f f f 1 f f f f 1 
    1 f f f f 1 f f f f f f f f f 1 
    1 f f f f f f 1 1 f f f f f f 1 
    1 f f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f f 1 
    1 f f f f f f f f f f f f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.Player)
let Player3 = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
    8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
    8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
    8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
    8 7 7 7 7 6 7 7 6 7 7 7 7 7 7 8 
    8 7 7 7 7 6 7 7 6 7 7 7 7 7 7 8 
    8 7 7 7 7 7 7 7 6 7 7 7 7 7 7 8 
    8 7 7 7 7 7 6 6 7 7 7 7 7 7 7 8 
    8 7 7 7 7 7 7 6 7 7 7 7 7 7 7 8 
    8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
    8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
    8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
    8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
    8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Player)
controller.player1.moveSprite(Player1, 100, 100)
controller.player2.moveSprite(Player2, 100, 100)
controller.player3.moveSprite(Player3, 100, 100)
forever(function () {
    music.playMelody("G A - G D B E A ", 120)
    music.playMelody("B C5 E B A F C D ", 120)
    music.playMelody("C E G F G B B C5 ", 120)
})
