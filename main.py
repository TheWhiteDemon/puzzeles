def on_a_pressed():
    pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

scene.set_background_color(9)
Toster_GUy = sprites.create(img("""
        e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e f f f f e e e e e f f f e e 
            e e e e e e e e e e e e e e e e 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e f f f e e e e e e e 
            e e e e e f f f f f f e e e e e 
            e e e e e f f f f f f e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e
    """),
    SpriteKind.player)
controller.player2.move_sprite(Toster_GUy)

def on_forever():
    music.play_melody("G A - G D B E A ", 120)
    music.play_melody("B C5 E B A F C D ", 120)
    music.play_melody("C E G F G B B C5 ", 120)
forever(on_forever)
