input.onButtonPressed(Button.A, function () {
    angry += 2
})
let angry = 20
basic.forever(function () {
    if (angry < 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.play(music.stringPlayable("C5 G C5 G C5 G C5 G ", 120), music.PlaybackMode.UntilDone)
    }
    if (angry > 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
        music.play(music.stringPlayable("E G G A B B E G ", 120), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    angry += -1
    basic.pause(2000)
})
