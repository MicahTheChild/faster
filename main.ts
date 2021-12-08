input.onButtonPressed(Button.A, function () {
    stop.move(-1)
})
function falling_block_random () {
    poko = game.createSprite(randint(0, 4), 0)
    basic.pause(500)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    poko.delete()
    basic.pause(500)
}
function falling_block_random3 () {
    poko = game.createSprite(randint(0, 4), 0)
    basic.pause(150)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(150)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(150)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(150)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(150)
    poko.delete()
    basic.pause(150)
}
function falling_block_random2 () {
    poko = game.createSprite(randint(0, 4), 0)
    basic.pause(250)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(250)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(250)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(250)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(250)
    poko.delete()
    basic.pause(250)
}
input.onButtonPressed(Button.B, function () {
    stop.move(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.addScore(10)
})
let poko: game.LedSprite = null
let stop: game.LedSprite = null
stop = game.createSprite(2, 2)
for (let index = 0; index < 10; index++) {
    falling_block_random()
    if (stop.isTouching(poko)) {
        game.addScore(1)
    }
    if (poko.isTouching(stop)) {
        game.addScore(1)
    }
}
basic.showString("" + (game.score()))
if (game.score() >= 5) {
    basic.showString("Nice!")
    basic.showString("3, 2, 1.. GO!!")
    for (let index = 0; index < 15; index++) {
        falling_block_random2()
        if (poko.isTouching(stop)) {
            game.addScore(1)
        }
        if (stop.isTouching(poko)) {
            game.addScore(1)
        }
    }
}
basic.showString("" + (game.score()))
if (game.score() >= 20) {
    basic.showString("Wow!")
    basic.showString("3, 2, 1.. GO!!")
    for (let index = 0; index < 30; index++) {
        falling_block_random3()
        if (poko.isTouching(stop)) {
            game.addScore(1)
        }
        if (stop.isTouching(poko)) {
            game.addScore(1)
        }
    }
}
basic.showString("That's It Folks!")
game.gameOver()
basic.showString("" + (game.score()))
